import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [saldo, setSaldo] = useState(100000);
  return (
    <View style={styles.container}>
      <Logo url="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2-1.png" />
      <Text style={{ color: '#fff', fontSize: 20 }} >Olá Emanuel, seu saldo:</Text>
      <Text style={{ color: '#fff', padding: 10, fontSize: 18 }}>R${saldo},00</Text>
      <Button
        onPress={() => setSaldo(saldo + 1000)}
        title="Pix de R$ 1000,00"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8303D2',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
const Logo = props => {
  return (

    <Image
      source={{ uri: props.url }}
      style={{ width: 250, height: 150 }}
    />
  );
};

