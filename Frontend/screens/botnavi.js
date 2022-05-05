import { View, Text, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import user from "./user";
import chart from "./chart";
import chill from "./chill";
import home from "./home";

const Tab = createBottomTabNavigator();

export default function botnavi({ navigation }) {
    return (
      <Tab.Navigator>
        <Tab.Screen name="user" component={user} />
        <Tab.Screen name="home" component={home} />
        <Tab.Screen name="chart" component={chart} />
        <Tab.Screen name="chill" component={chill} />        
      </Tab.Navigator>
      );
}