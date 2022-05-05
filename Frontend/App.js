import React, {useState, useEffect} from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import login from "./screens/login";
import signup from "./screens/signup";
import botnavi from "./screens/botnavi";


// function SettingsScreen({navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>'Chilll'</Text>
//     </View>
//   );
// }

// function ProfileScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>'Khám phá'</Text>
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Settings"
//         onPress={() =>
//           navigation.navigate('Root', {
//            id: 2,
//            name: 'tu home qua nha'
//           })
//         }
//       />
//     </View>
//   );
// }

// function login({ navigation }) {
//   return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Đây là trang login!</Text>
//         <Button
//           title="Đăng Nhập"
//           // onPress={() =>
//           //   navigation.navigate('Home')
//           // }
//         />
//         <Button
//           title="Chưa có tài khoản?"
//           onPress={() =>
//             navigation.navigate('signup')
//           }
//         />
//       </View>
//     );
// }

// function signup({ navigation }) {
//   return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Đây là trang đăng ký!</Text>
//         <Button
//           title="Đăng Ký"
//           // onPress={() =>
//           //   navigation.navigate('Home')
//           // }
//         />
//       </View>
//     );
// }

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function Root({navigation, route}) {

//   return (
//     <Tab.Navigator>
//       {console.log(route.params.id)}
//       <Tab.Screen  name="Kham pha" component={ProfileScreen}  options={{
        
//       tabBarLabel: 'Khám phá',
//       tabBarIcon: ({size,focused,color}) => {
//         return (
//           <Image
//             style={{ width: size, height: size }}
//             // source={meme}
//             source = {{uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'}}
//           />
//         );
//       },
//     }} />
//       <Tab.Screen name="Chill" component={SettingsScreen} options={{
        
//         tabBarLabel: 'Chill',
//         tabBarIcon: ({size,focused,color}) => {
//           return (
//             <Image
//               style={{ width: size }}
//               // source={meme}
//               source = {{uri: 'https://localhost:44332/public/assets/img/stop.png'}}
//             />
//           );
//         },
//       }} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        useLegacyImplementation
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >        
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="botnavi" component={botnavi} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}