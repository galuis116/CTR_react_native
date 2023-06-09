const { https } = require("firebase-functions");
const { firestore, messaging } = require("firebase-admin");
const { isEmpty } = require("lodash");

exports.sendReminder = https.onRequest ( async(request, response) => {

    if(isEmpty(request.body)){
        response.status(400).send("Incorrect Data");
        return;
    }

    let requestData;
    try{ requestData = JSON.parse(request.body); }
    catch(e) { requestData = request.body; }

    const { uid } = requestData;
    const userSnap = await firestore().collection('users').doc(uid).get();
    const user = userSnap.data();
    const { pushToken } = user;
    const message = {
        data : {
            type : "reminder"
        },
        notification : {
            title : "CTR Daily",
            body : "Today's CTR meaning is Ready."
        }
    }

    var result = "sucess";
    if(pushToken.length > 0){
        result = await messaging().sendToDevice(
            typeof pushToken == "string"?[pushToken]:[...pushToken],
            message,
            {
                contentAvailable : true,
                priority : "high"
            }
        )
    }
   
    response.status(200).send(JSON.stringify({ success : result }));
}) 