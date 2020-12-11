import React, { useState, useEffect } from 'react';
import { StatusBar, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import estiloPerfil from './estiloPerfil';
import { MaterialIcons } from '@expo/vector-icons';
import { AlunoFB } from "../../firebase/alunoFB";
import ListaAlunos from "../../components/ListaAlunos/ListaAlunos";

function Perfil({ navigation }) {

    const [perfil, setPerfil] = useState([]);
    
    const alunoFb = new AlunoFB();

    useEffect(() => {
        alunoFb.pegarColecao()
        .orderBy('nome')
        .onSnapshot((query) => {
            const items = [];
            query.forEach((doc) => {
                items.push({...doc.data(), id: doc.id});
            });
            setPerfil(items);
        });
    },[]);

    const adicionar = () => {
        navigation.navigate('Item', {item: {}, operacao: 'adicionar'})
    }
    
    const editar = (item) => {
        navigation.navigate('Item', {item: item, operacao: 'editar'})
    }
    
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloPerfil.container}>
            <View style={estiloPerfil.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name='arrow-back' size={24} color='black'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name='add' size={24} color='black' />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:"center"}}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={perfil}
                    renderItem={ ({item}) => 
                    <ListaAlunos data={item} detalhe={() => editar(item)} />} />
            </View>
        </View>
    )
}

export default Perfil;