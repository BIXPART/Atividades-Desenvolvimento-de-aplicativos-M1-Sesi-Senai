import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import VerificarTexto from '../componentes/LimitedeCaracteres'

export default function pagina1() {


    const [feedback, setFeedback] = useState('');

    function carregarFeddback(){
        if(feedback.length > 0 ){
            Alert.alert('obrigado!','Obrigado por seu feedback!')
            setFeedback('')
        }
    }

    return (

        <View style={{  }}>
            <Text style={{margin:50,}}>Deixe seu feedback</Text>
            <TextInput style={{borderWidth: 3,borderRadius:15,borderColor:'gray'}} multiline={true} placeholder={'Digite aqui'} onChangeText={setFeedback} ></TextInput>
            <VerificarTexto textoAtual={feedback.length} limiteMaximo={20}/>
            <Button title='Enviar FeedBack' onPress={carregarFeddback} ></Button>

        </View>



    )



}