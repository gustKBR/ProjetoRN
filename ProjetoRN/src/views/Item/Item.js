import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import estiloItem from './estiloItem';
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AlunoFB } from '../../firebase/alunoFB';

function Item({ navigation, route }) {

    const [item, setItem] = useState({});
    const {operacao, setOperacao} = route.params;

    const alunoFb = new AlunoFB();

    useEffect(() => {
            setItem(route.params.item);
    }, [route.params.item]);

    const voltar = () => {
        navigation.navigate('Perfil')
    }
    
    const salvar = (item) => {
        operacao == 'adicionar' ? alunoFb.adicionarAluno(item) : alunoFb.editarAluno(item);
        voltar();
     }

    const remover = (item) => { 
        alunoFb.removerAluno(item);
        voltar();
    }
    
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.header}>

                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white"/>
                </TouchableOpacity>
                <Text style={estiloItem.texto}>Aluno</Text>
                <Text></Text>
            </View>

            <View style={estiloItem.formularioContainer}>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="book" size={26} color="#192f6a"/>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Titulo"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={titulo => setItem({...item, titulo})}
                        value={item.titulo}
                    />
                </View>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="book-reader" size={26} color="#192f6a"/>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Autor"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={autor => setItem({...item, autor})}
                        value={item.autor}
                    />
                </View>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="calendar-alt" size={26} color="#192f6a"/>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Ano de publicação"
                        placeholderTextColor="#FFFFFF"
                        keyboardType="numeric"
                        maxLength={4}
                        onChangeText={anoPublicacao => setItem({...item, anoPublicacao})}
                        value={item.anoPublicacao}
                    />
                </View>

                <View style={estiloItem.campoContainerDescricao}>
                    <FontAwesome5 name="book-open" size={26} color="#192f6a"/>
                    <ScrollView style={estiloItem.campoDescricaoScroll}>
                    <TextInput
                        style={estiloItem.campoDescricao}
                        placeholder="Descrição"
                        placeholderTextColor="#FFFFFF"
                        multiline={true}
                        numberOfLines={4}
                        blurOnSubmit={false}
                        onChangeText={descricao => setItem({...item, descricao})}
                        value={item.descricao}
                    />
                    </ScrollView>
                </View>

                <View style={estiloItem.botoesContainer}>

                    <TouchableOpacity onPress={() => salvar(item)} style={estiloItem.botaoContainer}>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloItem.botao}>
                            <MaterialIcons name="save" size={28} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => remover(item)} style={estiloItem.botaoContainer}>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloItem.botao}>
                            <MaterialIcons name="delete" size={28} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default Item;