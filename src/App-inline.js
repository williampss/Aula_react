import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      display: "flex", 
      flexdirectio: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor: "#0000",
       }}
       >
      <Text
       style={{
        fontSize: 50,
        fontWeigth: "bold",
        color: "red",
      }}
      >
      BEYOND BIRTHDAY!
      </Text>
      <Text>Hello World!</Text>
  
    </View>

  )};
