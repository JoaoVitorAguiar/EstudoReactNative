import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image style={styles.cronometro} source={require("./src/cronometro.png")} />

      <Text style={styles.timer}>0.0</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Começar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Zerar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cronometro: {
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 190,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 13
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
});
