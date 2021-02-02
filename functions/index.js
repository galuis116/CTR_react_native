const functions = require('firebase-functions');
const admin = require("firebase-admin");

admin.initializeApp();

const { onChangeGoogleSubscription } = require('./scripts/onChangeGoogleSubscription');
const { onChangeAppleSubscription } = require("./scripts/onChangeAppleSubscription");
const { onEveryDay } = require("./scripts/onEveryDay");
const { sendReminder } = require("./scripts/sendReminder");
const { onEvery5Mins} = require("./scripts/onEvery5Mins");

exports.onChangeGoogleSubscription = onChangeGoogleSubscription;
exports.onChangeAppleSubscription = onChangeAppleSubscription;
exports.onEveryDay = onEveryDay;
exports.sendReminder = sendReminder;
exports.onEvery5Mins = onEvery5Mins;
