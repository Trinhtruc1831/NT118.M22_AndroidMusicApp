import React, {useEffect, useRef, useState} from 'react';

import {
    SafeAreaView, 
    FlatList, 
    ImageBackground, 
    Image, 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TouchableOpacity,
    Animated,
} from 'react-native';
import TrackPlayer,{
    Capability,
    Event,
    RepeatMode,
    State,
    usePlaybackState,
    useProgress,
    useTrackPlayerEvents,
} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

import background from "../assets/icon/background.png";
import songs from "../model/data";

const {width, height} = Dimensions.get('window');




export default function Lismusic({ navigation }) {
  let rotateValueHolder = new Animated.Value(0);
 
  const startImageRotateFunction = () => {
      rotateValueHolder.setValue(0);
      Animated.loop(
          Animated.timing(rotateValueHolder, {
              toValue: 1,
              duration: 3000,
              easing: Easing.linear,
              useNativeDriver: false,
              })
      ).start(() => startImageRotateFunction());
  };
  
  const rotateData = rotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
  });
  //-----------------
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] =useState(0);
  const [initialPlay, setInitialPlay] =useState(1);
  const [repeatMode, setRepeatMode]=useState('off');
  const [trackArtwork, setTrackArtwork] =useState();
  const [trackArtist, setTrackArtist] =useState();
  const [trackTitle, setTrackTitle] =useState();
  const songSlider = useRef(null);
  
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event =>{
      if(event.type === Event.PlaybackTrackChanged && event.nextTrack!= null){
          const track = await TrackPlayer.getTrack(event.nextTrack);
          const {Title, artwork, artist} = track;
          setTrackTitle(Title);
          setTrackArtwork(artwork);
          setTrackArtist(artist);
      }
  })
  const repeatIcon =() =>{
      if(repeatMode == 'off'){
          return 'repeat-off';
      }
      if(repeatMode == 'track'){
          return 'repeat-once';
      }
      if(repeatMode == 'repeat'){
          return 'repeat';
      }
  }
  const changeRepeatMode = () =>{
      if(repeatMode == 'off'){
          TrackPlayer.setRepeatMode(RepeatMode.Track);
          setRepeatMode('track')
      }
      if(repeatMode == 'track'){
          TrackPlayer.setRepeatMode(RepeatMode.Queue);
          setRepeatMode('repeat')
      }
      if(repeatMode == 'repeat'){
          TrackPlayer.setRepeatMode(RepeatMode.Off);
          setRepeatMode('off')
      }
  }
  const skipTo = async (trackId) => {
      await TrackPlayer.skip(trackId);
      setInitialPlay(1);
  }
  useEffect(()=>{
      scrollX.addListener(({value})=>{
          const index = Math.round(value/width);
          skipTo(index);
          setSongIndex(index);
      });
      TrackPlayer.setupPlayer().then(async()=>{
          console.log('Player Ready!!');
          await TrackPlayer.add(songs);
          
      }

      );
      return()=>{
          scrollX.removeAllListeners();
      }
  },[])
  const skipToNext =()=>{
      songSlider.current.scrollToOffset({
          offset: (songIndex + 1)*width,
      })
  }
  const togglePlayback = async(playbackState)=>{
      if(initialPlay==1){
          TrackPlayer.play();
          setInitialPlay(0);
      }
      else{
          const currentTrack = await TrackPlayer.getCurrentTrack();
          console.log(currentTrack);
          if(currentTrack != null){
              if(playbackState == State.Paused){
                  await TrackPlayer.play();
                  console.log("play nha!");
                  console.log(playbackState);
                  console.log("---");
              }else{
                  await TrackPlayer.pause();
                  console.log("pause nha!");
                  console.log(playbackState);
                  console.log("---");
              }
          }
      }
      
      
  }
  const skipToPrevious = ()=>{
      songSlider.current.scrollToOffset({
          offset: (songIndex - 1)*width,
      })
  }
  const renderSongs = ({index, item}) =>{
      return(
          <Animated.View style ={{
              alignSelf:'center',
              width: width,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom:15
             
          }}>
              <View style = {styles.artworkWrapper}>
                  <Animated.Image 
                      source = {trackArtwork}
                      style = {styles.artworkImg}
                  />
              </View>
          </Animated.View>
      );
  }
  return (
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
          <SafeAreaView style = {styles.container}>
              <View style ={styles.mainContainer}>
                  <View style ={{width:width }}>
                      <Animated.FlatList
                      ref={songSlider}
                      data={songs}
                      renderItem={renderSongs}
                      keyExtractor ={(item) => item.id}
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator = {false}
                      scrollEventThrottle={16}
                      onScroll = {Animated.event(
                          [{nativeEvent:{
                              contentOffset:{x:scrollX}
                          }}],
                          {useNativeDriver: true}
                      )}
                  />
                  </View>
                  
                  <View>
                      <Text style={styles.title}>{trackTitle}</Text>
                      <Text style={styles.artist}>{trackArtist}</Text>
                  </View>
                  <View style ={{alignItems:'center'}}>
                      <Slider 
                          style = {styles.progressContainer}
                          value={progress.position/200}
                          minimumvalue = {0}
                          maximumvalue = {progress.duration}
                          thumbTintColor = "#7A6447"
                          minimumTrackTintColor = "#7A6447"
                          maximumTrackTintColor = "#C4C4C4"
                          onSlidingComplete={ async(value)=>{
                              await TrackPlayer.seekTo(value);
                          }}
                      />
                      <View style={styles.progressLabelContainer}>
                          <Text style={styles.progressLabelTxt}>
                              {new Date(progress.position*1000).toISOString().substr(14,5)}
                          </Text>
                          <Text style={styles.progressLabelTxt}>
                              {new Date((progress.duration-progress.position)*1000).toISOString().substr(14,5)}
                          </Text>
                      </View>
                      <View style={styles.musicControlls}>
                          <TouchableOpacity onPress={changeRepeatMode}>
                              <MaterialCommunityIcons name={`${repeatIcon()}`} size={30} color="#7A6447" style={{marginTop:13}}/> 
                          </TouchableOpacity>
                          <TouchableOpacity onPress={skipToPrevious}>
                              <Ionicons name="play-skip-back-outline" size={35} color="#7A6447" style={{marginTop:10}}/> 
                          </TouchableOpacity>  
                          <TouchableOpacity onPress={()=>togglePlayback(playbackState)}>
                              <Ionicons name= {playbackState === State.Playing? "ios-pause-circle":"ios-play-circle"} size={55} color="#7A6447"/> 
                          </TouchableOpacity>
                          <TouchableOpacity onPress={skipToNext}>
                              <Ionicons name="play-skip-forward-outline" size={35} color="#7A6447" style={{marginTop:10}}/> 
                          </TouchableOpacity> 
                          <TouchableOpacity onPress={()=>{}}>
                              <Ionicons name="shuffle-outline" size={30} color="#7A6447" style={{marginTop:13}}/> 
                          </TouchableOpacity>                       
                      </View>
                  </View>
              </View>
          </SafeAreaView>
      </ImageBackground>
      
      
  );
}
const styles = StyleSheet.create({
  container: {
      flex:1,

  },
  mainContainer:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  bottomContainer:{
      width:width,
      alignItems:'center',
      paddingVertical: 15
  },
  bottomControls:{
      flexDirection:'row',
      justifyContent:'space-between', 
      width:'80%'
  },
  musicControlls:{
      flexDirection:'row',
      width:'70%',
      paddingLeft: '5%',
      justifyContent:'space-between', 
      marginTop: 10,
  },
  artworkWrapper:{
      width:250,
      height:250,
      marginBottom:10,
  },
  artworkImg:{
      width:'100%',
      height:'100%',
      borderRadius:180,
      borderColor: '#7A6447',
      borderWidth: 5,
      // transform: [{rotate: rotateData}]
  },
  title:{
      fontSize: 18,
      fontWeight: '900',
      textAlign:'center',
      color:'#7B6242'
  },
  artist:{
      fontSize: 16,
      fontWeight:'200',
      textAlign:'center',
      color:'#7B6242'
  },
  image: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
  },
  progressContainer:{
      width:300,
      height:25,
      marginTop: 10,
      flexDirection: 'row'
  },
  progressLabelContainer:{
      width:273,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  progressLabelTxt:{
      color:'#C4C4C4'
  },
});