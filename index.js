/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import BackgroundFetch from 'react-native-background-fetch';
import { saveUserDataToSharedStorage, getQuoteOfToday } from "./utils/SharedPreferences";

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage);
	const quote = await getQuoteOfToday();
	const widgetData = {
		title : quote.title,
		meaning : quote.quote
	}
	await saveUserDataToSharedStorage(widgetData);
});

/// Android-only:  BackgroundFetch event-handler when app is terminated.
/// NOTE:  This handler must be placed and registered here in index.js -- DO NOT place this in your App components.
///
const headlessTask = async ({ taskId }) => {
	// Get task id from event {}:
	console.log('[BackgroundFetch] 💀 HeadlessTask start: ', taskId);

	// Required:  Signal to native code that your task is complete.
	// If you don't do this, your app could be terminated and/or assigned
	// battery-blame for consuming too much time in background.
	BackgroundFetch.finish(taskId);
};

// Register your BackgroundFetch HeadlessTask
BackgroundFetch.registerHeadlessTask(headlessTask);


AppRegistry.registerComponent(appName, () => App);

