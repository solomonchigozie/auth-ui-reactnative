import React from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import themeColors from '../theme'
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <StatusBar />
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">Lets Get Started</Text>
      </View>
      <View className="flex-row justify-center">
        <Image source={require("../assets/images/welcome.png")} 
        style={{width: 350, height:350}}
        />
      </View>
      <View className="space-y-6 my-5">
          <TouchableOpacity className="py-3 bg-red-400 mx-7 rounded-xl" onPress={() => navigation.navigate('Signup')}>
              <Text className="text-xl font-bold text-center text-gray-700">Sign Up</Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">Already Have an account  ?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text className="font-semibold text-red-400">Log In</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen
