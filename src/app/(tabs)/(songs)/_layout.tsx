import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'

const SongsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerTitle: 'Songs' }}
        />
      </Stack>
    </View>
  )
}

export default SongsScreenLayout
