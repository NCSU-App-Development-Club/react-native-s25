import Text from '../components/global/Text'
import ScreenView from '../components/global/ScreenView'
import { Link } from 'expo-router'

export default function App() {
  return (
    <ScreenView className="items-center justify-center">
      <Text className="font-bold text-5xl m-4 mb-8">NCSUGuessr</Text>
      <ScreenLink link="/brendon-hablutzel">Brendon Hablutzel</ScreenLink>
      <ScreenLink link="/evan-schofield">Evan Schofield</ScreenLink>
      <ScreenLink link="/griffin-tomaszewski">Griffin Tomaszewski</ScreenLink>
      <ScreenLink link="/joy-niranjan">Joy Niranjan</ScreenLink>
      <ScreenLink link="/logan-crisp">Logan Crisp</ScreenLink>
      <ScreenLink link="/muzamani-gausi">Muzamani Gausi</ScreenLink>
      <ScreenLink link="/neil-sood">Neil Sood</ScreenLink>
      <ScreenLink link="/nirvan-anumandla">Nirvan Anumandla</ScreenLink>
      <ScreenLink link="/nithya-janapati">Nithya Janapati</ScreenLink>
      <ScreenLink link="/parth-patel">Parth Patel</ScreenLink>
      <ScreenLink link="/siri-mandava">Siri Mandava</ScreenLink>
      <ScreenLink link="/suchir-madap">Suchir Madap</ScreenLink>
      <ScreenLink link="/tyler-davis">Tyler Davis</ScreenLink>
      <ScreenLink link="/tyler-swanson">Tyler Swanson</ScreenLink>
    </ScreenView>
  )
}

function ScreenLink({
  link,
  children,
}: {
  link: string
  children: React.ReactNode
}) {
  return (
    <Link
      className="rounded bg-ncsured w-52 p-1.5 m-1.5 text-center text-white font-bold"
      href={link}
    >
      {children}
    </Link>
  )
}
