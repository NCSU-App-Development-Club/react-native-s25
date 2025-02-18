import Text from '../components/global/Text'
import ScreenView from '../components/global/ScreenView'
import BackLink from '../components/global/BackLink'
import {Pressable, View} from 'react-native';
import React, {useState} from 'react';

export default function Stats() {
  const [timesPressed, setTimesPressed] = useState(0);

  return (
    <ScreenView className="bg-[#4F4747] items-center justify-center border-4">
      <Text className="text-white text-center text-9xl font-bold p-20">
        {timesPressed}
      </Text>
      <View style={{ flexDirection: "row", gap: 40 }}>
        <Pressable onPress={() => {
                setTimesPressed(current => current - 1);
            }}>
            <Text className="rounded-full bg-[#a23232] text-black text-center text-8xl h-28 w-28 p-3">
            -
            </Text>
        </Pressable>
        <Pressable onPress={() => {
                setTimesPressed(current => current + 1);
            }}>
            <Text className="rounded-full bg-[#31a741] text-black text-center text-8xl h-28 w-28 p-3">
            +
            </Text>
        </Pressable>
      </View>
      <BackLink to="/" />
    </ScreenView>
  )
}
