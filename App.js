import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
 
} from "react-native";
import Constants from 'expo-constants';
import { getLatestGames } from "./lib/metacritic";
import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";



export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

 
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <StatusBar style="light" />
       <Main/>
    </View>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
   paddingHorizontal: 12,
  },
 
});
