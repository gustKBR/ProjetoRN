import React from 'react';
import { StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import estiloPerfil from './estiloPerfil';
import { MaterialIcons } from '@expo/vector-icons';

function Perfil({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloPerfil.container}>
            <View style={estiloPerfil.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name='arrow-back' size={24} color='black'/>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:"center"}}>
                <View style={{height: 200, width: "100%", flexDirection: "row", alignItems: 'center'}}>
                    <Image source={require('../../../assets/Imagens/eu.jpeg')} style={{height: 175, width: 175, borderRadius: 100, marginHorizontal: 20}} />
                    <Text style={{fontFamily: "Trebuchet MS", fontSize: 14, fontWeight: '500'}}>Gustavo Cabral Correia{'\n'}2ºMDS-A(A)</Text>
                </View>

                <View style={{height: 200, width: "100%", flexDirection: "row", alignItems: 'center'}}>
                    <Image source={require('../../../assets/Imagens/eltu.jpeg')} style={{height: 175, width: 175, borderRadius: 100, marginHorizontal: 20}} />
                    <Text style={{fontFamily: "Trebuchet MS", fontSize: 14, fontWeight: '500'}}>Elthon dos Santos Migotto{'\n'}2ºMDS-A(A)</Text>
                </View>
            </View>
        </View>
    )
}

export default Perfil;