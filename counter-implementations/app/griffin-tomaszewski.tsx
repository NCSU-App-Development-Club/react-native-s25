import Text from '../components/global/Text'
import { useState } from 'react'
import { Pressable } from 'react-native'
import { View } from 'react-native'
import ScreenView from '../components/global/ScreenView'
import BackLink from '../components/global/BackLink'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <View className="w-full flex items-center">
      <Text className="text-4xl font-bold my-8">
        {count}
      </Text>
      <View className="flex-row w-full justify-evenly mt-auto mb-8">
        <Pressable 
          className="bg-purple-500 w-24 h-24 rounded-full items-center justify-center"
          onPress={() => setCount(count - 1)}
        >
          <Text className="text-white text-4xl font-bold">
            -
          </Text>
        </Pressable>
        <Pressable 
          className="bg-purple-500 w-24 h-24 rounded-full items-center justify-center"
          onPress={() => setCount(count + 1)}
        >
          <Text className="text-white text-4xl font-bold">
            +
          </Text>
        </Pressable>
      </View>
    </View>
  )
}


export default function Stats() {
  return (
    <ScreenView className="items-center justify-center border-4">
      <Text>My Counter App Is Right Here</Text>
      <Counter />
      <BackLink to="/" />
    </ScreenView>
  )
}
