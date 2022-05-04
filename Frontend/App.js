import React, {useState, useEffect} from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import meme from "./assets/meme.jpg";
import axios from 'axios';


function SettingsScreen({navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>'Chilll'</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>'Khám phá'</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
           id: 2,
           name: 'tu home qua nha'
          })
        }
      />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root({navigation, route}) {

  return (
    <Tab.Navigator>
      {console.log(route.params.id)}
      <Tab.Screen  name="Kham pha" component={ProfileScreen}  options={{
        
      tabBarLabel: 'Khám phá',
      tabBarIcon: ({size,focused,color}) => {
        return (
          <Image
            style={{ width: size, height: size }}
            // source={meme}
            source = {{uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'}}
          />
        );
      },
    }} />
      <Tab.Screen name="Chill" component={SettingsScreen} options={{
        
        tabBarLabel: 'Chill',
        tabBarIcon: ({size,focused,color}) => {
          return (
            <Image
              style={{ width: size }}
              // source={meme}
              source = {{uri: 'https://localhost:44332/public/assets/img/stop.png'}}
            />
          );
        },
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:44332/Home/Testt', {
    })
    .then(function (response) {
      console.log(response);
      setData(response)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
  },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Root" component={Root} initialParams={{
           id: 1,
           name: 'tu home qua nha'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
