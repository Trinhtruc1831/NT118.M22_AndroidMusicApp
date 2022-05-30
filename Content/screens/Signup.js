import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Signup({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Đây là trang đăng ký!</Text>
          <Button
            title="Đăng Ký"
          />
          <Button
            title="Back"
            onPress={() =>
              navigation.navigate('Login')
            }
            />
        </View>
        
      );
}
