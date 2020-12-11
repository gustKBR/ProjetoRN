import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import estiloListaAlunos from './estiloListaAlunos';
import { LinearGradient } from 'expo-linear-gradient';

const ListaAlunos = ({data, detalhe}) => {

    const [aluno, setAluno] = useState(data);

    return (
        <View style={{height: 200, width: "100%", flexDirection: "row", alignItems: 'center'}}>
            <Text style={{fontFamily: "Trebuchet MS", fontSize: 14, fontWeight: '500'}}>{aluno.nome}{'\n'}{aluno.sala}{aluno.turma}</Text>
        </View>
    );
}

export default ListaAlunos;