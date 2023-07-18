import React from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import themeColors from '../theme'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View  className="flex-1" style={{backgroundColor : themeColors.bg}}>
      <SafeAreaView className="flex">
        <StatusBar />
        <View className="flex-row justify-start">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="bg-red-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 my-1">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image 
            source={require("../assets/images/signup.png")}
            style={{width : 165, height : 165}}
          />
        </View>

      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius:50, borderTopRightRadius:50}}
      >
        <View className="form space-y-2">

         <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput 
            className="p-4 bg-gray-100 mb-3 text-gray-700 rounded-2xl"
            placeholder='Enter Full Name'
          />
          
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput 
            className="p-4 bg-gray-100 mb-3 text-gray-700 rounded-2xl"
            placeholder='Enter Email'
          />

          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput 
            className="p-4 bg-gray-100 mb-3 text-gray-700 rounded-2xl"
            placeholder='Enter Password'
            secureTextEntry
          />

        <TouchableOpacity className="py-3 bg-red-400 rounded-xl">
          <Text className="font-xl font-bold text-center text-gray-700">Sign Up</Text>
        </TouchableOpacity>
          
        </View>

        <Text className="text-xl font-bold text-gray-700 text-center py-5 ">Or</Text>

        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl ">
            <Image source={require("../assets/images/google.png")}  className="w-10 h-10"/>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl ">
            <Image source={require("../assets/images/apple.png")}  className="w-10 h-10"/>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl ">
            <Image source={require("../assets/images/facebook.png")}  className="w-10 h-10"/>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold ">Already Have an Account ? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text className="font-semibold text-red-500">Sign Up</Text>
            </TouchableOpacity>
          </View>

      </View>

    </View>

  )
}

export default SignUpScreen
