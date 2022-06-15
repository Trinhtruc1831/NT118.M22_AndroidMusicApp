import {
  View,
  Text,
  TextInput,
  onChangeNumber,
  number,
  Button,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';

import background from "../assets/icon/background.png";
import Logo from "../assets/icon/logo.png";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Chill({ navigation }) {
    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
                  
          <View style= {styles.row}>
            <ScrollView style={styles.column} >
              <View style={styles.song}>
                <TouchableOpacity  style={styles.songControl}>
                    <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                    <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> onHeyaahde</Text>
                </TouchableOpacity> 
              </View>
              <View style={styles.song}>
                <TouchableOpacity  style={styles.songControl}>
                    <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                    <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> dHeyaahde</Text>
                </TouchableOpacity> 
              </View>
              <View style={styles.song}>
                <TouchableOpacity  style={styles.songControl}>
                    <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                    <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> sHeyaahde</Text>
                </TouchableOpacity> 
              </View>
              <View style={styles.song}>
                <TouchableOpacity  style={styles.songControl}>
                    <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                    <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> aHeyaahde</Text>
                </TouchableOpacity> 
              </View>
              <View style={styles.song}>
                <TouchableOpacity  style={styles.songControl}>
                    <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                    <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> vHeyaahde</Text>
                </TouchableOpacity> 
              </View>
              <View style={styles.song}>
                <TouchableOpacity  style={styles.songControl}>
                    <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                    <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                </TouchableOpacity> 
              </View>
              <View style={styles.song}>
                <TouchableOpacity  style={styles.songControl}>
                    <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                    <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                </TouchableOpacity> 
              </View>
              <View style={styles.song}>
                <TouchableOpacity  style={styles.songControl}>
                    <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                    <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                </TouchableOpacity> 
              </View>
            </ScrollView>
            <ScrollView style={styles.column}>
                <View style={styles.song}>
                  <TouchableOpacity  style={styles.songControl}>
                      <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                      <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                  </TouchableOpacity> 
                </View>
                <View style={styles.song}>
                  <TouchableOpacity  style={styles.songControl}>
                      <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                      <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                  </TouchableOpacity> 
                </View>
                <View style={styles.song}>
                  <TouchableOpacity  style={styles.songControl}>
                      <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                      <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                  </TouchableOpacity> 
                </View>
            </ScrollView>
          </View>
          
          {/* <SafeAreaView style = {styles.container}>
            <View style={styles.row}>
              <View style={styles.song}>
                  <TouchableOpacity  style={styles.songControl}>
                      <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                      <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                  </TouchableOpacity> 
              </View>
              <View style={styles.song}>
                  <TouchableOpacity  style={styles.songControl}>
                      <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                      <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                  </TouchableOpacity> 
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.song}>
                  <TouchableOpacity  style={styles.songControl}>
                      <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                      <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                  </TouchableOpacity> 
              </View>
              <View style={styles.song}>
                  <TouchableOpacity  style={styles.songControl}>
                      <Ionicons name="ios-pause" size={28} color="#7A6447" style={{marginBottom:2, marginLeft:5}}/> 
                      <Text style={{color:"#7B6242", fontSize:15, fontWeight: '400'}}> Heyaahde</Text>
                  </TouchableOpacity> 
              </View>
            </View>
          </SafeAreaView> */}
          
      </ImageBackground>
      );
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      borderColor:'black',
      borderWidth:2
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
  },
  songControl:{
    flexDirection: 'row', 
    alignItems:'center'
  }
});