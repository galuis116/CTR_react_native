import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity, ImageBackground, BackHandler } from 'react-native';
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import AnalogClock from "../../components/AnalogClock";
import { ifIphoneX } from "react-native-iphone-x-helper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment-timezone';
import { load_user_data } from "../../redux/actions/UserActions";
import firestore from "@react-native-firebase/firestore";
import Loading from "../Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

class SetReminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDatePickerModal : false,
            reminderTime : "10:00",
            loading  : false 
        };
    }
    _onPressContinue = async () => {
        this.setState({ loading : true });
        // Store reminder time.
        await firestore().collection("users").doc(this.props.user.uid).update({"reminder" : this.state.reminderTime });
        // Set user State
        const { setReminder } = this.props;
        setReminder({ reminder : this.state.reminderTime });

        const data = {
            uid : this.props.user.uid,
            reminder : this.state.reminderTime
        }
        await AsyncStorage.setItem("user_data", JSON.stringify(data));

        this.setState({ loading : false });
        this.props.navigation.navigate("Main", { screen : "Home"});
    }

    _onPressChangeTime = () =>{
        this.setState({ showDatePickerModal : true });
    }
    hideDatePicker = () => {
        this.setState({ showDatePickerModal : false });
    }

    handleTimeConfirm = async (time) => {
        
        const localizedTime = moment(time).format("HH:mm");
        this.setState({ reminderTime : localizedTime, showDatePickerModal : false });
    }

    render() {
        return (
            <ImageBackground source={require("../../assets/images/reminder-background.jpg")} style={styles.container}>
                <SafeAreaView>
                    <View style={styles.header}>
                        <Text style={styles.title}>Daily Reminder</Text>
                    </View>
                    <AnalogClock />
                    <View style={{ paddingHorizontal : 40}}>
                        <Text style={styles.description}>What time would you like to receive the day's CTR meaning?</Text>
                    </View>
                    <View style={{ marginVertical : 20 , paddingHorizontal : 30}}>
                        <Text style={styles.time}> {this.state.reminderTime }</Text>
                    </View>
                    <TouchableOpacity style={styles.changeDateTimeBtn} onPress={this._onPressChangeTime}>
                        <Text style={styles.btnText}>Change the reminder time</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <View style={styles.continueContainer}>
                    <TouchableOpacity style={styles.btn} onPress={this._onPressContinue}>
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                </View>

                <DateTimePickerModal
                    isVisible={this.state.showDatePickerModal}
                    mode="time"
                    onConfirm={this.handleTimeConfirm}
                    onCancel={this.hideDatePicker}
                    locale="en_GB" // Use "en_GB" here
                />
                { this.state.loading && <Loading />}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#333"
    },
    header : {
        marginTop : 10
    },
    backBtn : {
        position: "absolute",
        left : 20, 
    },
    title : {
        fontFamily : "DMSans-Medium",
        color : "#fff",
        fontSize : 24,
        textAlign : "center",
    },
    description : {
        fontFamily : "DMSans-Medium",
        color : "white",
        fontSize : 20,
        textAlign : "center",
        lineHeight : 30,
    },
    time : {
        fontFamily : "DMSans-Bold",
        fontSize : 48,
        color : "white",
        textAlign : "center"
    },
    btn : {
        backgroundColor : "#323EDD",
        paddingVertical : 10,
        width : 300,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 6,
    },
    continueContainer : {
        position : "absolute",
        ...ifIphoneX({
            bottom : 60
        }, {
            bottom : 40
        }),
        width : "100%",
        alignItems : "center"
    },
    btnText : {
        fontFamily : "DMSans-medium",
        color : "white",
        fontSize : 18
    },
    changeDateTimeBtn : {
        justifyContent: 'center', 
        alignItems : "center"
    }
})

const mapDispatchToProps = dispatch => ({
    setReminder : data => dispatch(load_user_data(data))
})

const mapStateToProps = state =>({
    user : state.UserReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(SetReminder);
