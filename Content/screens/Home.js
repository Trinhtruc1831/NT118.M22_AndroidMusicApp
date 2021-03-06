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
    <View style={styles.item} 
      onPress={() => navigation.navigate("Listen", {
        Ten:item.Ten,
        Casi:item.Casi,
        Ava:item.Linkava,
        Linkbaihat:item.Linkbaihat,
        Key:item.key,
      })}>
      <Image
        style={styles.itemPhoto}
        source={{uri: item.Linkava}}
        
        resizeMode="cover"
      />
      <Text style={styles.itemText}  onPress={() => navigation.navigate("Listen", {
        Ten:item.Ten,
        Casi:item.Casi,
        Ava:item.Linkava,
        Linkbaihat:item.Linkbaihat,
        Key:item.key,
      })}> {item.Ten}</Text>
    </View>
  );
};



export default function Home({ navigation }) {
  const [keyword, setKeyword] = useState(null);
  useEffect(() => {
    let baihat=[];
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
    ];
    firebase
      .database()
      .ref("BAIHAT/")
      .on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var childData = childSnapshot.val();
          baihat.push({
            key: childSnapshot.key,
            Ten: childData.Ten,
            Casi: childData.Casi,
            Danhmuc:childData.Danhmuc,
            Linkava:childData.Linkava,
            Linkbaihat: childData.Linkbaihat,
            Luotnghe:childData.Luotnghe,
            Luotai:childData.Luotai,
            Luotthich: childData.Luotthich,
            Tag:childData.Tag,
            Ngaydangtai: childData.Ngaydangtai
          });          
        });
      });
      let i =  baihat.length;
      i=i-1;
      while (i >=0) {
        array[0].data.push(baihat[i]);
        i--;
      }    
      baihat.sort(function(a,b){
        if(a.Luotnghe> b.Luotnghe) return -1;
        if(a.Luotnghe <b.Luotnghe) return 1;});
       i = 0;
      while (i < baihat.length) {
        array[1].data.push(baihat[i]);
        i++;
      }    
      SECTIONS=array;
      console.log(SECTIONS);
    }, [])
    return (
      <View style={styles.container}>
      <View style={styles.header}>  
      <View style={styles.button}>  
      <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setKeyword(text);
            }}
            //value={number}
            placeholder="search"
            keyboardType="numeric"
          /> 
          <Button
            title="Tìm"
            style={styles.btseach}
            color="#7B6242"
            onPress={() => navigation.navigate("Search", {
              keyword: keyword,
            })}
          />
      </View>
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
            onPress={() => navigation.navigate("Baihatdanhmuc", {
              Danhmuc: "V-pop",
            })}
          />
        </View>
        <View style={styles.btlogin}>
          <Button
            title="K-pop"
            color="#7B6242"
            onPress={() => navigation.navigate("Baihatdanhmuc", {
              Danhmuc: "K-pop",
            })}
          />
        </View>
         </View>
         <View style={styles.button}>
        <View style={styles.btlogin}>
          <Button
            title="J-pop"
            color="#7B6242"
            onPress={() => navigation.navigate("Baihatdanhmuc", {
              Danhmuc: "J-pop",
            })}
          />
        </View>
        <View style={styles.btlogin}>
          <Button
            title="US-UK"
            color="#7B6242"
            onPress={() => navigation.navigate("Baihatdanhmuc", {
              Danhmuc: "US-UK",
            })}
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
    flex: 0.9,
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
  btsearch:{
    flex: 0.1, 
    width: 10, 
    height:50 , 
    paddingTop: 10,
    marginTop:30,
  }
});