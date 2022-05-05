import { View, Text, Button } from 'react-native'
import React from 'react'


export default function login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Đây là trang login!</Text>
            {
                (()=>{
                    if (true) {
                        return (
                            <Button
                            title="Đăng Nhập"
                            onPress={() =>
                              navigation.navigate('botnavi')
                            }
                          />
                          
                        );
                    }
                })()
            } 
         <Button
            title="Chưa có tài khoản?"
            onPress={() =>
              navigation.navigate('signup')
            }
          />
        </View>
      );
}