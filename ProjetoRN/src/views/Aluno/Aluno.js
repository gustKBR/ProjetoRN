import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import estiloAluno from './estiloAluno';
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AlunoFB } from '../../firebase/alunoFB';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

function Aluno({ navigation, route }) {

    const [aluno, setAluno] = useState({});
    const [operacao, setOperacao] = route.params;

    const alunoFb = new AlunoFB();

    useEffect(() => {
            setAluno(route.params.aluno);
    }, [route.params.aluno]);

    const voltar = () => {
        navigation.navigate('Perfil')
    }
    
    const salvar = (aluno) => {
        operacao == 'adicionar' ? alunoFb.adicionarAluno(aluno) : alunoFb.editarAluno(aluno);
        voltar();
     }

    const remover = (aluno) => { 
        alunoFb.removerAluno(aluno);
        voltar();
    }
    
    return (
        <View style={estiloAluno.container}>
            <View style={estiloAluno.header}>

                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white"/>
                </TouchableOpacity>
                <Text style={estiloAluno.texto}>Aluno</Text>
                <Text></Text>
            </View>

            <View style={estiloAluno.formularioContainer}>

                <View style={estiloAluno.campoContainer}>
                    <Ionicons name="ios-people" size={24} color="black" />
                    <TextInput
                        style={estiloAluno.campo}
                        placeholder="Nome"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={nome => setAluno({...aluno, nome})}
                        value={aluno.nome}
                    />
                </View>

                <View style={estiloAluno.campoContainer}>
                    <MaterialCommunityIcons name="google-classroom" size={24} color="black" />
                    <TextInput
                        style={estiloAluno.campo}
                        placeholder="Sala"
                        placeholderTextColor="#FFFFFF"
                        keyboardType="numeric"
                        onChangeText={sala => setAluno({...aluno, sala})}
                        value={aluno.sala}
                    />
                </View>

                <View style={estiloAluno.campoContainer}>
                    <Zocial name="persona" size={24} color="black" />
                    <TextInput
                        style={estiloAluno.campo}
                        placeholder="Turma"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={turma => setAluno({...aluno, turma})}
                        value={aluno.turma}
                    />
                </View>

                <View style={estiloAluno.botoesContainer}>

                    <TouchableOpacity onPress={() => salvar(aluno)} style={estiloAluno.botaoContainer}>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloAluno.botao}>
                            <MaterialIcons name="save" size={28} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => remover(aluno)} style={estiloAluno.botaoContainer}>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloAluno.botao}>
                            <MaterialIcons name="delete" size={28} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default Aluno;