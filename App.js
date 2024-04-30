import { Text,View } from 'react-native';
import { hello } from './App-externo';

export default function App() {
  return (
    <View hello={hello.container}>
    <Text hello={hello.text} > BEYOND!</Text>
    <Text>Hello World!</Text>
  </View>
  );
};