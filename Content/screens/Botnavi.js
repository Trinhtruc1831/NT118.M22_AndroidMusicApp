import { View, Text, Button, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { useState, useEffect } from "react";

import User from "./User";
import Chart from "./Chart";
import Chill from "./Chill";
import Lismusic from "./Lismusic";
import Home from "./Home";
import Styles from "../styles/Styles";

import Usericon from "../assets/icon/user.png";
import Homeicon from "../assets/icon/home.png";
import Chillicon from "../assets/icon/chill.png";
import Charticon from "../assets/icon/chart.png";

const Tab = createBottomTabNavigator();

export default function Botnavi({ route, navigation }) {
  useEffect(()=>{    
    console.log(route.params);
  },[])
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: Styles.bottomnavi,
        headerShown: false,
      }}
      tabBarOptions={{ showLabel: false }}
    >
      <Tab.Screen
        style={Styles.bottomnavi}
        name="User"
        component={User}  
        initialParams={route.params}      
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image style={{ width: size, height: size }} source={Usericon} />
            );
          },
        }}
      />
      <Tab.Screen
        style={Styles.bottomnavi}
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image style={{ width: size, height: size }} source={Homeicon} />
            );
          },
        }}
      />
      <Tab.Screen
        style={Styles.bottomnavi}
        name="Chart"
        component={Chart}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image style={{ width: size, height: size }} source={Charticon} />
            );
          },
        }}
      />
      <Tab.Screen
        style={Styles.bottomnavi}
        name="Chill"
        component={Chill}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image style={{ width: size, height: size }} source={Chillicon} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
