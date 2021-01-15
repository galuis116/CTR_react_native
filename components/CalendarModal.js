import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Modal from "react-native-modal";
import dayjs from "dayjs";

class CalendarModal extends Component {
    constructor(props) {
        super(props);
        const today = dayjs();
        this.state = {
            today : today
        };
        this._ref = React.createRef();
    }

    onDateChange = (date) => {
        this.props.onChangeDate(date);
        this.props.close();
    }

    today = () => {
        const today = dayjs();
        const year = today.year();
        const month = today.month();
        const day = today.date();

        this._ref.handleOnPressDay(year, month, day);
    }

    render() {
        return (
            <Modal isVisible={this.props.visible} backdropOpacity={0.85}>
                <View style={styles.content}>
                    {/* <Text style={{fontFamily : "DMSans-Medium", fontSize : 24, marginBottom : 20, color : "white"}}>Calendar</Text> */}
                    <CalendarPicker
                        ref = { c => this._ref = c }
                        onDateChange={this.onDateChange}
                        textStyle={{fontFamily : "DMSans-Medium", color : "white"}}
                        dayLabelsWrapper={{ alignItems : "center", textAlign : "center", marginLeft : 20, paddingLeft : 30}}
                        initialDate = {this.props.initialDate }
                    />
                    <View style={styles.bottomButtons}>
                        <TouchableOpacity style={styles.today} onPress={this.today}>
                            <Text style={styles.todayBtnText}>Today</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.close} onPress={this.props.close}>
                            <Text style={styles.closeBtnText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        // backgroundColor: 'white',
        paddingHorizontal: 22,
        paddingVertical : 10,
        justifyContent: 'center',
        alignItems : "center",
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        // height : 400
    },
    bottomButtons : {
        width : "100%",
        flexDirection : "row",
        justifyContent : "space-around",
        paddingVertical : 10
    },
    today : {
        backgroundColor : "#323EDD",
        paddingVertical : 8,
        width : 120,
        alignItems : "center",
        borderRadius : 10
    },
    todayBtnText : {
        color : "white",
        fontFamily : "DMSans-Bold",
        fontSize : 16
    },
    close : {
        borderRadius : 10,
        borderWidth : 2,
        borderColor : "#323EDD",
        paddingVertical : 8,
        width : 120,
        alignItems : "center"
    },
    closeBtnText : {
        color : "#fff",
        fontFamily : "DMSans-Bold",
        fontSize : 16
    }
})

export default CalendarModal;
