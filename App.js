import React from 'react';
import { Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BMI from './app/components/BMI';

import Screen from './app/components/Screen';
const Tweets = ({navigation}) => (
<Screen>
  
  <Text>Tweets</Text>
  <Button 
  title="View Tweet"
  onPress={()=> navigation.navigate("TweetDetails")}
  />
</Screen>
);
const TweetDetails = () => (
<Screen>
  <Text>TweetDetails</Text>
</Screen>
);
const Stack = createStackNavigator();   
const StackNavigator = ()=> (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
)
export default function App() {
  

  return ( 
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

