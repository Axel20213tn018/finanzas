import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { initializeApp } from "firebase/app";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDVnOc6RZCiAKDQaWUVXYpN9zUwQYNdK-w",
    authDomain: "finanzas-e70ee.firebaseapp.com",
    projectId: "finanzas-e70ee",
    storageBucket: "finanzas-e70ee.appspot.com",
    messagingSenderId: "935560257918",
    appId: "1:935560257918:web:af9ca49da4fc6baba9932f"
  };

  const app = initializeApp(firebaseConfig);
  
  return (
    <View style={styles.container}>
      <Text>Hola Axel Hernandez</Text>
      <Button title="Solid" />
      <StatusBar style="auto" />
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
});
