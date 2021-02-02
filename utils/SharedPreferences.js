
import SharedGroupPreferences from "react-native-shared-group-preferences";
import RNWidgetCenter from "react-native-widget-center";
import dayjs from "dayjs";
import firestore from "@react-native-firebase/firestore";
import { Platform, NativeModules } from "react-native";
import { months } from "../data/basic";
import auth from "@react-native-firebase/auth"

const appGroupIdentifier = 'group.com.dkp.ctr.ctr-widget';

export async function saveUserDataToSharedStorage(data) {
    try {
        if(Platform.OS == "ios"){
            await SharedGroupPreferences.setItem("widgetData", data, appGroupIdentifier)
            RNWidgetCenter.reloadTimelines("ctrwidget");
        } else if( Platform.OS == "android") {
            const SharedStorage = NativeModules.SharedStorage;
            SharedStorage.get((prevData) => {
                if(prevData != "empty"){
                    const prevDataObject = JSON.parse(prevData);
                    if(prevDataObject.title != data.title ){ 
                        SharedStorage.set(JSON.stringify(data)); 
                    }
                } else {
                    SharedStorage.set(JSON.stringify(data));
                }
            });
        }
    } catch (errorCode) {
        console.log(errorCode)
    }
}
export async function loadUsernameFromSharedStorage() {
    try {
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
    await auth().signInAnonymously();
    const quoteSnap = await firestore().collection('quotes').doc(`${month}-${date}`).get();
    const quote = quoteSnap.data();
    return quote;
    
}