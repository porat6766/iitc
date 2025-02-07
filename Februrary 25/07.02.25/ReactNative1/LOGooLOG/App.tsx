import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from './utils/tailwind';

export default function App() {
  return (
    <View style={tw`color-red-500`}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}