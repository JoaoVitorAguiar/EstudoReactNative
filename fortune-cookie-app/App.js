import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
}
export default function App() {
  const frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.']

  const [frase, setFrase] = useState('');
  const [urlImg, setUrlImg] = useState(require('./src/biscoito.png'));

  function gerarFrase() {
    setUrlImg(require('./src/biscoitoAberto.png'))
    setFrase('" ' + frases.sample() + ' "')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={urlImg} />

      <Text style={styles.textoFrase} >{frase}</Text>

      <TouchableOpacity style={styles.botao} onPress={() => { gerarFrase() }}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Abrir biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});
