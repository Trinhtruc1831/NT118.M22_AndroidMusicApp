
import { View, Text, Button } from 'react-native'
import React from 'react'


export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Đây là trang chủ!!</Text>
            <Button
            title="Logout"
            onPress={() =>
                navigation.navigate('Login')
            }
            />
        </View>
      );
}
