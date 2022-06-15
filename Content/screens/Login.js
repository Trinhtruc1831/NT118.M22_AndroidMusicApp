import {
  View,
  Text,
  TextInput,
  onChangeNumber,
  number,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import background from "../assets/icon/background.png";
import Logo from "../assets/icon/logo.png";
import Checkbox from "expo-checkbox";
import firebase from "firebase/compat/app";
import ConnectFirebase from "../config";
import "firebase/compat/auth";

import "firebase/compat/database";
import "firebase/compat/firestore";

export default function Login({ navigation }) {
  const [username, setUsername] = useState(null);
  const [password, setPass] = useState([]);
  const [isChecked, setChecked] = useState(false);
  let array = [];
  
  useEffect(()=>{    
    ConnectFirebase();
    firebase
      .database()
      .ref("MEMBER/")
      .on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var childData = childSnapshot.val();
          array.push({
            id: childSnapshot.key,
            Username: childData.Username,
            Password: childData.Password,
          });
        });
        //setData(array);
      });
  },[])

  function get_DATA(user, pass) {   
    firebase
    .database()
    .ref("MEMBER/")
    .on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        array.push({
          id: childSnapshot.key,
          Username: childData.Username,
          Password: childData.Password,
        });
      });
      //setData(array);
    });
    let i = 0;
    while (i < array.length) {
      if (array[i].Username == user && array[i].Password == pass) {
        return navigation.navigate("Botnavi");
      } else {
        i = i + 1;
      }
      console.log(i);
    }
    if (i >= array.length) {
      console.log("---------------------------");
      console.log(i);
      console.log(user);
      console.log(pass);
      console.log(array.length);
      console.log(array);

      alert("Lỗi");
    }
    
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
        <View style={styles.inputlogin}>
          <Text style={styles.text}>Tài khoản</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setUsername(text);
            }}
            value={username}
            placeholder="Nhập tên tài khoản vào đây"
            keyboardType="numeric"
          />
          <Text style={styles.text}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setPass(text);
            }}
            value={password}
            placeholder="Nhập mật khẩu vào đây"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.row}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#A88A64" : undefined}
          />
          <Text style={styles.labelCheckBox}>Hiện mật khẩu</Text>
        </View>
        <View style={styles.btlogin}>
          <Button
            title="Đăng Nhập"
            color="#7B6242"
            onPress={() => {
              get_DATA(username, password);
            }}
          />
        </View>
        <Text
          style={styles.labelFGPW}
          onPress={() => navigation.navigate("Signup")}
        >
          Chưa có tài khoản?
        </Text>
        {/* <Text style={styles.text}>Đây là trang login!</Text> 
          <Button
            title="Đăng Nhập"
            onPress={() =>
              navigation.navigate('Botnavi')
            }
          />
         <Button 
            title="Chưa có tài khoản?"
            onPress={() =>
              navigation.navigate('Signup')
            }
            style={styles.button}
          /> */}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputlogin: {
    flex: 0.5,
    width: 380,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 380,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    width: 380,
  },
  text: {
    flex: 1,
    fontStyle: "normal",
    fontWeight: "bold",
    alignSelf: "flex-start",
    fontSize: 15,
    color: "#7B6242",
    marginLeft: 20,
  },
  input: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 18,
    borderWidth: 2,
    backgroundColor: "#F4ECD0",
    borderColor: "#A88A64",
    borderRadius: 7,
    padding: 10,
  },
  checkbox: {
    marginLeft: 18,
    height: 15,
    width: 15,
    backgroundColor: "#F4ECD0",
    borderColor: "#A88A64",
    borderRadius: 5,
    color: "#A88A64",
  },
  labelCheckBox: {
    alignSelf: "flex-start",
    marginLeft: 5,
    fontSize: 10,
    color: "#7B6242",
  },
  labelFGPW: {
    alignSelf: "center",
    marginBottom: 15,
    fontSize: 15,
    fontStyle: "italic",
    color: "#7B6242",
  },
  button: {
    flex: 1,
  },
  btlogin: {
    flex: 0.5,
    width: 150,
    height: 15,
    marginTop: 10,
    color: "#7B6242",
  },
});
