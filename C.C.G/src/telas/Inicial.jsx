import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Procurado1 from '../img/pro1.png'

export default function Inicial({ navigation }) {
    return (
        <View>
            <Button
                
                title='Entrar'
                onPress={() => navigation.navigate('Login')}
            />
            <Text style={{}}>Procurados:</Text>
            <Image
            style={{alignItems:'center'}}
            source={Procurado1}
            />



        </View>
    )
}