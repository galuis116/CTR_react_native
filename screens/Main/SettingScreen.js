import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView, TouchableOpacity, Linking, Share } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { ListItem } from "react-native-elements";

class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onPressTerms = async () => {
        await Linking.openURL("https://ctrdailyapp.com/terms-of-use");
    }
    onPressFeedback = async () => {
        await Linking.openURL("https://ctrdailyapp.com/contact-us");
    }
    rateUs = async () => {
        const link = Platform.OS == "ios" ? "itms-apps://itunes.apple.com/us/app/id1235742891?mt=8" : "http://play.google.com/store/apps/details?id=com.google.android.apps.maps";
        await Linking.openURL(link);
    }
    onPressShareWithFriends = async () => {
        // Share
        const url = "https://ctrdailyapp.com";
        var message = "CTR Daily is an app that brings members of the LDS church 365 different meanings and scriptures to those powerful letters CTR.";
        if(Platform.OS == "ios") message = `CTR Daily \n${message}`;
        if(Platform.OS == "android") message = `${message}\n\n${url}`;
        await Share.share({
            message : message,
            subject : "CTR Daily",
            url : url
        });
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}> 
                        <Icon name="close" color="#333" size={28}/>
                    </TouchableOpacity>
                    <View style={{ paddingVertical : 10}}>
                        <Text style={{fontSize : 24, fontFamily : "DMSans-Bold", color : "#333"}}>Settings</Text>
                    </View>
                    <View style={{marginHorizontal : -10}}>
                        <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={() => this.props.navigation.navigate("Reminder")}>   
                            <ListItem.Content >
                                <ListItem.Title style={styles.itemTitle}>Daily Reminder</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24} color="#333"/>
                        </ListItem>
                        <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={this.rateUs}>   
                            <ListItem.Content>
                                <ListItem.Title style={styles.itemTitle}>Rate Us</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24} color="#333"/>
                        </ListItem>
                        <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={this.onPressFeedback}>   
                            <ListItem.Content>
                                <ListItem.Title style={styles.itemTitle}>Send Feedback</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24} color="#333"/>
                        </ListItem>
                        {/* <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={this.onPressShareWithFriends}>   
                            <ListItem.Content>
                                <ListItem.Title style={styles.itemTitle}>Share with Friends</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24} color="#333"/>
                        </ListItem> */}
                        <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={this.onPressTerms}>   
                            <ListItem.Content>
                                <ListItem.Title style={styles.itemTitle}>Terms of Use</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24} color="#333"/>
                        </ListItem>
                        <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={() => this.props.navigation.navigate("Copyright")}>   
                            <ListItem.Content>
                                <ListItem.Title style={styles.itemTitle}>Copyright</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24} color="#333"/>
                        </ListItem>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        paddingHorizontal : 20,
        paddingTop : 10

    },
    itemTitle : { 
        fontFamily : "DMSans-Bold", 
        color : "#333", 
        fontSize : 20 
    },
    itemIcon : {
        backgroundColor : "rgba(255,255,255, 0.1)", 
        padding : 5, 
        borderRadius : 10
    },
    subscriptionContainer : {
        paddingVertical : 20,
        paddingHorizontal : 10,
        borderRadius : 10
    }

})

export default SettingScreen;
