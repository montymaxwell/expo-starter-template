import { Stack, Link } from "expo-router"
import { View, Text } from "react-native"

function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className='flex-1 justify-center items-center'>
        <Text className='text-xl font-bold'>This screen doesn't exist.</Text>
        <Link href="/" className='mt-4 pt-4'>
          <Text className='text-base text-[#2e78b7]'>Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}

export default NotFoundScreen