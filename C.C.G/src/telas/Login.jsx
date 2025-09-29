import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import imagem from '../img/ccgLogo.png';

export default function Tela() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    let usuarios = [{nome:"Arima",senha:"123"}];

    function Procurar() {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nome === usuario && usuarios[i].senha === senha) {
                alert("Bem-vindo " + usuarios[i].nome);
                return;
            }
        }
        alert("Usuário não encontrado!");
    }

    return (
        <View style={Fundo.container}>
            <Image source={imagem} />

            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsuario}
                value={usuario}
            />

            <Text>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
            />

            <Button title='Login' onPress={Procurar} />
        </View>
    );
}

const Fundo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3498db",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: 400,
        padding: 10,
        borderWidth: 1,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor:'white'
    }
});
