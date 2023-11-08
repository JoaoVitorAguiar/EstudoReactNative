import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2-1.png" }}
        style={{ width: 250, height: 150 }}
      />
      <Text style={{ color: '#fff' }} >Olá Cintia, seu saldo:</Text>
      <Text style={{ color: '#fff' }}>R$ 100.000,00</Text>
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
