const functions = require("firebase-functions");
const { firestore, messaging } = require("firebase-admin");
const moment = require("moment");

exports.onEvery5Mins = functions.pubsub.schedule("every 5 minutes").onRun( async (context) => { 

    const userSnaps = await firestore().collection("users").get();
    userSnaps.docs.map( async doc => {
        const message = {
            data : {
                type : "5mins"
            }
        }
        const { pushToken } = doc.data();
        if(pushToken.length > 0){
            messaging().sendToDevice(
                typeof pushToken == "string"?[pushToken]:[...pushToken],
                message,
                {
                    contentAvailable : true,
                    priority : "high"
                }
            )
        }
        
    })
    
    console.log("Every 5 mins run!");
    return null;
})