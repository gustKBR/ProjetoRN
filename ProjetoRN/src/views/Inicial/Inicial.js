import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name='menu-fold' size={24} color='#23B14D' />
                </TouchableOpacity>
            </View>

            <ImageBackground source={require('../../../assets/Imagens/galaxia.jpg')} style={estiloInicial.fundo}>

                <TouchableOpacity style={{alignItems: "center"}} onPress={abrirColecao}>
                    <ImageBackground source={require('../../../assets/Imagens/bau.jpg')} style={estiloInicial.botaoBackground} />
                    <Text style={estiloInicial.botaoTexto}>Podcasts</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Inicial;