const functions = require("firebase-functions");
const { firestore } = require("firebase-admin");
const moment = require("moment");

exports.onEveryDay = functions.pubsub.schedule("1 0 * * *").onRun( async (context) => { 
    const userSnaps = await firestore().collection("users").where("membership", "==", "trial").get();
    await Promise.all(userSnaps.docs.map(async doc => {
        const data = doc.data();
        var { trial_days, membership_status } = data;
        if(trial_days > 0) trial_days -= 1;
        if(trial_days == 0) membership_status = "expired";
        await firestore().doc(doc.ref.path).update({
            trial_days,
            membership_status
        });
    }));

    
    console.log("Every Day Event : ", moment());
    return null;

})
