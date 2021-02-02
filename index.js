/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { saveUserDataToSharedStorage, getQuoteOfToday } from "./utils/SharedPreferences";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import axios from "axios"

// Register background handler
async function updateWidget(){
    const quote = await getQuoteOfToday();
	const widgetData = {
		title: quote.title,
		meaning: quote.quote
	}
	console.log("Widget Data from index: ", widgetData);
	await saveUserDataToSharedStorage(widgetData);
}

async function pushNotification(){
    var storageData = await AsyncStorage.getItem("user_data");
	const u = JSON.parse(storageData);
	if(u.reminder != null){
		const now = moment();
		const date = now.clone().format("YYYY-MM-DD");
		const reminder = moment(`${date} ${u.reminder}`).utc();
		var duration = moment.duration(now.diff(reminder));
		const diff_mins = duration.asMinutes();
		if(diff_mins > 0 && diff_mins < 5){
			axios({
				method: "POST",
				url: "https://us-central1-ctr-daily.cloudfunctions.net/sendReminder",
				data: {
					uid: u.uid,
				}
			})
		}
	}
    

}

messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage);
	const { data } = remoteMessage;
	await updateWidget();
	if(data.type == "5mins"){
		pushNotification();
	} 
});

updateWidget();

AppRegistry.registerComponent(appName, () => App);

