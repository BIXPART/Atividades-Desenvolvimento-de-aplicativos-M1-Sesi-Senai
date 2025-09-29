import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LimitedeCaracteres(props){

    if(props.textoAtual > props.limiteMaximo){
        return(
        <Text style={{color:'red',}}>{props.textoAtual} / {props.limiteMaximo}</Text>
    )}else{
        return (
            <Text style={{color:'black'}}>{props.textoAtual} / {props.limiteMaximo}</Text>
    )}
}