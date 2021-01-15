
import SharedGroupPreferences from "react-native-shared-group-preferences";
import RNWidgetCenter from "react-native-widget-center";
import dayjs from "dayjs";
import firestore from "@react-native-firebase/firestore";
import { Platform, NativeModules } from "react-native";
import { months } from "../data/basic";

const appGroupIdentifier = 'group.com.dkp.ctr.ctr-widget';

export async function saveUserDataToSharedStorage(data) {
    try {
        if(Platform.OS == "ios"){
            await SharedGroupPreferences.setItem("widgetData", data, appGroupIdentifier)
            RNWidgetCenter.reloadAllTimelines();
        } else if( Platform.OS == "android") {
            const SharedStorage = NativeModules.SharedStorage;
            SharedStorage.set(JSON.stringify(data));
            console.warn("Widget Data", data);
        }
    } catch (errorCode) {
        console.log(errorCode)
    }
}
export async function loadUsernameFromSharedStorage() {
    try {
        const appGroupIdentifier = 'group.com.dkp.ctr.ctr-widget';
        const loadedData = await SharedGroupPreferences.getItem("widgetData", appGroupIdentifier)
        return loadedData;
    } catch (errorCode) {
        console.log(errorCode)
        return null
    }
}

export async function getQuoteOfToday() {
    const today = dayjs();
    const date = today.date();
    const month = months[today.month()];

    const quoteSnap = await firestore().collection('quotes').doc(`${month}-${date}`).get();
    const quote = quoteSnap.data();
    return quote;
}