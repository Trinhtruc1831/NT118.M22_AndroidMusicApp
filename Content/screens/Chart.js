import { View, Text, ScrollView, ImageBackground, TouchableHighlight, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import React, { Component, useState } from 'react';
import background from "../assets/icon/background.png";
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
// import { ScrollView } from 'react-native-gesture-handler';
// import styles from '../styles/Styles';


export default function Chart({ navigation }) {
  const [song, setSong] = useState([
    {name: 'Still with you', key: '1'},
    {name: 'Heyahe', key: '2'},
    {name: 'Instagram', key: '3'},
    {name: 'Mưa hồng', key: '4'},
    {name: 'Long long ago', key: '5'},
    {name: 'Mưa hồng', key: '6'},
    {name: 'Thương', key: '7'},
  ]);
  return (
    <Text >Still with you </Text>
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

    //         <TouchableOpacity style={styles.items}>
    //           <View style={styles.itemLeft}>
    //             <View >
    //               <Image source={require('../assets/img/1.png')} style={styles.avtSong}></Image>
    //             </View>
    //             <View style={styles.itemTitle}>
    //               <Text style={styles.nameSong}>Heyahe </Text>
    //               <Text style={styles.singer}>Jung Je-Won</Text>
    //             </View>
    //           </View>
    //           <TouchableOpacity style={styles.circular}></TouchableOpacity>
    //         </TouchableOpacity>

    //         <TouchableOpacity style={styles.items}>
    //           <View style={styles.itemLeft}>
    //             <View >
    //               <Image source={require('../assets/img/3.png')} style={styles.avtSong}></Image>
    //             </View>
    //             <View style={styles.itemTitle}>
    //               <Text style={styles.nameSong}>Instagram</Text>
    //               <Text style={styles.singer}>Dean</Text>
    //             </View>
    //           </View>
    //           <TouchableOpacity style={styles.circular}></TouchableOpacity>
    //         </TouchableOpacity>

    //         <TouchableOpacity style={styles.items}>
    //           <View style={styles.itemLeft}>
    //             <View >
    //               <Image source={require('../assets/img/4.png')} style={styles.avtSong}></Image>
    //             </View>
    //             <View style={styles.itemTitle}>
    //               <Text style={styles.nameSong}>Mưa hồng</Text>
    //               <Text style={styles.singer}>Khánh Ly</Text>
    //             </View>
    //           </View>
    //           <TouchableOpacity style={styles.circular}></TouchableOpacity>
    //         </TouchableOpacity>

    //         <TouchableOpacity style={styles.items}>
    //           <View style={styles.itemLeft}>
    //             <View >
    //               <Image source={require('../assets/img/5.png')} style={styles.avtSong}></Image>
    //             </View>
    //             <View style={styles.itemTitle}>
    //               <Text style={styles.nameSong}>Long long ago</Text>
    //               <Text style={styles.singer}>Unknow</Text>
    //             </View>
    //           </View>
    //           <TouchableOpacity style={styles.circular}></TouchableOpacity>
    //         </TouchableOpacity>

    //         <TouchableOpacity style={styles.items}>
    //           <View style={styles.itemLeft}>
    //             <View >
    //               <Image source={require('../assets/img/6.png')} style={styles.avtSong}></Image>
    //             </View>
    //             <View style={styles.itemTitle}>
    //               <Text style={styles.nameSong}>Thương </Text>
    //               <Text style={styles.singer}>Lê Cát Trọng Lý</Text>
    //             </View>
    //           </View>
    //           <TouchableOpacity style={styles.circular}></TouchableOpacity>
    //         </TouchableOpacity>

    //         <TouchableOpacity style={styles.items}>
    //           <View style={styles.itemLeft}>
    //             <View >
    //               <Image source={require('../assets/img/7.png')} style={styles.avtSong}></Image>
    //             </View>
    //             <View style={styles.itemTitle}>
    //               <Text style={styles.nameSong}>How you like that </Text>
    //               <Text style={styles.singer}>Blackpink</Text>
    //             </View>
    //           </View>
    //           <TouchableOpacity style={styles.circular}></TouchableOpacity>
    //         </TouchableOpacity>

    //         <TouchableOpacity style={styles.items}>
    //           <View style={styles.itemLeft}>
    //             <View >
    //               <Image source={require('../assets/img/9.png')} style={styles.avtSong}></Image>
    //             </View>
    //             <View style={styles.itemTitle}>
    //               <Text style={styles.nameSong}>Still with you </Text>
    //               <Text style={styles.singer}>Jungkook</Text>
    //             </View>
    //           </View>
    //           <TouchableOpacity style={styles.circular}></TouchableOpacity>
    //         </TouchableOpacity>
    //       </View>

    //     </View>

    //   </ScrollView>
    // </View>

  );
}
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
//     borderWidth: 2,
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