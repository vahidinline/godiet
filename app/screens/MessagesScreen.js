import React from 'react';
import { FlatList,StyleSheet,View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const message = [
    {
        id:1,
        title:'t1',
        description:'D1',
        image:require('../assets/sama-2.jpg')
    },
    {
        id:2,
        title:'t2',
        description:'D2',
        image:require('../assets/sama-2.jpg')
    },
    {
        id:3,
        title:'t3',
        description:'D3',
        image:require('../assets/sama-2.jpg')
    },
]
function MessagesScreen(props) {
    return (
        <Screen>
        <FlatList
            data={message}
            keyExtractor={message=>message.id.toString()}
            renderItem={({item})=> (<ListItem 
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={()=>console.log()}
            renderRightActions={()=> <ListItemDeleteAction onPress={()=> console.log(item)}/>}

            />
           
    )}
    ItemSeparatorComponent={ListItemSeparator}
  
        />
        </Screen>
    );
}
const styles = StyleSheet.create({

})
export default MessagesScreen;