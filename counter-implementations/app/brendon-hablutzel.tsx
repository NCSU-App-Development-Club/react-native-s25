import Text from '../components/global/Text'
import ScreenView from '../components/global/ScreenView'
import BackLink from '../components/global/BackLink'
import { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

// const GithubIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 50 48"
//     className={props.className}
//   >
//     <Path
//       stroke="#D9D9D9"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M18.603 38c-10.229 3-10.229-5-14.32-6m28.64 12v-7.74a6.6 6.6 0 0 0-.386-2.812 6.7 6.7 0 0 0-1.536-2.408c6.423-.7 13.175-3.08 13.175-14-.001-2.792-1.1-5.478-3.07-7.5A9.93 9.93 0 0 0 40.924 2s-2.414-.7-8 2.96a28 28 0 0 0-14.32 0C13.018 1.3 10.604 2 10.604 2a9.93 9.93 0 0 0-.184 7.54A10.75 10.75 0 0 0 7.35 17.1c0 10.84 6.751 13.22 13.175 14a6.7 6.7 0 0 0-1.523 2.38 6.6 6.6 0 0 0-.4 2.78V44"
//     ></Path>
//   </Svg>
// )

// const HomeIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 51 48"
//     className={props.className}
//   >
//     <Path
//       stroke="#D9D9D9"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M19.374 44V24H31.65v20M7.099 18 25.512 4l18.412 14v22c0 1.06-.431 2.078-1.199 2.828A4.14 4.14 0 0 1 39.832 44H11.191a4.14 4.14 0 0 1-2.893-1.172A3.96 3.96 0 0 1 7.099 40z"
//     ></Path>
//   </Svg>
// )

// const PlusIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 49 48"
//     className={props.className}
//   >
//     <Path
//       stroke="#D9D9D9"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M24.5 16v16m-8.167-8h16.334M10.208 6h28.584c2.255 0 4.083 1.79 4.083 4v28c0 2.21-1.828 4-4.083 4H10.208c-2.255 0-4.083-1.79-4.083-4V10c0-2.21 1.828-4 4.083-4"
//     ></Path>
//   </Svg>
// )

const Counter = ({ title }: { title: string }) => {
  const [count, setCount] = useState(0)

  return (
    <View className="bg-[#0056B8] p-8 m-2 max-w-72 max-h-72 w-[80vw] h-[80vw] rounded-2xl flex justify-between">
      <Text className="text-white text-center text-2xl">{title}</Text>
      <Text className="text-white text-center text-8xl font-bold p-5">
        {count}
      </Text>
      <View className="flex flex-row justify-between gap-6">
        <Pressable
          className={`bg-[#D9D9D9] rounded-md flex-grow w-[20%] select-none ${count === 0 ? 'brightness-75 hover:cursor-not-allowed' : ''}`}
          onPress={() => setCount(count - 1)}
          disabled={count === 0}
        >
          <Text className="text-[#0056B8] text-center text-5xl font-bold">
            -
          </Text>
        </Pressable>
        <Pressable
          className="bg-[#D9D9D9] rounded-md flex-grow w-[20%] select-none"
          onPress={() => setCount(count + 1)}
        >
          <Text className="text-[#0056B8] text-center text-5xl font-bold">
            +
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default function Archive() {
  const [counters, setCounters] = useState([
    { title: 'My First Counter' },
    { title: 'Untitled Counter' },
    { title: 'Another counter' },
  ])

  return (
    <ScreenView className="items-center justify-center border-4 bg-[#262626]">
      <StatusBar style={'dark'} />
      <Text className="text-[#D9D9D9] text-4xl font-bold py-4">
        Counter App
      </Text>
      <FlatList
        data={counters}
        renderItem={({ item: { title } }) => <Counter title={title} />}
        // https://stackoverflow.com/questions/46196242/react-native-flatlist-last-item-visibility-issue
        contentContainerStyle={{ paddingBottom: 150 }}
      />
      {/* No icons because using svgs in react native 
      requires https://docs.expo.dev/versions/latest/sdk/svg/ */}
      {/* <View className="w-full bg-gray-500 h-12 flex flex-row justify-center">
        <View className="flex flex-row justify-between w-[90vw] max-w-80 p-2">
          <Text>
            <GithubIcon className="h-9 w-9" />
          </Text>
          <Text>
            <HomeIcon className="h-9 w-9" />
          </Text>
          <Text>
            <Pressable
              onPress={() => {
                setCounters([
                  ...counters,
                  {
                    title: `Counter #${counters.length + 1}`,
                  },
                ])
              }}
            >
              <PlusIcon className="h-9 w-9" />
            </Pressable>
          </Text>
        </View>
      </View> */}
      <BackLink to="/" />
    </ScreenView>
  )
}
