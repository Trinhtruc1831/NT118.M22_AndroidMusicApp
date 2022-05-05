import { View, Text, Button } from 'react-native'
import React from 'react'

export default function signup({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Đây là trang đăng ký!</Text>
          <Button
            title="Đăng Ký"
            // onPress={() =>
            //   navigation.navigate('Home')
            // }
          />
          <Button
            title="Back"
            onPress={() =>
              navigation.navigate('login')
            }
            />
        </View>
        
      );
}