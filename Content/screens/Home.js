import { StatusBar } from 'expo-status-bar';
import React, {useState, Component, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import Carousel from '../component/Carousel';
import { dummyData } from '../data/Data';
import firebase from "firebase/compat/app";
import ConnectFirebase from "../config";
import "firebase/compat/auth";

import "firebase/compat/database";
import "firebase/compat/firestore";

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.itemPhoto}
        source={{uri: item.url}}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};



export default function Home({ navigation }) {
  useEffect(() => {
    let array = [
      {
        title: 'Mới nhất',
        horizontal: true,
        data: [
        ],
      },
      {
        title: 'Nghe nhiều nhất',
        horizontal: true,
        data: [
        ],
      },
      {
        title: 'Based on your recent listening',
        data: [
        ],
      },
    ];
    firebase
      .database()
      .ref("BAIHAT/")
      .on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var childData = childSnapshot.val();
          array[0].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url: childData.Linkava,
          });
          array[1].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url: childData.Linkava,
          });
          array[2].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url:  childData.Linkava,
          });
          array[0].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url: childData.Linkava,
          });
          array[1].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url:  childData.Linkava,
          });
          array[2].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url:  childData.Linkava,
          });

        });
      });
      SECTIONS=array;
      console.log(SECTIONS);
    }, [])
    return (
      <View style={styles.container}>
        
      <View style={styles.header}>  
      <TextInput
            style={styles.input}
            // onChangeText={(text) => {
            //   setPass(text);
            // }}
            // value={number}
            placeholder="search"
            keyboardType="numeric"
          /> 
      </View>
      <StatusBar style="light" />
      
      <SafeAreaView style={{ flex: 1}}>
        <ScrollView>  

      <View>
            <Carousel data = {dummyData}/>
        </View>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? ( 
                <FlatList
                  horizontal
                  data={section.data}
                  //data={songsState}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
                ) : null} 
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
            return null;
          }}
        />
        <View style={styles.item}>
      
      <Text style={styles.sectionHeader}>Danh mục</Text>
      <View style={styles.button}>
      <View style={styles.btlogin}>
          <Button
            title="V-pop"
            color="#7B6242"
            onPress={() => {
              get_DATA(username, password);
            }}
          />
        </View>
        <View style={styles.btlogin}>
          <Button
            title="K-pop"
            color="#7B6242"
            onPress={() => {
              get_DATA(username, password);
            }}
          />
        </View>
         </View>
         <View style={styles.button}>
        <View style={styles.btlogin}>
          <Button
            title="J-pop"
            color="#7B6242"
            onPress={() => {
              get_DATA(username, password);
            }}
          />
        </View>
        <View style={styles.btlogin}>
          <Button
            title="US=UK"
            color="#7B6242"
            onPress={() => {
              get_DATA(username, password);
            }}
          />
        </View>
        </View>
    </View>
        </ScrollView>  
      </SafeAreaView>
    </View>
      );
}

let SECTIONS = [
  {
    title: 'Mới nhất',
    horizontal: true,
    data: [
    ],
  },
  {
    title: 'Nghe nhiều nhất',
    horizontal: true,
    data: [
    ],
  },
  {
    title: 'Based on your recent listening',
    data: [
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4ECD0',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#7B6242',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
    borderRadius:10,
  },
  itemText: {
    color: '#7B6242',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
  },
  header: {
    flex: 0.15,
    paddingTop: 5,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#7B6242',
    //position: 'absolute',
  },
  input: {
    //flex: 0.5,
    marginVertical: 15,
    marginTop: 30,
   // marginHorizontal: 18,
    borderWidth: 2,
    backgroundColor: "#F4ECD0",
    borderColor: "#A88A64",
    borderRadius: 7,
    padding: 10,
  },
  button: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  btlogin: {
    flex: 0.5,
    width: 150,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    color: "#7B6242",
  },
});