import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("")
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={newName => {
          if (newName.length > 0) {
            setName("Bem vindo " + newName)
          }
          else {
            setName("")
          }
        }}
      />
      <Text style={styles.texto}>{name}</Text>
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

