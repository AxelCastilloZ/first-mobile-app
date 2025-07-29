
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
 
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export  function Main() {
  const [games, setGames] = useState([]);
  const insets=useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

 
  return (
    <>
    <View style={{paddingTop: insets.top,paddingBottom: insets.bottom}}>
         <ScrollView>
     {games.map((game) => (
  <View key={game.slug} style={styles.card}>
    {typeof game.image === "string" && (
      <Image
        source={{ uri: game.image }}
        style={{
          width: 107,
          height: 147,
          borderRadius: 10,
        }}
      />
    )}
  </View>
))}
</ScrollView>
    </View>
 


    </>
  );
}

const styles = StyleSheet.create({

  card: {
    marginVertical: 10,
    marginBottom:42
  },
});
