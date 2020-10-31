import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../../../styles/styles";
import { Button } from '../../components/button';
import Slider from '@react-native-community/slider';

function Colecao({ navigation }) {

    const [isPlaying, setIsPlaing] = useState(false);
    const [duration, setDuration] = useState(0.0);
    const maximumValue = 3.15;
    const togglePlay = () => {
        isPlaying === true ? setIsPlaying(false) : setIsPlaying(true);
    }

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

            <LinearGradient colors={["#444", "#222"]} style={styles.gradient}>
                <Text style={styles.headerText}>Now Playing</Text>
            <View style={styles.container}>
                <Image
                    source={require("../../../assets/Imagens/art.jpg")}
                    style={styles.image}
                />
                <View style={styles.titleCotainer}>
                    <Text style={styles.title}>Expressões Idiomáticas | ENGLISH PODCAST #31</Text>
                </View>
                <View style={styles.progessContainer}>
                    <Slider maximumValue={maximumValue} style={{width: 200, height: 40}} onValueChange={(value) => setDuration(value)} />
                    <View style={styles.durationContainer}>
                        <Text style={[styles.durationText, { textAlign: "left" }]}>{duration.toFixed(2)}</Text>
                        <Text style={[styles.durationText, { textAlign: "right" }]}>{(duration - maximumValue).toFixed(2)}</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
        </View>
    );
}

export default Colecao;