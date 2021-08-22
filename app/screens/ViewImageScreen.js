import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'; 

function ViewImageScreen(props) {
    return (
        <View style={styles.Container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="#000" size={40}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="delete" color="#000" size={40}/>
            </View>
            <Image 
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/logo.png')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon:{
        position:'absolute',
        top:40,
        left:30
    },
    Container:{
        backgroundColor:colors.white,
        flex: 1 
    },
    deleteIcon:{
        position:'absolute',
        top:40,
        right:30
    },
    image:{
        width:'40%',
        height:'40%',
        alignItems:'center',
    },
});
export default ViewImageScreen;