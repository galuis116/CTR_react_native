const functions = require("firebase-functions");
const { firestore } = require("firebase-admin");
const moment = require("moment");

exports.onChangeGoogleSubscription = functions.pubsub.topic("playstore-subscription-update").onPublish( async message => {

    const messageBody = message.data ? Buffer.from(message.data, 'base64') : null;
    if(messageBody == null ) return false;
    const { subscriptionNotification } = JSON.parse(messageBody);
    const { purchaseToken, notificationType, subscriptionId } = subscriptionNotification;
    console.log(notificationType);
    try{
        if( notificationType == 1 || notificationType == 2 || notificationType == 4 || notificationType == 7){
            const snaps = await firestore().collection("users").where("purchase_token", "==", purchaseToken).get();
            await Promise.all(snaps.docs.map( async doc => {
                await firestore().doc(doc.ref.path).update({ membership : "premium", membership_status : "active" });
            }));
        }
        else if( notificationType == 3 || notificationType == 10 || notificationType == 12 || notificationType == 13) {
            const snaps = await firestore().collection("users").where("purchase_token", "==", purchaseToken).get();
            await Promise.all(snaps.docs.map( async doc => {
                await firestore().doc(doc.ref.path).update({ membership : "", membership_status : "expired" });
            }));
        }
    } catch (e){
        console.log("Google Membership Error", JSON.stringify(e));
    }
    
    return true;
})