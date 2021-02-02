import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Platform, Linking } from 'react-native';
import { connect } from "react-redux";
import { ifIphoneX } from "react-native-iphone-x-helper";
import RNIap,  { purchaseErrorListener, purchaseUpdatedListener } from 'react-native-iap';
import firestore from "@react-native-firebase/firestore";
import Icon from "react-native-vector-icons/Ionicons"
import Font5 from "react-native-vector-icons/FontAwesome5";
import { showToast } from "../../utils";
import { load_user_data } from '../../redux/actions/UserActions';
import Loading from "../Loading";
import { features } from "../../data/basic";

const itemSkus = Platform.select({
    ios: ['sub_ctr_premium'],
    android: ["com.ctrdaily.premium"]
});

class Subscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false 
        };
        purchaseUpdateSubscription = null;
        purchaseErrorSubscription = null;
    }
   

    componentDidMount(){
        RNIap.initConnection().then(() => {
            RNIap.flushFailedPurchasesCachedAsPendingAndroid().catch((e) => {
                console.log("error", e);
                this.setState({loading : false})
            }).then(() => {
                this.purchaseUpdateSubscription = purchaseUpdatedListener(async (purchase) => {
                    const receipt = purchase.transactionReceipt;
                    if (receipt) {
                        try{
                            await firestore().collection("users").doc(this.props.user.uid).update({
                                membership : "premium",
                                pay_method : Platform.OS == "ios"?"Apple Pay":"Google Pay",
                                purchase_token : Platform.OS == "ios" ? purchase.transactionId : purchase.purchaseToken,
                                transactionId : purchase.transactionId,
                                membership_status : "active"
                            })
                            await RNIap.finishTransaction(purchase);
                            const { loadUserData } = this.props;
                            loadUserData({ membership: "premium", membership_status : "active" });
                            this.setState({ loading: false })
                            showToast("You've subscribed the CTR daily premium success!");
                            // this.props.navigation.navigate("Main");
                        } catch(e) {
                            console.log(e);
                            alert("Something went wrong! Please try again later!");
                            this.setState({ loading: false });
                            return;
                        }
                    } else {
                        console.warn("Other error")
                        this.setState({ loading : false })
                    }
                })
                this.purchaseErrorSubscription = purchaseErrorListener( async (error) => {
                    console.warn('purchaseErrorListener', error);
                    this.setState({ loading: false });
                });
            })
        }).catch(async e => {
            console.warn("Payment Error", e);
            alert('Billing is unavailable. Please check your playstore account.');
            this.setState({ loading: false });
        });
    }

    purchase = async () => {
        this.setState({ loading : true });
        try{
            const products = await RNIap.getSubscriptions(itemSkus);
            if(products.length ){
                const avaliable  = await RNIap.getAvailablePurchases();
                if(avaliable.length > 0 ){
                    await firestore().collection("users").doc(this.props.user.uid).update({
                        membership : "premium",
                        membership_status : "active"
                    })
                    const { loadUserData } = this.props;
                    loadUserData({ membership: "premium", membership_status : "active" });
                    this.setState({ loading: false })
                    showToast("Your subscription has been restored!");
                    this.props.navigation.navigate("Main");
                } else {
                    await RNIap.requestSubscription(itemSkus[0]);
                }
            }
        }catch(e){
            console.warn("Payment Error:", e);
            // alert("Sorry, Something went wrong. Please try again later!");
        }
        this.setState({ loading : false });
    }

    onPressTerms = async () => {
        await Linking.openURL("https://ctrdailyapp.com/terms-of-use");
    } 
    onPressBack = () => {
        this.props.navigation.navigate("Main");
    }

    onPressPrivacy = async () => {
        await Linking.openURL("https://ctrdailyapp.com/privacypolicy/");
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.route.params.showBackButton && <TouchableOpacity onPress={this.onPressBack}>
                    <Icon name="close" size={32} color="white" />
                </TouchableOpacity> }
                {!this.props.route.params.showBackButton && <View style={{ height : 20}}></View>}
                <Text style={styles.title}>Upgrade to CTR Daily Premium</Text>
                <View style={{paddingVertical : 10, paddingHorizontal : 5}}>
                    {features.map(item => (
                        <View style={styles.featureItem}>
                            <Font5 name="check" color="white" size={24} style={{ width : "10%"}}/>
                            <Text style={styles.featureItemText}>{item}</Text>
                        </View>
                    ))}
                </View>
                <View style={{alignItems : "center"}}>
                    <Text style={styles.price}>$2.99/year.</Text>
                    <TouchableOpacity style={styles.subscribe} onPress={this.purchase}>
                        <Text style={styles.subscribeText}>Subscribe Now</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection : "row", justifyContent: 'space-between', width : "100%", marginTop : 20}}>
                        <TouchableOpacity onPress={this.onPressTerms}>
                            <Text style={styles.btnText}> Terms of Use</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressPrivacy} >
                            <Text style={styles.btnText} >Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.loading && <Loading />}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        ...ifIphoneX({
            paddingTop : 50
        }, {
            paddingTop : 20
        }),
        backgroundColor : "#fff",
        paddingHorizontal : 20,
        backgroundColor : "#393e46"
    },
    subscribe : {
        paddingVertical : 10,
        borderRadius : 30,
        backgroundColor : "#f3f3f3",
        width : "100%",
        alignItems : "center",
    },
    subscribeText : {
        fontFamily : "DMSans-Medium",
        fontSize : 18,
        color : "#333"
    },
    title : {
        fontFamily : "DMSans-Bold",
        color : "#fff",
        fontSize : 28,
        paddingVertical : 5
    },
    desc : {
        fontFamily : "DMSans-Medium",
        fontSize : 16,
    },
    featureItem : {
        flexDirection : "row", 
        justifyContent : "space-between", 
        paddingVertical : 5,
        alignItems: 'center', 
    },
    featureItemText : {
        ...ifIphoneX({
            fontSize : 18
        },{
            fontSize : 16
        }),
        width : "90%", 
        color : "#fff", 
        fontFamily : "DMSans-Medium"
    },
    price : {
        fontFamily : "DMSans-Bold",
        color : "#fff",
        ...ifIphoneX({
            fontSize : 20,
            marginBottom : 25,
            marginTop : 10
        },{
            fontSize : 18,
            marginBottom : 15,

        })
    },
    btnText : {
        fontFamily : "DMSans-Medium",
        fontSize : 16,
        color : "#fff"
    }

})

const mapStateToProps = state => ({
    user : state.UserReducer
})

const mapDispatchToProps = dispatch => ({
    loadUserData : data => dispatch(load_user_data(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
