import { View,FlatList, Text, ScrollView, ImageBackground,
   TouchableHighlight, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import React, { Component, useState, useEffect } from 'react';
import background from "../assets/icon/background.png";
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
import firebase from "firebase/compat/app";
import ConnectFirebase from "../config";
import "firebase/compat/auth";

import "firebase/compat/database";
import "firebase/compat/firestore";
// import { ScrollView } from 'react-native-gesture-handler';
// import styles from '../styles/Styles';


export default function Chart({ navigation }) {
// tạo mẫu để chạy giao diện thui nhe
  let [song, setSong] = useState([
    // {name: 'Still with you',singer: 'Jungkook', image: '../assets/img/2.png', key: '1'},
    // {name: 'Heyahe',singer: 'Jung Je-Won',image: '../assets/img/3.png', key: '2'},
    // {name: 'Instagram',singer: 'Dean',image: '../assets/img/4.png', key: '3'},
    // {name: 'Mưa hồng',singer: 'Khánh Ly',image: '../assets/img/5.png', key: '4'},
    // {name: 'Long long ago',singer: 'Unknow',image: '../assets/img/6.png', key: '5'},
    // {name: 'How you like that',singer: 'Lê Cát Trọng Lý',image: '../assets/img/7.png', key: '6'},
    // {name: 'Thương',singer: 'Blackpink',image: '../assets/img/8.png', key: '7'},
  ]);
  

  useEffect(() => {
    let baihat=[];
    let songs=[];
    if (song.length<1){
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
      let i =  0  ; 
      baihat.sort(function(a,b){
        if(a.Luotnghe> b.Luotnghe) return -1;
        if(a.Luotnghe <b.Luotnghe) return 1;});
      while (i < baihat.length) {
        song.push(baihat[i]);
        i++;
      }    
    }   
      // SECTIONS=array;
      //song=songs;
      console.log(song);
    }, [])
  return (
    
    <View style={StyleSheet.container}>
      <View style={{ padding: 10, width: '100%', backgroundColor: '#7B6242', height: 100 }}>
        <View style={styles.header}>
          <Image source={require('../assets/icon/chart.png')}
                style={{ width: 30, height: 30, paddingRight: 20 }}></Image>
          <Title style={{ fontSize: 20, color: '#F4ECD0', fontWeight: 'bold', marginLeft: 20 }}>Top bài hát được nghe nhiều nhất</Title>
        </View>
      </View>

      <Text style={styles.sectionTitle}>#RChart</Text>

      <FlatList style={styles.main}
        data={song}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemLeft}>
              <Image source = {{uri: item.Linkava}} style={styles.avtSong}></Image>
              <View style={styles.itemTitle}>
                <Text style={styles.nameSong}>{item.Ten}</Text>
                <Text style={styles.singer}>{item.Casi}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.circular}></TouchableOpacity>
          </TouchableOpacity>
          
        )}
      
      />
    </View>
    // <View>
    //   <ScrollView>
    //     <View style={{ padding: 10, width: '100%', backgroundColor: '#7B6242', height: 100 }}>
    //       <View style={styles.header}>
    //         <Image source={require('../assets/icon/chart.png')}
    //           style={{ width: 30, height: 30, paddingRight: 20 }}></Image>
    //         <Title style={{ fontSize: 20, color: '#F4ECD0', fontWeight: 'bold', marginLeft: 20 }}>Top bài hát được nghe nhiều nhất</Title>
    //       </View>
    //     </View>
    //     <View style={styles.container}>
    //       <Text style={styles.sectionTitle}>#RChart</Text>
    //       <View style={styles.taskWrapper}>
    //         <View style={styles.num}>
    //           <Text >#1</Text>
    //         </View>
    //         <TouchableOpacity style={styles.items}>
    //           <View style={styles.itemLeft}>
    //             <Image source={require('../assets/img/2.png')} style={styles.avtSong}></Image>
    //             <View style={styles.itemTitle}>
    //               <Text style={styles.nameSong}>Still with you </Text>
    //               <Text style={styles.singer}>Jungkook</Text>
    //             </View>
    //           </View>
    //           <TouchableOpacity style={styles.circular}></TouchableOpacity>
    //         </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  main: {
    
   // marginHorizontal: 10,
    //marginLeft: 20,
    marginBottom: 50,
  //  marginTop: 20, 
  },
  item: {
    
    padding: 5,
    height: 70,
    // width: 333,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    // fontSize: 20,
    // fontWeight: 'bold',
    marginHorizontal: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 20,
    borderColor: '#7B6242',
    borderWidth: 2, 
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    // paddingBottom: 10,
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7B6242',
    paddingLeft: 20,
  },
  itemTitle: {
    flex: 1,
    flexDirection: 'column',
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  nameSong: {
    maxWidth: '80%',
    fontSize: 20,
    color: '#7B6242',
    fontWeight: 'bold',
    paddingLeft: 10,
    height: 30,
    marginBottom: 15,
  },
  avtSong: {
    width: 55,
    height: 55,
    opacity: 0.4,
    borderRadius: 5,
    // marginRight: 5,
    // paddingBottom: 15,
    paddingHorizontal: 5,
    marginHorizontal: 5
  },
  singer: {
    fontWeight: 'bold',
    width: '80%',
    fontSize: 14,
    paddingLeft: -60,
    color: '#7B6242',
    height: 20,
    marginLeft: 10,
    // paddingBottom: 5,
    marginTop: -10,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#7B6242',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 350,
    marginBottom: 20,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F4ECD0',
//   },
//   header: {
//     flex: 1,
//     flexDirection: 'row',
//     // paddingBottom: 10,
//     marginTop: 40,
//   },
//   taskWrapper: {
//     flex: 0.5,
//     flexDirection: 'column',
//     paddingTop: 30,
//     paddingHorizontal: 20,

//   },
//   num: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   sectionTitle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#7B6242',
//   },
//   items: {
//     backgroundColor: '#fff',
//     padding: 10,
//     height: 67,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     marginTop: 20,
//     borderColor: '#7B6242',
//     borderWidth: 2, weight: 333,
//   },
//   itemLeft: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   },
//   itemTitle: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   nameSong: {
//     maxWidth: '80%',
//     fontSize: 20,
//     color: '#7B6242',
//     fontWeight: 'bold',
//     paddingLeft: 10,
//     height: 30,

//   },
//   singer: {
//     fontWeight: 'bold',
//     width: '20%',
//     fontSize: 14,
//     paddingLeft: -60,
//     color: '#7B6242',
//     height: 20,
//     marginLeft: 10,
//   },
//   avtSong: {
//     width: 50,
//     height: 50,
//     opacity: 0.4,
//     borderRadius: 5,
//     // marginRight: 5,
//     // paddingBottom: 15,
//     paddingHorizontal: 5,
//     marginHorizontal: 5

//   },
//   circular: {
//     width: 14,
//     height: 14,
//     borderColor: '#55BCF6',
//     borderWidth: 2,
//     borderRadius: 5,
//   },
// });