import { useFonts } from 'expo-font'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NativeWindStyleSheet } from 'nativewind'

NativeWindStyleSheet.setOutput({
  default: "native",
});

function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require('assets/fonts/RobotoFlex.ttf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }

  }, [loaded])

  if (!loaded) return null

  return (
    <SafeAreaProvider className='w-full h-full'>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  )
}

export default RootLayout