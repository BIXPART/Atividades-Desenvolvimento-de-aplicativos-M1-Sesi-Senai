import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert, Image } from 'react-native';
import SubTitulo from './src/componentes/componentes'

export default function App() {

  const [recado, setRecado] = useState('');
  const [listaRecados, setListaRecados] = useState([])

  function enviar() {
    if (recado === "") {
      alert("escreva algo")
      return
    }
    Alert.alert("obrigado pela sua mensagem")
    setListaRecados([...listaRecados, recado])
    setRecado('')
  }


  return (
    <View style={styles.container}>
      <SubTitulo />

      <ScrollView>
        <Text style={{ textAlign: 'center' }}>A Semana da Inclusão da Pessoa com Deficiência é um evento voltado para a promoção da conscientização, respeito e valorização da diversidade, com foco na inclusão social e dos direitos das pessoas com deficiência. Durante essa semana, são realizadas atividades como palestras, oficinas, debates, apresentações culturais e ações educativas em escolas, empresas e instituições públicas.
          O principal objetivo é combater o preconceito, promover a acessibilidade e garantir a participação plena e efetiva das pessoas com deficiência na sociedade. A iniciativa também visa divulgar leis e políticas públicas que asseguram esses direitos, incentivando a construção de uma sociedade mais justa, igualitária e inclusiva.
          Se quiser, posso adaptar essa síntese para uso escolar, acadêmico ou institucional.</Text>
        <Image source={require('./src/imagens/imagem1.png')}
          style={{ height: 500, width: 400 }}></Image>
        <Text style={{ fontSize: 21,marginBottom:20,fontWeight:'bold',textAlign:'center' }}>Conscientização sobre as Pessoas Mudas</Text>
        <Text style={{textAlign:'center'}}>A conscientização sobre as pessoas mudas é essencial para promover uma sociedade mais inclusiva e respeitosa. Embora a expressão “pessoas mudas” seja comum, é importante lembrar que muitas delas possuem habilidades comunicativas, como a linguagem de sinais, e que a falta da fala não significa falta de inteligência ou capacidade.
          Muitas vezes, a sociedade negligencia as necessidades e os direitos dessas pessoas, criando barreiras que dificultam seu acesso à educação, ao trabalho e à participação social plena. A falta de compreensão e de adaptação por parte das instituições e indivíduos gera isolamento e exclusão.
          Por isso, é fundamental investir em educação e sensibilização para que todos possam entender a importância da comunicação acessível. Incentivar o aprendizado da língua de sinais, respeitar os modos alternativos de comunicação e combater o preconceito são passos essenciais para garantir a inclusão e o respeito à diversidade.
          Reconhecer o valor e a capacidade das pessoas mudas é um passo para construir um mundo mais justo, onde todos possam se expressar e ser ouvidos, independentemente das suas particularidades.
        </Text>
      </ScrollView>
      <Text style={{ fontSize: 20,fontWeight:'bold' }}>Escreva uma mensagem de Motivação</Text>
      < TextInput style={styles.Aparecer} onChangeText={setRecado} value={recado}></TextInput>
      <View style={{ height: 100 }}>
        <ScrollView>
          {
            listaRecados && listaRecados.map(recado => {
              return (
                <Text>{recado}</Text>
              )
            })
          }
        </ScrollView>
      </View>
      <Button onPress={enviar} title='Enviar'></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor:'cyan'
  },
  Aparecer: {
    borderRadius: 15,
    width: 300,
    backgroundColor: 'white'
  }
});
