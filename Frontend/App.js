import React, {useState, useEffect} from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Botnavi from "./screens/Botnavi";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        useLegacyImplementation
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Botnavi" component={Botnavi} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}