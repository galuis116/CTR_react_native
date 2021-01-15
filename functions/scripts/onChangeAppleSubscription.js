const functions = require("firebase-functions");
const { firestore } = require("firebase-admin");

exports.onChangeAppleSubscription = functions.https.onRequest( async (request, response) => {

    let requestData, result;
    try{ requestData = JSON.parse(request.body); }
    catch(e){ requestData = request.body }
    const { notification_type, auto_renew_product_id, unified_receipt } = requestData;
    const { original_transaction_id, transaction_id } = unified_receipt.latest_receipt_info;

    console.log(notification_type);

    try{
        if(notification_type == "CANCEL" || notification_type == "DID_FAIL_TO_RENEW") {
            const snaps = await firestore().collection("users").where("purchase_token", "==", original_transaction_id).get();
            await Promise.all(snaps.docs.map( async doc => {
                await firestore().doc(doc.ref.path).update({ membership : "", membership_status : "expired" });
            }));
        } 
    } catch (e){
        console.log("Apple Subscription Renew Error:", JSON.stringify(e));
    }
    
    response.status(200).send("Success!");
});

