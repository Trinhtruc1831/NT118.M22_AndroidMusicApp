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

export default function Signup({ navigation }) {
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPass] = useState([]);
  const [conpass, setConPass] = useState([]);
  const [isChecked, setChecked] = useState(false);

  function add_MEMBER(user, pass, conpass, ten) {
    if (pass!=conpass){
      alert("Nhập lại mật khẩu không đúng");
    }
    else {
     
    ConnectFirebase();
    let array = [];
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
      if (array[i].Username == user ) {
        alert("Tên tài khoản đã tồn tại");
        break;
      } else {
        i = i + 1;
      }
      console.log(i);
    }
    if (i >= array.length) {
      firebase
      .database()
      .ref("MEMBER/")
      .push()
      .set(
        {
          Username: username,
          Password: password,
          Hoten: ten,
          Email: "lttt@gmail.com",
        },
        function (error) {
          if (error) {
            console.log("Lỗi");
          } else {
            console.log("Thành công");
          }
        }
      );
      alert("Thành công");
    }
     
    }
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var today= date+'/'+month+'/'+year;
    firebase
    .database()
    .ref("BAIHAT/")
    .push()
    .set(
      {
        Ten: "hai mươi hai (22)",
        Casi:  "Hứa Kim Tuyền, AMEE",
        Danhmuc:"V-pop",
        Linkava:"https://dj24h.com/wp-content/uploads/2022/05/hai-muoi-hai-emee.jpg",
        Linkbaihat: "../assets/music/22.mp3",
        Luotnghe:2,
        Luotai:0,
        Luotthich:0,
        Tag:"V-pop",
        Ngaydangtai: today
      },
      function (error) {
        if (error) {
          console.log("Lỗi");
        } else {
          console.log("Thành công");
        }
      }
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.header}>ĐĂNG KÝ</Text>
        <View style={styles.inputlogin}>
          <Text style={styles.text}>Tài khoản</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setUsername(text);
            }}
            value={username}
            placeholder="Nhập tên tài khoản"
            keyboardType="numeric"
          />
          <Text style={styles.text}>Họ và tên</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setName(text);
            }}
            value={name}
            placeholder="Nhập họ và tên"
            keyboardType="numeric"
          />
          <Text style={styles.text}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setPass(text);
            }}
            value={password}
            placeholder="Nhập mật khẩu"
            keyboardType="numeric"
            secureTextEntry={true}
          />
          <Text style={styles.text}>Nhập lại mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setConPass(text);
            }}
            value={conpass}
            placeholder="Nhập lại mật khẩu"
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.row}>
          
        </View>
        <View style={styles.btlogin}>
          <Button
            title="Đăng Ký"
            color="#7B6242"
            onPress={() => {
                add_MEMBER(username, password,conpass,name);
              }}
          />
        </View>
        <Text
          style={styles.labelFGPW}
          onPress={() => navigation.navigate("Login")}
        >
          Bạn đã có tài khoản?
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
    flex: 1,
    width: 380,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 380,
  },
  header: {
    flex: 0.25,
    color: "#A88A64",
    fontSize: 40,
    marginTop: 100,
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
