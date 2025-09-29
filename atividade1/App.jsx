import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={{fontSize:50}}>Unidade N</Text>

      <Image src='https://images.steamusercontent.com/ugc/5818162108855090060/106E0CFBC7DAA423ED1C438657DF8E53252B3ED7/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' height={150} width={150}></Image>

      <Text style={{fontSize:50}}>Unidade J</Text>

      <Image src='https://static.wikia.nocookie.net/murder-drones/images/d/d1/J-Violence.png/revision/latest?cb=20241015060527' width={150} height={150}></Image>

      <Text style={{fontSize:50}}>Imagem 3</Text>

      <Image src='https://dk2dv4ezy246u.cloudfront.net/widgets/sSz2cDuoWoU_large.jpg' width={150} height={150}></Image>

      <Button title='Botão' onPress={()=>alert('Murder Drones.exe')}></Button>

      

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
