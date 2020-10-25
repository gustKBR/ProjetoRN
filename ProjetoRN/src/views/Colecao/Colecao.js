import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState([
        {
            id: '1',
            nome: 'Harry Potter',
            modelo: 'Biscuit',
            preco: 'R$30,00',
            foto: require('../../../assets/Itens/harrypotter.jpg'),
        },
        {
            id: '2',
            nome: 'Joker',
            modelo: 'Argila',
            preco: 'R$110,00',
            foto: require('../../../assets/Itens/joker.jpg'),
        },
        {
            id: '3',
            nome: 'Madara',
            modelo: 'Plástico',
            preco: 'R$750,00',
            foto: require('../../../assets/Itens/madara.jpg'),
        },
        {
            id: '4',
            nome: 'Morpheus',
            modelo: 'PVC',
            preco: 'R$1590,00',
            foto: require('../../../assets/Itens/matrix.jpg'),
        },
    ]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name='arrow-back' size={24} color='black'/>
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name='add' size={24} color='black' /> 
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <Lista data={item} />}
            />
            
        </View>
    );
}

export default Colecao;