import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import FastImage from "react-native-fast-image";
import { isIphoneX } from 'react-native-iphone-x-helper';
import { getUniqueId } from 'react-native-device-info';
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from "react-redux";
import messaging from '@react-native-firebase/messaging';
import { load_user_data, load_themes } from "../redux/actions/UserActions";
import Iphone6 from "../assets/images/Iphone6.jpg";
import IphoneX from "../assets/images/iPhoneX.jpg";
import Android from "../assets/images/splash-android.jpg";
import { months } from "../data/basic";
import dayjs from "dayjs";
import WelcomeModal from "../components/WelcomeModal";

var splash = IphoneX;
if (Platform.OS == "android") splash = Android;
else splash = isIphoneX() ? IphoneX : Iphone6;

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWelcomeModal: false,
            uid: null
        };
    }

    createUser = async (uid) => {
        const pushToken = await messaging().getToken();
        const user = {
            deviceId: uid,
            trial_days: 14,
            trial_quotes: 14,
            purchase_token: "",
            membership: "trial",
            transactionId: "",
            expired_at: "",
            pay_method: "",
            uid: uid,
            reminder: null,
            theme: {
                background: "https://firebasestorage.googleapis.com/v0/b/ctr-daily.appspot.com/o/themes%2FAngel%20Moroni.jpg?alt=media&token=1e6d65c0-27bd-4972-a731-f39016cfa733",
                color: "white",
                name: "Angel Moroni"
            },
            font: {
                id: "DMSans",
                title: "DMSans",
                style: {
                    fontFamily: "DMSans-Medium"
                }
            },
            fontColor: "#fff",
            favorites: [],
            showWelcome: true,
            viewed_quotes: [],
            membership_status: "active",
            pushToken: [pushToken]
        }
        return new Promise((resolve, reject) => {
            firestore().collection("users").doc(uid).set(user)
                .then(() => { resolve(user); })
                .catch(e => { reject(e); })
        })
    }

    checkUserSetting = async (uid) => {
        var storageData = await AsyncStorage.getItem("user_data");
        if (storageData == null) {
            try {
                const user = await this.createUser(uid);
                const user_data = {
                    uid: uid
                }
                await AsyncStorage.setItem("user_data", JSON.stringify(user_data));
                return user;
            } catch (e) {
                console.log("Create user error : ", e);
                return false;
            }
        } else {
            storageData = JSON.parse(storageData);
            const userSnap = await firestore().collection('users').doc(uid).get();
            var user = userSnap.data();
            if (!user) {
                user = await this.createUser(uid);
                const user_data = {
                    uid: user.uid
                }
                await AsyncStorage.setItem("user_data", JSON.stringify(user_data));
            } else {
                const pushToken = await messaging().getToken();
                await firestore().collection('users').doc(uid).update({ pushToken: firestore.FieldValue.arrayUnion(pushToken) });
            }

            return user;
        }
    }

    LoadImages = async () => {
        var images = [], themes = [];
        // Load Themes
        const themeSnaps = await firestore().collection("themes").orderBy("order").get();
        themeSnaps.docs.map(doc => {
            var theme = doc.data();
            themes.push(theme);
            images.push({ uri: theme.background });
        })
        const { loadTheme } = this.props;
        loadTheme(themes);
        FastImage.preload(images);
    }

    getQuoteOfToday = async () => {
        const today = dayjs();
        const date = today.date();
        const month = months[today.month()];
        

        const quoteSnap = await firestore().collection('quotes').doc(`${month}-${date}`).get();
        const quote = quoteSnap.data();
        const { loadUserData } = this.props;
        loadUserData({ quote: quote, date, month: today.month(), year: today.year() });

    }

    async componentDidMount() {
        const authUser = await auth().signInAnonymously();
        const uid = getUniqueId();
        var user = await this.checkUserSetting(uid);
        if (!user) {
            alert("Something went wrong, Please try again later!");
            return;
        }
        // Update the redux
        const { loadUserData } = this.props;
        loadUserData(user);
        // Load Images
        await this.LoadImages();
        // Get Quote of Today
        await this.getQuoteOfToday();
        this.setState({ user });

        if (user.showWelcome) {
            this.setState({ showWelcomeModal: true });
        }
        else if (user.membership_status == "expired") {
            this.props.navigation.navigate("Onboard", { screen: "subscription", params: { showBackButton: false } });
        }
        else if (user.reminder == null) {
            this.props.navigation.navigate("Onboard");
        } else {
            this.props.navigation.navigate("Main", { screen: "Home" });
        }

    }

    onCloseModal = (checked) => {

        firestore().collection('users').doc(this.state.user.uid).update({ showWelcome: !checked });
        this.setState({ showWelcomeModal: false });
        if (this.state.user.membership_status == "expired") {
            this.props.navigation.navigate("Onboard", { screen: "subscription", params: { showBackButton: false } });
        }
        else if (this.state.user.reminder == null) {
            this.props.navigation.navigate("Onboard");
        } else {
            this.props.navigation.navigate("Main");
        }
    }
   
    render() {
        return (
            <View style={styles.container}>
                <FastImage source={splash} style={styles.splash} />
                <WelcomeModal isVisible={this.state.showWelcomeModal} onClose={this.onCloseModal} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    splash: {
        flex: 1,
        width: "100%",
        height: "100%"
    }
})

const mapDispatchToProps = dispatch => ({
    loadUserData: data => dispatch(load_user_data(data)),
    loadTheme: data => dispatch(load_themes(data))
})
export default connect(null, mapDispatchToProps)(SplashScreen);
