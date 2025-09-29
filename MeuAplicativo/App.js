import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Input, TextInput, Modal,TouchableOpacity,KeyboardAvoidingView,Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Clique no botão abaixo</Text>
      <Button title='Clique aquiu' onPress={()=>{ alert("escreva algo")}}></Button>
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
