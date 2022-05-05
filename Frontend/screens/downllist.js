import { View, Text, Button } from 'react-native'
import React from 'react'


export default function downllist({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Đây là trang để xem danh sách các bài hát đã tải xuống!!</Text>
        </View>
      );
}