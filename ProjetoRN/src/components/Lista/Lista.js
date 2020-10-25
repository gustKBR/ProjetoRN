import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista.areaItens}>

            <LinearGradient colors={['#000000', '#000000', '#000000']}>
                <Text style={estiloLista.itemTitulo}> {item.nome} </Text>
                <Text style={estiloLista.itemSubTitulo}> {item.modelo} ({item.preco}) </Text>
            </LinearGradient>

            <LinearGradient colors={['#000000', '#000000', '#000000']}>
            <Image style={estiloLista.itemFoto} source={item.foto} resizeMode='contain'/>
            </LinearGradient>

        </View>
    );

}

export default Lista; 