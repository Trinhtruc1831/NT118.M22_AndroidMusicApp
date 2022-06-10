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
    let array = [];
    
    firebase
      .database()
      .ref("BAIHAT/")
      .on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var childData = childSnapshot.val();
          SECTIONS[0].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url: childData.Linkava,
          });
          SECTIONS[1].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url: childData.Linkava,
          });
          SECTIONS[2].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url:  childData.Linkava,
          });
          SECTIONS[0].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url: childData.Linkava,
          });
          SECTIONS[1].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url:  childData.Linkava,
          });
          SECTIONS[2].data.push({
            key: childSnapshot.key,
            text: childData.Ten,
            url:  childData.Linkava,
          });

        });
        //setData(array);
      });
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
      // {
      //   key: '1',
      //   text: 'Item text 1',
      //   uri: 'https://picsum.photos/id/1/200',
      // },
      // {
      //   key: '2',
      //   text: 'Item text 2',
      //   uri: 'https://picsum.photos/id/10/200',
      // },

      // {
      //   key: '3',
      //   text: 'Item text 3',
      //   uri: 'https://picsum.photos/id/1002/200',
      // },
      // {
      //   key: '4',
      //   text: 'Item text 4',
      //   uri: 'https://picsum.photos/id/1006/200',
      // },
      // {
      //   key: '5',
      //   text: 'Item text 5',
      //   uri: 'https://picsum.photos/id/1008/200',
      // },
    ],
  },
  {
    title: 'Nghe nhiều nhất',
    horizontal: true,
    data: [
      // {
      //   key: '1',
      //   text: 'Item text 1',
      //   uri: 'https://picsum.photos/id/1011/200',
      // },
      // {
      //   key: '2',
      //   text: 'Item text 2',
      //   uri: 'https://picsum.photos/id/1012/200',
      // },

      // {
      //   key: '3',
      //   text: 'Item text 3',
      //   uri: 'https://picsum.photos/id/1013/200',
      // },
      // {
      //   key: '4',
      //   text: 'Item text 4',
      //   uri: 'https://picsum.photos/id/1015/200',
      // },
      // {
      //   key: '5',
      //   text: 'Item text 5',
      //   uri: 'https://picsum.photos/id/1016/200',
      // },
    ],
  },
  {
    title: 'Based on your recent listening',
    data: [
      // {
      //   key: '1',
      //   text: 'Item text 1',
      //   uri: 'https://picsum.photos/id/1020/200',
      // },
      // {
      //   key: '2',
      //   text: 'Item text 2',
      //   uri: 'https://picsum.photos/id/1024/200',
      // },

      // {
      //   key: '3',
      //   text: 'Item text 3',
      //   uri: 'https://picsum.photos/id/1027/200',
      // },
      // {
      //   key: '4',
      //   text: 'Item text 4',
      //   uri: 'https://picsum.photos/id/1035/200',
      // },
      // {
      //   key: '5',
      //   text: 'Item text 5',
      //   uri: 'https://picsum.photos/id/1038/200',
      // },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4ECD0',
  },
  sectionHeader: {
    fontWeight: '800',
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
    marginTop: 10,
    //position: 'absolute',
  },
  input: {
    flex: 1,
    marginVertical: 15,
   // marginHorizontal: 18,
    borderWidth: 2,
    backgroundColor: "#F4ECD0",
    borderColor: "#A88A64",
    borderRadius: 7,
    padding: 10,
  },
});