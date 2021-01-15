import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from 'react-native-gesture-handler';
import FIcon from "react-native-vector-icons/Feather";
import { connect } from "react-redux";
import { load_user_data } from '../../redux/actions/UserActions';
import firestore from "@react-native-firebase/firestore";
import { ifIphoneX } from 'react-native-iphone-x-helper';
import dayjs from "dayjs";
import { months } from "../../data/basic";
import Loading from "../Loading";

class FavoriteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites : [],
            loading : false
        };
    }

    getFavorites = async () => {
        await Promise.all(this.props.user.favorites.map(async qid => {
            const snap = await firestore().collection("quotes").doc(qid).get();
            const { favorites } = this.state;
            const data = snap.data();
            data.qid = qid;
            favorites.push(data);
            this.setState({favorites});
        }))
    }

    async componentDidMount(){
        this.setState({ loading : true });
        await this.getFavorites();
        this.setState({ loading : false });
    }

    share = async quote => {
        var message = `${quote.qid} \n${quote.title}\n${quote.quote}\n\n${quote.link}\n\n`;
        if(Platform.OS == "android") message = `${message}https://ctrdailyapp.com \n`;
        const result = await Share.share({
            message : message,
            subject : quote.title,
            url : "https://ctrdailyapp.com"
        })
    }

    removeFavorite = async quote => {
        const {favorites} = this.props.user;
        const filteredFavorites = favorites.filter(item => item != quote.qid);
        const {loadUserData} = this.props;
        loadUserData({ favorites : filteredFavorites });
        const filteredState = this.state.favorites.filter(item => item.qid != quote.qid );
        this.setState({ favorites : filteredState });
        await firestore().collection('users').doc(this.props.user.uid).update({ favorites : firestore.FieldValue.arrayRemove(quote.qid) });
    }
    onPressQuote = (item) => {

        const id = item.qid;
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
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}> 
                    <Icon name="close" color="#333" size={28}/>
                </TouchableOpacity>
                <View style={{ paddingVertical : 10}}>
                    <Text style={{fontSize : 24, fontFamily : "DMSans-Bold", color : "#333"}}>Favorites</Text>
                </View>
                <ScrollView style={{ flex : 1}}>
                    {this.state.favorites.map(item => (
                    <TouchableOpacity style={styles.quoteContainer} onPress={() => this.onPressQuote(item)}>
                        <Text style={styles.quoteTitle}>{item.title}</Text>
                        <Text style={styles.quote}>{item.quote}</Text>
                        <View style={styles.quoteFooter}>
                            <Text style={styles.quoteLink}>{item.name}</Text>
                            <View style={styles.quoteButtons}>
                                <TouchableOpacity style={styles.quoteAction} onPress={() => this.share(item)}>
                                    <FIcon name="share-2" color="#333" size={20}/>
                                </TouchableOpacity>
                                <View style={{width : 2, height : 20, backgroundColor : "#888"}}></View>
                                <TouchableOpacity style={styles.quoteAction} onPress={() => this.removeFavorite(item)}>
                                    <FIcon name="trash-2" color="#333" size={20}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    ))}
                </ScrollView>
                { this.state.loading && <Loading /> }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        paddingHorizontal : 20,
        ...ifIphoneX({
            paddingTop : 50
        }, {
            paddingTop : 10
        })

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
        fontSize : 16,
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
});

const mapStateToProps = state => ({
    user : state.UserReducer
});
const mapDispatchToProps = dispatch => ({
    loadUserData : data => dispatch(load_user_data(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteScreen);
