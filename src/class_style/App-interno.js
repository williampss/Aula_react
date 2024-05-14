import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View hello={hello.container}>
    <Text hello={hello.text} > BEYOND!</Text>
    <Text>Hello World!</Text>
  </View>
  );
}

const hello = StyleSheet.create({
  container:{
    flex: 1,
    display: "center",
    flexDirection: "column",
    justifyContent: "center",
    alingItems: "center",
    backgroundColor: "blue",
  },
  text:{
    color: "#ffff",
  },

})