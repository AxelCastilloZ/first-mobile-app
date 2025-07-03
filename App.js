import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,Button,TouchableHighlight, Alert} from 'react-native';

const icon =require('./assets/icon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
     
      <TouchableHighlight
      underlayColor={"#09F"}
      onPress={()=> alert('LOL')}
      style={{width:200,height:200,backgroundColor:'red',borderRadius:200,justifyContent:'center',alignItems:'center'
      }}
      >

        <Text style={{color:'white'}}>Pulsa aqui</Text>

      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
