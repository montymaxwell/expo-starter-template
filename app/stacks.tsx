import {
  Text,
  View
} from "react-native"
import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

function Stacks() {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ title: 'Stacks Route' }} />
      <View className='w-full h-full justify-center items-center'>
        <Text className="text-xl mb-5">This Project is using: </Text>
        <Text className='text-2xl font-bold text-slate-700'>Expo SDK 50 + Expo Router v3</Text>
        <Text className='text-2xl font-bold text-slate-700'>NativeWind v2</Text>
      </View>
    </SafeAreaView>
  )
}

export default Stacks