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
    TouchableOpacity,
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
  
  export default function Doimatkhau({ route, navigation }) {
    const [username, setUsername] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPass] = useState([]);
    const [conpass, setConPass] = useState([]);
    const [isChecked, setChecked] = useState(false);
  
    function doimk(id, pass, conpass) {
      if (pass!=conpass){
        alert("Nhập lại mật khẩu không đúng");
      }
      else {    
      ConnectFirebase();
      console.log(route.params);
      var updates = {};
      updates['/MEMBER/' + "N1t3bZuhfHyLLoCMO5A" + '/' + "Password"] = pass;
      //updates['/user-posts/' + uid + '/' + newPostKey] = postData;
      
      //firebase.database().ref().update(updates);
      firebase.database().ref('MEMBER/'+route.params.paramKey).update({
        Password: pass
      }, function (error) {
        if (error) {
          // The write failed...
          alert('Lỗi')
        } else {
          // Data saved successfully!
          alert('Thành Công !!!')
        }
      });
       
      }
    }
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.dautrang}>  
        
            <Text style={styles.header1} onPress={() => {
                 navigation.goBack()
                }}> Trở lại </Text>
        </View>
          <Text style={styles.header}>Đổi mật khẩu</Text>
          <View style={styles.inputlogin}>
            <Text style={styles.text}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setPass(text);
              }}
              value={password}
              placeholder="Nhập mật khẩu"
              keyboardType="default"
            />
            <Text style={styles.text}>Nhập lại mật khẩu</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setConPass(text);
              }}
              value={conpass}
              placeholder="Nhập lại mật khẩu"
              keyboardType="default"
            />
          </View>
  
          <View style={styles.row}>
            
          </View>
          <View style={styles.btlogin}>
            <Button
              title="Đổi mật khẩu"
              color="#7B6242"
              onPress={() => {
                 doimk(route.params.paramKey,password,conpass);
                }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    nd: {
      padding: 10, 
      width: '100%', 
      backgroundColor: '#7B6242', 
      height: 100 
    },  
    inputlogin: {
      flex: 0.4,
      width: 380,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 380,
    },
    dautrang: {
      flex: 0.18,
      width: '100%', 
      paddingTop: 5,
      paddingLeft:10,
      paddingRight:10,
      backgroundColor: '#7B6242',
      //position: 'absolute',
    },
    header1: {
      //flex: 0.2,
      color: "#dbcdba",
      fontSize: 28,
      marginTop: 40,
      fontWeight: "bold",
    },
    header: {
      flex: 0.2,
      color: "#A88A64",
      fontSize: 40,
      marginTop: 100,
      fontWeight: "bold",
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
      flex: 0.7,
      width: 150,
      height: 15,
      marginTop: 10,
      color: "#7B6242",
    },
  });
  