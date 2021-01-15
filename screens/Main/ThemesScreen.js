import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import FastImage from "react-native-fast-image";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { ifIphoneX } from "react-native-iphone-x-helper"
import Fonts from "../../data/fonts";
// import { SliderValuePicker } from 'react-native-slider-color-picker';
import tinycolor from 'tinycolor2';
import { load_user_data } from "../../redux/actions/UserActions";
import firestore from "@react-native-firebase/firestore";
import Loading from "../Loading";
import { TriangleColorPicker } from 'react-native-color-picker'

const { width, height } = Dimensions.get("window");

class ThemesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme : props.user.theme,
            font : props.user.font,
            fontColor : props.user.fontColor,
            loading : false
        };
    }
    selectTheme = (theme) => {
        this.setState({ theme : theme })
    }
    selectFont = font => {
        this.setState({ font : font });
    }
    onPressContinue = async () => {
        this.setState({ loading : true });
        const { theme, font, fontColor } = this.state;
        const { uid } = this.props.user;
        const { load_user_data } = this.props;
        await firestore().collection("users").doc(uid).update({
            theme : theme,
            font : font,
            fontColor : fontColor
        });
        load_user_data({ theme, font, fontColor });
        this.props.navigation.goBack();
        this.setState({ loading : false });
    }
    changeColor = (color) => {
        this.setState({fontColor : tinycolor(color).toHexString()})
    }

    render() {
        return (
            <View style={styles.container} bounces={false}>
                <SafeAreaView>
                    <TouchableOpacity style={{marginLeft : 20}} onPress={()=>this.props.navigation.goBack()}> 
                        <Icon name="close" color="#333" size={28}/>
                    </TouchableOpacity>
                    <Text style={styles.title}> Themes </Text>
                    <ScrollView showsHorizontalScrollIndicator={false} style={{marginTop : 20, paddingHorizontal : 10}} containerStyle={styles.themes} horizontal>
                        {this.props.themes.map(theme => (
                            <TouchableOpacity style={styles.themeContainer} onPress={()=>this.selectTheme(theme)}>
                                <FastImage source={{uri : theme.background}} style={styles.theme} resizeMode="cover"/>
                                <Text style={styles.themeTitle}>{theme.name}</Text>
                                {this.state.theme.name == theme.name && <View style={styles.selectedTheme}>
                                    <Icon name="checkmark-sharp" color="white" size={20}/>
                                </View>}
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <Text style={styles.title}>Font Family</Text>
                    <View style={styles.fontContainer}>
                        <ScrollView 
                            contentContainerStyle={{flexDirection : "row"}} 
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                            {Fonts.map(font => (
                                <TouchableOpacity style={font.id == this.state.font.id ? styles.selectedFont : { marginVertical : 10, alignItems : "center"}} onPress={() => this.selectFont(font)}>
                                    <Text style={{...styles.font, ...font.style}}>{font.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <Text style={styles.title}>Font Color</Text>
                    <View style={styles.fontContainer}>
                        <View style={styles.fontColorContainer}>
                            <TriangleColorPicker
                                oldColor={this.state.fontColor}
                                style={{flex: 1}}
                                onColorChange={this.changeColor}
                                hideControls={true}
                            />
                            <View style={{width : width - 50, height : 10, borderRadius : 10, borderWidth : 1, borderColor : "black", backgroundColor : this.state.fontColor}}></View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.continue} onPress={this.onPressContinue}>
                        <Text style={styles.btnText}>Save</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                {this.state.loading && <Loading /> }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        paddingTop : 10,

    },
    title : {
        fontFamily : "DMSans-Medium",
        color : "#333",
        fontSize : 22,
        marginLeft : 20,
        marginTop : 10
    },
    themes : {
        paddingHorizontal : 20,
    },
    themeContainer : {
        marginRight : 10,
    },
    theme : {
        ...ifIphoneX({
            height : 250,
            width : width / 2 - 40,
        },{
            height : 180,
            width : width / 2 - 60,
        }),
        borderRadius : 10,
    },
    themeTitle : {
        position : "absolute",
        bottom : 10,
        fontFamily : "DMSans-Bold",
        color : "white",
        width : "100%",
        textAlign : "center"
    },  
    fontContainer : {
        paddingHorizontal : 25, 
    },
    continue : {
        marginHorizontal : 20,
        paddingVertical : 10,
        backgroundColor : "#323EDD",
        borderRadius  : 10,
        marginTop : 20
    },
    btnText : {
        fontFamily : "DMSans-Medium",
        fontSize : 18,
        color : "#fff",
        textAlign : 'center'
    },
    selectedTheme : {
        position: "absolute",
        top : 5,
        right : 5,
        backgroundColor : "#61B15A",
        padding : 5,
        borderRadius : 20,
        borderColor : "white",
        borderWidth : 2
    },
    font : {
        color : "#333", 
        fontFamily : "DMSans-Medium", 
        fontSize : 16, 
        marginRight : 20,
        textAlign : 'center',
    },
    selectedFont : {
        borderBottomColor : "black", 
        borderBottomWidth : 2,
        alignItems : 'center',
        justifyContent : "center"
    },
    fontColorContainer : { 
        marginTop: 10, 
        ...ifIphoneX({
            height: 200, 
        },{
            height : 150
        }),
        width: width - 50, 
    }


});

const mapDispatchToProps = dispatch => ({
    load_user_data : data => dispatch(load_user_data(data))
});

const mapStateToProps = state => ({
    themes : state.UserReducer.themes,
    user : state.UserReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemesScreen);
