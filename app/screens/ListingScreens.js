import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import Card from '../components/Card'
import colors from '../config/colors'
import Screen from '../components/Screen';

function ListingScreens(props) {
    const listings=[
        {
            id: 1,
            title: 'Sama',
            price:'',
            image: require('../assets/sama-2.jpg')
        },
        {
            id: 2,
            title: 'Saba',
            price:'',
            image: require('../assets/sama-2.jpg')
        },
        {
            id: 3,
            title: 'Mahtab',
            price:'',
            image: require('../assets/sama-2.jpg')
        },
        {
            id: 4,
            title: 'Ailin',
            price:'',
            image: require('../assets/sama-2.jpg')
        },


    ];
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item})=>
                    <Card 
                        title={item.title}
                        subTitle={item.price}
                        image={item.image} 
                    />
        }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding:20,
        backgroundColor:colors.light
    }

})
export default ListingScreens;