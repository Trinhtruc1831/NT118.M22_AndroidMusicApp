import { View, Text, Button } from 'react-native'
import React from 'react'


export default function favlist({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Đây là trang để xem danh sách các bài hát yêu thích!!</Text>
        </View>
      );
}