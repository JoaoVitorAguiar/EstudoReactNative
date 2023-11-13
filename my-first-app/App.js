import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState("")
  const [name, setName] = useState("")
  function getName() {
    if (name === '') return ''
    else return 'Bem vindo ' + name
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={newInput => {
          setInput(newInput)
        }}
      />
      <Button title='Entrar' onPress={() => { setName(input); if (input === "") alert("Digite seu nome") }} />
      <Text style={styles.texto}>{getName()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 50,
    padding: 10,
    fontSize: 20
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
});

