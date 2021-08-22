import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { StyleSheet,View,FlatList } from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ListItemSeparatorComponent from '../components/ListItemSeparator';


const menuItems = [
    {
        title:"My Listing",
        icon:{
            name:"format-list-bulleted",
            backgroundColor: colors.secondary
        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor: colors.primary
        }
    }
]
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}> 
                <ListItem
                title="Sama"
                subtitle="Coach"
                image={require('../assets/sama-2.jpg')}
                />
            </View>
            <View style={styles.container}> 
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItems => menuItems.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({item}) =>
                    <ListItem
                        title={item.title}
                        IconComponent= {
                            <Icon 
                            name={item.icon.name}
                            backgroundColor={item.icon.backgroundColor}
                            />
                        }
                    
                    />
                    }
                />
            </View>
            <ListItem 
                title="Logout"
                IconComponent={
                    <Icon 
                        name="logout"
                        backgroundColor="#ffe66d"

                        />
                }
                />
        </Screen>
    );
                }
const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor: colors.light
    }
})
export default AccountScreen;