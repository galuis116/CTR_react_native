import React, { Component } from 'react';
import { RootSiblingParent } from "react-native-root-siblings";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "./screens/SplashScreen";
import OnboardStack from "./navigations/OnboardStack";
import MainStack from "./navigations/MainStack";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import messaging from "@react-native-firebase/messaging";
import { saveUserDataToSharedStorage, getQuoteOfToday } from "./utils/SharedPreferences";
import { navigationRef } from './navigations/helper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import axios from "axios";

const store = configureStore();
const Stack = createStackNavigator();

async function updateWidget(){
    const quote = await getQuoteOfToday();
    const widgetData = {
        title: quote.title,
        meaning: quote.quote
    }
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

class App extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        messaging().onMessage(async remoteMessage => {
            console.log("Remote message arrived:", remoteMessage);
            const { data } = remoteMessage;
            await updateWidget();
            if(data.type == "5mins"){
                pushNotification();
            } 
        });

        await updateWidget();
    }

    render() {
        return (
            <RootSiblingParent>
                <Provider store={store}>
                    <NavigationContainer ref={navigationRef}>
                        <Stack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }}>
                            <Stack.Screen name="Splash" component={SplashScreen} />
                            <Stack.Screen name="Onboard" component={OnboardStack} />
                            <Stack.Screen name="Main" component={MainStack} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </RootSiblingParent>
        );
    }
}

export default App;
