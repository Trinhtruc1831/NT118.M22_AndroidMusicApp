import React, { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/database";
import "firebase/compat/firestore";

export default function ConnectFirebase() {
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
    //testaddData("1", "LyThao", "123");
    //get_DATA();
  }
}
