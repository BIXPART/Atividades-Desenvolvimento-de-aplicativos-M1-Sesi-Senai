import { StyleSheet, Text, View, Image, Button } from 'react-native';

function apertar0Botao() {
  console.log('apertei o botão 2')
}
//space-around space-between
export default function App() {
  return (
    <View style={{ alignContent: 'center', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>



      <Text>imagem 1</Text>
      <Image src='https://proex.ufpa.br/images/galeria_em_artigos/image03_grd.png' width={200} height={200}></Image>

      <Text>imagem 2</Text>
      <Image src='https://proex.ufpa.br/images/galeria_em_artigos/image03_grd.png' width={200} height={200}></Image>

      <Text>imagem 3</Text>      <Image src='https://proex.ufpa.br/images/galeria_em_artigos/image03_grd.png' width={200} height={200}></Image>
      <Button title='clique aqui 1'
        onPress={() => alert('Você apertou o botão')}></Button>

      <Button title='clique aqui 2' onPress={apertar0Botao}></Button>
    </View>
  );
}

//3 textos 2 imagens e 1 botão

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
