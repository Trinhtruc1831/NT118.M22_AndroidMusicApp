import React, { useState, useEffect } from "react";
import { Button, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Botnavi from "./screens/Botnavi";
import User from "./screens/User";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/database";
import "firebase/compat/firestore";
const Stack = createStackNavigator();

export default function App() {
  // function testaddData(username, password, email, hoten) {
  //   firebase
  //     .database()
  //     .ref("MEMBER/")
  //     .push()
  //     .set(
  //       {
  //         Username: username,
  //         Password: password,
  //         Email: email,
  //         Hoten: hoten,
  //       },
  //       function (error) {
  //         if (error) {
  //           console.log("Lỗi");
  //         } else {
  //           console.log("Thành công");
  //         }
  //       }
  //     );
  // }

  // const get_DATA = () => {
  //   let array = [];
  //   firebase
  //     .database()
  //     .ref("MEMBER/")
  //     .on("value", function (snapshot) {
  //       snapshot.forEach(function (childSnapshot) {
  //         var childData = childSnapshot.val();
  //         array.push({
  //           id: childSnapshot.key,
  //           username: childData.Username,
  //           password: childData.Password,
  //         });
  //       });
  //       console.log(array[1].username);
  //       //setData(array);
  //     });
  // };
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBdsz9AWTFJm4ZJzQyHFJJM4U-gvsnRCFU",
      authDomain: "rcapp-71126.firebaseapp.com",
      projectId: "rcapp-71126",
      storageBucket: "rcapp-71126.appspot.com",
      messagingSenderId: "667210641239",
      appId: "1:667210641239:web:75ebb3010d2e3f5e12d812",
      measurementId: "G-C9Q5DRGJVK",
    };
    if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      console.log("\nKết nối firebase thành công\n");
      //testaddData("lttt", "123", "lttt0206", "Lý Thảo");
      //get_DATA();
      
      
    }
  }, []);

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
        {/* <Stack.Screen name="User" component={User}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
