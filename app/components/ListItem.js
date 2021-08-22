import React from 'react';
import {Image,Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
function ListItem({title,subtitle,image,IconComponent: IconComponent, onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
            underlayColor={colors.light}
            onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image 
                    style={styles.image}
                    source={image}/>}
                    <View style={styles.detailContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subtitle&&<Text style={styles.subtitle}>{subtitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>

    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,

    },
    title:{
        fontWeight:"600"
    },
    subtitle:{
        color: "#6e6969"
    },
    detailContainer:{
        marginLeft:10,
        justifyContent:"center"
    }
})
export default ListItem;