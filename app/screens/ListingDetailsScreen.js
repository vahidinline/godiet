import React from 'react';
import {View, Image,StyleSheet,Text} from 'react-native';
import color from '../config/colors';
import ListItem from '../components/ListItem';
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/sama-2.jpg')}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Workout Training</Text>
                <Text style={styles.subtitle}>with Sama</Text>
                <ListItem
                    image={require("../assets/sama-2.jpg")}
                    title="Sama Ghorbani"
                    subtitle="5 star"
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    detailsContainer:{
        padding:20
    },
    title:{
        fontSize:20,
        fontWeight:"500"
    },
    subtitle:{
        color: color.secondary,
        fontWeight:"500",
        marginVertical:10
    }
})
export default ListingDetailsScreen;