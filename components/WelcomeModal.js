import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Modal from "react-native-modal";
import { CheckBox } from 'react-native-elements'
class WelcomeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked : false
        };
    }

    render() {
        return (
            <Modal isVisible={this.props.isVisible}>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Welcome to CTR Daily</Text>
                    <Text style={styles.text}>CTR Daily brings you 365 different Meanings and scriptures for the letters C.T.R. For members of the LDS church CTR means “Choose The Right”. CTR Daily would like to add some more deep and meaningful ways of looking at those powerful letters C.T.R. You will be sent a new CTR meaning, with scripture, every day. Sample:</Text>
                    <Text style={{fontFamily : "DMSans-Medium", fontSize : 14, marginVertical : 10, textAlign : "center"}}>January 1</Text>
                    <Text style={{fontFamily : "DMSans-Medium", fontSize : 16, textAlign : "center"}}>CHOOSE THE RIGHT - 2 Nephi 25:29</Text>
                    <Text style={{fontFamily : "DMSans-Medium",marginVertical : 10, fontSize : 14, textAlign : "center"}}>“And now behold, I say unto you that the right way is to believe in Christ, and deny him not; and Christ is the holy one of Israel; wherefore ye must bow down before him, and worship him with all your might, mind, and strength, and your whole soul; and if ye do this ye shall in nowise be cast out.”</Text>
                    <Text style={{fontFamily : "DMSans-Medium", fontSize : 16, textAlign : "center", marginVertical : 10}}>© 1996 CTR Daily by Kassi L. Pontious.</Text>
                    
                    <View style={{alignItems : "center"}}>
                        <CheckBox
                            title="Don't show again"
                            checked={this.state.checked}
                            containerStyle={{backgroundColor : "transparent", borderColor : "transparent"}}
                            onPress={() => this.setState({ checked : !this.state.checked })}
                            checkedColor = "#333"
                        />
                        <TouchableOpacity style={styles.btn} onPress={() => this.props.onClose(this.state.checked)}>
                            <Text style={styles.btnText}>Okay</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
        textAlign : "center",
        fontFamily : "DMSans-Bold"
    },
    btn : {
        backgroundColor : "#323EDD",
        paddingVertical : 10,
        width : 100,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 6,
    },
    btnText : {
        fontFamily : "DMSans-medium",
        color : "white",
        fontSize : 18
    },
    text : {
        fontFamily : "DMSans-Regular",
        textAlign : "center"
    }
});


export default WelcomeModal;
