import {
  View,
  Text,
  TextInput,
  onChangeNumber,
  number,
  Button,
  SafeAreaView,
  Dimensions,
  FlatList,
  Animated, 
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Audio } from 'expo-av';
import React from 'react'
import TextTicker from 'react-native-text-ticker'

import Ionicons from 'react-native-vector-icons/Ionicons';
import background from "../assets/icon/background.png";
import Logo from "../assets/icon/logo.png";



import sounds from "../model/sound";
import songs from "../model/data";

const {width, height} = Dimensions.get('window');



export default function Chill({ navigation }) {
  // Active sound
  const [sound, setSound] = React.useState();

  async function playSound(musicsource) {
    const source = musicsource;
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      source
    );
    
    setSound(sound);
    var flag = sound.getStatusAsync()
    console.log("Nè he");
    console.log(flag);
    await sound.playAsync();
    sound.setVolumeAsync(1);
    console.log(flag);
    console.log("-----------");

   }

   async function playSong(musicsource) {
    const source = musicsource;
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      source
    );
    setSound(sound);
    var flag = sound.getStatusAsync()
    console.log("Nè he");
    console.log(flag);
    await sound.playAsync();
    console.log(flag);
    console.log("-----------");

   }

   async function Stop() {
    await sound.pauseAsync();
   }


  const ItemSong = ({ title, url }) => (
    <View style={styles.song}>
      <TouchableOpacity  style={styles.songControl} onPress={() => playSong(url)}>
        <Ionicons name="musical-notes-outline" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
        <TextTicker scrollSpeed={50} loop bounce numberOfLines={1} style={styles.title}> {title}</TextTicker>
      </TouchableOpacity>
    </View>
  );
  
  const ItemSound = ({ title, url }) => (  
    <View style={styles.song}>
      <TouchableOpacity  style={styles.songControl} onPress={() => playSound(url)}>
        <Ionicons name="ear-outline" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
        <TextTicker scrollSpeed={50} loop bounce numberOfLines={1} style={styles.title}> {title}</TextTicker>
      </TouchableOpacity>
    </View>
  );


  // RenderSong
  const renderSongs = ({ item }) => (
    <ItemSong title={item.Title} url = {item.url} />
  );
  const renderSounds = ({ item }) => (
    <ItemSound title={item.Title} url = {item.url} />
  );


//////////-----------------///////
  return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
        {/* <Button title="Pause" style={styles.pause} onPress={() => Stop()}/> */}
          <View style= {styles.row}>
            <ScrollView style={styles.column} >
              <FlatList
                    data={songs}
                    renderItem={renderSongs}
                    keyExtractor={item => item.id}
              />
            </ScrollView> 
            <ScrollView style={styles.column} >
              <FlatList
                    data={sounds}
                    renderItem={renderSounds}
                    keyExtractor={item => item.id}
              />
            </ScrollView>
          </View>
      </ImageBackground>

      );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
// });
const styles = StyleSheet.create({
  container: {
      flex:1,
      borderColor:'black',
      borderWidth:2
  },
  pause: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  column: {
    flex:1,
    marginBottom: 35,
    marginHorizontal: 10,
    
  },
  image: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
  },
  logo: {
    flex: 1.5,
    width: 380,
  },
  row: {    
    flex: 1, 
    flexDirection: 'row',
    justifyContent:'space-around',
    marginHorizontal: 10,
    
  },
  song:{
    height: 40,
    marginVertical: 3,
    borderColor: '#A88A64',
    borderRadius: 10,
    borderWidth: 3,
    flexDirection: 'row',
    paddingRight: 10
  },
  title: {
    color:"#7B6242",
    fontSize:15, 
    
  },
  songControl:{
    flexDirection: 'row', 
    alignItems:'center',
  }
});