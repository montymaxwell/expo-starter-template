import {
  Text,
  View
} from "react-native"
import { Link, Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

function Index() {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ title: 'Index Route' }} />
      <View className='w-full h-full justify-center items-center'>
        <Text className='text-2xl font-bold'>Montys' Expo Starter App</Text>
        <Text className='text-lg'>A Simple Expo App Starter Project</Text>
        <Link
          href={'/stacks'}
          className='text-base my-5 underline text-blue-400'>
          Go to Stacks Route
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Index