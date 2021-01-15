import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput,ScrollView, ActivityIndicator, Share } from 'react-native';
import firestore from "@react-native-firebase/firestore";
import FIcon from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import { ifIphoneX } from "react-native-iphone-x-helper";
import { connect } from "react-redux";
import dayjs from "dayjs";
import { load_user_data } from '../../redux/actions/UserActions';
import Loading from "../Loading";
import { months } from "../../data/basic";


class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes : [],
            results : [],
            loading : false 
        };
    }

    getQuotes = async () => {
        const quoteSnaps = await firestore().collection("quotes").get();
        const quotes = [];
        quoteSnaps.docs.map(doc => {
            const path = doc.ref.path.split("/")[1];
            const data = doc.data();
            data.date = path;
            quotes.push(data);
        });
        this.setState({ quotes});
    }
    async componentDidMount(){
        this.setState({ loading : true });
        await this.getQuotes();
        this.setState({ loading : false})
    }
    onSearch = text => {
        this.setState({ loading : true });
        if(search == ""){
            this.setState({ results : quotes });
            return;
        }
        const search = text.toLowerCase();
        const results = this.state.quotes.filter(quote => {
            return quote.title.toLowerCase().includes(search) || quote.quote.toLowerCase().includes(search)
        });
        this.setState({results, loading : false })
    }

    share = async quote => {
        var message = `${quote.date} \n${quote.title}\n${quote.quote}\n\n${quote.link}\n\n`;
        if(Platform.OS == "android") message = `${message}https://ctrdailyapp.com \n`;
        const result = await Share.share({
            message : message,
            subject : quote.title,
            url : "https://ctrdailyapp.com"
        })
    }

    favorite = quote => {
        var { favorites } = this.props.user;
        if( favorites == null ) favorites = [];
        if(!favorites.includes(`${quote.date}`)) {
            favorites.push(`${quote.date}`);
            firestore().collection("users").doc(this.props.user.uid).update({ favorites });
            const { loadUserData } = this.props;
            loadUserData({ favorites });
            this.setState({favorited : true});
        }
        this.props.navigation.navigate("Favorite");
    }

    onPressQuote = (item) => {
        const { viewed_quotes } = this.props.user;
        if( this.props.user.membership == "trial" && viewed_quotes.length > 13 && viewed_quotes.indexOf(item.date) == -1 ){
            Alert.alert(
                "CTR Daily",
                "You have reached your 14 viewing limit. Please subscribe to CTR Daily premium to have full access to all 365 CTR meanings.",
                [   
                    {
                        text: "Ask me later",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Subscribe Now", onPress: () => this.props.navigation.navigate("Onboard", { screen : "subscription", params : { showBackButton : true} }) }
                ],
                { cancelable: false }
            )
            return; 
        }
        const id = item.date;
        const nameOfMonth = id.split("-")[0];
        const month = months.indexOf(nameOfMonth);
        const date = id.split("-")[1];
        const year = dayjs().year();

        const { loadUserData } = this.props;
        loadUserData({ quote : item, month, date, year});

        this.props.navigation.navigate("Home");

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}> 
                    <Icon name="close" color="#333" size={28}/>
                </TouchableOpacity>
                <View style={{ paddingVertical : 10}}>
                    <Text style={{fontSize : 24, fontFamily : "DMSans-Bold", color : "#333"}}>Search CTR Daily</Text>
                </View>
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Search..."
                    onChangeText={this.onSearch}
                    placeholderTextColor="#888"
                />
                <ScrollView style={{ marginTop : 10 }} bounces={false} showsVerticalScrollIndicator={false} >
                    {this.state.results.map(item => (
                    <TouchableOpacity style={styles.quoteContainer} onPress={() => this.onPressQuote(item)}>
                        <Text style={styles.quoteTitle}>{item.title}</Text>
                        {this.props.user.membership == "premium" && this.props.user.membership_status == "active" && <Text style={styles.quote}>{item.quote}</Text> }
                        <View style={styles.quoteFooter}>
                            <Text style={styles.quoteLink}>{item.name}</Text>
                            {this.props.user.membership == "premium" && this.props.user.membership_status == "active" && <View style={styles.quoteButtons}>
                                <TouchableOpacity style={styles.quoteAction} onPress={() => this.share(item)}>
                                    <FIcon name="share-2" color="#333" size={20}/>
                                </TouchableOpacity>
                                <View style={{width : 2, height : 20, backgroundColor : "#333"}}></View>
                                <TouchableOpacity style={styles.quoteAction} onPress={() => this.favorite(item)}>
                                    <Icon name="heart-outline" color="#333" size={24}/>
                                </TouchableOpacity>
                            </View> }
                        </View>
                    </TouchableOpacity>
                    ))}
                </ScrollView>
                {this.state.loading && <Loading /> }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        ...ifIphoneX({
            paddingHorizontal : 20,
            paddingTop : 50
        }, {
            paddingHorizontal : 10,
            paddingTop : 10
        }),

    },
    searchInput : {
        backgroundColor : "#f3f3f3",
        borderWidth : 1,
        borderColor : "#fefefe",
        paddingVertical : 15,
        fontSize : 16,
        borderRadius : 15,
        paddingHorizontal : 15,
        color : "#333",
        fontFamily : "DMSans-Medium",
    },
    quoteContainer : {
        paddingVertical : 10,
        paddingHorizontal : 20,
        backgroundColor : "#f8f8f8",
        marginBottom : 10,
        borderRadius : 10
    },
    quoteTitle : {
        fontFamily : "DMSans-Bold",
        fontSize : 18,
        color : "#333",
        marginBottom : 5
    },
    quote : {
        fontSize : 14,
        fontFamily : "DMSans-Medium",
        color : "#333"
    },
    quoteFooter : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginTop : 10
    },
    quoteButtons : {
        flexDirection : "row",
        justifyContent: 'center',
        alignItems : "center"
    },
    quoteAction :{
        paddingHorizontal : 10
    },
    quoteLink : {
        fontFamily : "DMSans-Bold",
        fontSize : 16,
        color : "#333"
    }
})

const mapStateToProps = state => ({
    user : state.UserReducer
});

const mapDispatchToProps = dispatch => ({
    loadUserData : data => dispatch(load_user_data(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
