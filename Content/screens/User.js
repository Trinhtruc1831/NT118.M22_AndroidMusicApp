import { View, Text, ScrollView, ImageBackground, TouchableHighlight, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react';
import { Avatar, Title, Caption, TouchableRipple, } from 'react-native-paper';
import background from "../assets/icon/background.png";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from '../styles/Styles';
// import { color } from 'react-native-reanimated';
import  { useState, useEffect } from "react";


export default function User({ route, navigation }) {
  useEffect(()=>{    
    console.log(route.params);

  },[])

  return (

    <View>
      <ScrollView>
        <View style={{ padding: 10, width: '100%', backgroundColor: '#7B6242', height: 150 }}>
          <TouchableOpacity>
            <Image source={require('../assets/icon/back.png')}
              style={{ width: 30, height: 30 }}></Image>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/icon/user.png')} style={{
            width: 200, height: 200,
            borderRadius: 100, marginTop: -50
          }}></Image>
          <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}>{route.params.ten}</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.TouchButton}>
            <Image source={require('../assets/icon/logo.png')}
              style={{ width: 20, height: 20 }}></Image>
            <Text style={{ fontSize: 20, color: '#F4ECD0', fontWeight: 'bold', marginLeft: 10 }}>Album</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchButton}>
            <Image source={require('../assets/icon/logo.png')}
              style={{ width: 20, height: 20 }}></Image>
            <Text style={{ fontSize: 20, color: '#F4ECD0', fontWeight: 'bold', marginLeft: 10 }}>Bài hát đã tải</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.TouchButton}>
            <Image source={require('../assets/icon/logo.png')}
              style={{ width: 20, height: 20 }}></Image>
            <Text style={{ fontSize: 20, color: '#F4ECD0', fontWeight: 'bold', marginLeft: 10 }}>Bài hát yêu thích</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchButton}>
            <Image source={require('../assets/icon/logo.png')}
              style={{ width: 20, height: 20 }}></Image>
            <Text style={{ fontSize: 20, color: '#F4ECD0', fontWeight: 'bold', marginLeft: 10 }}>Danh sách tải lên</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.editInfo}>
            <Text style={{ fontSize: 20, color: '#7B6242', fontWeight: 'bold', textAlign: 'left' }}>Sửa thông tin người dùng</Text>
            <Image source={require('../assets/icon/nextright.png')}
              style={{ width: 20, height: 20, marginLeft: 150 }}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editInfo2} 
          onPress={() => 
            navigation.navigate("Doimatkhau", {
              paramKey: route.params.paramKey,
            })
          }>
            <Text style={{ fontSize: 20, color: '#7B6242', fontWeight: 'bold', textAlign: 'left' }}>Đổi mật khẩu</Text>
            <Image source={require('../assets/icon/nextright.png')}
              style={{ width: 20, height: 20, marginLeft: 260 }}></Image>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 40,
  },
  TouchButton: {
    flex: 0.5,
    height: 100,
    flexGrow: 1,
    flexShrink: 0,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#7B6242',
    width: '46%',
    padding: 10,
    paddingBottom: 22,
    borderRadius: 10,
    shadowOpacity: 40,
    elevation: 5,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  editInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    marginTop: 70,
    paddingBottom: 10,
  },
  editInfo2: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    marginTop: 10,
    paddingBottom: 10,
    marginBottom: 22,
  },

});