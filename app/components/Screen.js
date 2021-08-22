import React from 'react';
import Constans from 'expo-constants';
import {SafeAreaView, StyleSheet,View} from 'react-native';
function screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>
             {children}
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Constans.statusBarHeight
    }
})
export default screen;