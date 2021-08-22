import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        blurRadius={10} 
            style= {styles.background}
            source={require("../assets/background.jpg")}>
                <View style={styles.logoContainer}>
                   
                    <Text style={styles.tagline}>BODYFITPLAN</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title="Login"/>
                    <AppButton title="Register" color="secondary"/>
                </View>

            </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    loginButton:{
        width:'100%',
        height: 70,
        backgroundColor: '#fc5c56',
        width:100,
        height:100,

    },
    buttonContainer:{
        padding: 20,
        width:'100%'
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
    },
    tagline:{
        fontSize:25,
        fontWeight:"500",
        paddingVertical:5,
        color:"#fff"
    }
})
export default WelcomeScreen;