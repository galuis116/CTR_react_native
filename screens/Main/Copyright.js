import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

class Copyright extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{marginLeft : 20}}> 
                        <Icon name="close" color="#333" size={28}/>
                    </TouchableOpacity>
                    <View style={{ alignItems : "center"}}>
                        <Text style={{...styles.text, marginBottom : 25 }}>Copyright</Text>
                        <Text style={styles.text}>CTR Daily By Kassi L. Pontious</Text>
                        <Text style={styles.text}>Research and Idea by Kassi L. Pontious</Text>
                        <Text style={styles.text}>© 1996 CTR Daily by Kassi L. Pontious</Text>
                        <Text style={styles.text}>All rights reserved.</Text>
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
        paddingTop : 10
    },

    text : {
        fontFamily : "DMSans-Medium",
        fontSize : width > 390 ? 20 : 18,
        lineHeight : 36
    }
})

export default Copyright;
