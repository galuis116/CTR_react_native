import React, { Component, useReducer } from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView, TouchableOpacity, Share } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { ListItem } from "react-native-elements";
import FIcon from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import FlashMessage, {
    showMessage,
    hideMessage,
  } from 'react-native-flash-message';
class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onPressShareWithFriends = async () => {
        // Share
        const url = "https://ctrdailyapp.com"
        var message = "CTR Daily \nCTR Daily is an app that brings members of the LDS church 365 different meanings and scriptures to those powerful letters CTR.";
        if(Platform.OS == "android") message = `${message}\n\n${url}`;
        await Share.share({
            message : message,
            subject : "CTR Daily",
            url : url
        });
    }

    onPressSubscription = () => {
        this.props.navigation.navigate("Onboard", { screen : "subscription", params : { showBackButton : true }})
    }
    async componentDidMount() {
        showMessage({
          message:
            'This app is free to use for 2 weeks or up to 14 CTR viewings.',
          type: 'default',
          backgroundColor: '#5B86E5',
          titleStyle: {fontStyle: 'italic', textAlign:'center'},
          autoHide: false,
          floating: true,
          position: 'bottom',
        });
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}> 
                        <Icon name="close" color="#333" size={28}/>
                    </TouchableOpacity>
                    <View style={{ paddingVertical : 10}}>
                        <Text style={{fontSize : 24, fontFamily : "DMSans-Bold", color : "#333"}}>Welcome to CTR Daily</Text>
                    </View>
                    <TouchableOpacity onPress={this.props.user.membership == "trial" ? this.onPressSubscription : () => {}}>
                        <LinearGradient colors={['#36D1DC', '#5B86E5']} style={styles.subscriptionContainer}>
                            <View style={{ flexDirection : "row", alignItems : 'center'}}> 
                                <FIcon name="shopping-bag"  color="white" size={28}/>
                                <Text style={{marginLeft : 10, fontFamily : "DMSans-Bold", color : "#fff", fontSize : this.props.user.membership == "premium" ? 16 : 18}}>
                                {this.props.user.membership == "trial" && "Try CTR Daily Premium" }
                                {this.props.user.membership == "premium" && "Welcome to CTR Daily Premium!"}
                                </Text>
                            </View>
                        </LinearGradient> 
                    </TouchableOpacity> 
                    <View>
                        <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={this.onPressShareWithFriends}>   
                            <View style={styles.itemIcon}>
                                <FIcon name="share-2" color="#333" size={24} />
                            </View>
                            <ListItem.Content>
                                <ListItem.Title style={styles.itemTitle}>Share with Friends</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24} color="#333"/>
                        </ListItem>
                        <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={() => navigation.navigate("Favorite")}>   
                            <View style={styles.itemIcon}>
                                <FIcon name="heart" color="#333" size={24} />
                            </View>
                            <ListItem.Content>
                                <ListItem.Title style={styles.itemTitle}>Favorites</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24} color="#333"/>
                        </ListItem>
                        <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={() => navigation.navigate("Themes")}>   
                            <View style={styles.itemIcon}>
                                <FIcon name="grid" color="#333" size={24} />
                            </View>
                            <ListItem.Content>
                                <ListItem.Title style={styles.itemTitle}>Themes</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24}  color="#333"/>
                        </ListItem>
                        <ListItem
                            Component={TouchableOpacity}
                            containerStyle={{backgroundColor : "transparent"}}
                            onPress={() => navigation.navigate("Setting")}>   
                            <View style={styles.itemIcon}>
                                <FIcon name="sliders" color="#333" size={24} />
                            </View>
                            <ListItem.Content>
                                <ListItem.Title style={styles.itemTitle}>Settings</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron size={24} color="#333"/>
                        </ListItem>
                    </View>
                </SafeAreaView>
                {this.props.user.membership == "trial" && <FlashMessage position="bottom" /> }
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

const mapStateToProps = state => ({
    user : state.UserReducer
})

export default  connect(mapStateToProps, null)(ProfileScreen);
