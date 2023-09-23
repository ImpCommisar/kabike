import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export default function App() {
  return (
    <View style={styles.container}>
<Image source={{uri: 'https://i.imgur.com/zymKpUq.png'}} style={{ width: 152, height: 188 }} />
      <Text style={styles.Kabike_Text}> Kabike</Text>
      <ProgressBar progress={0} width={200} height={10} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Kabike_Text:{
  textShadowColor: 'rgba(0, 0, 0, 0.25)',
  textShadowOffset: {width: 0, height: 4},
  textShadowRadius: 4,
    marginTop:10,
    color:'#FFFFFF',
    fontSize:30,
    fontWeight: 'bold',

  },
  container: {
    flex: 1,
    backgroundColor: '#FFDC23',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
