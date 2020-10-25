import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import estiloLogin from './estiloLogin';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {
            navigation.replace('Inicial');
        }
    }

    return (
        <View style={estiloLogin.container}>
            <ImageBackground source={require('../../../assets/Imagens/galaxia.jpg')} style={estiloLogin.fundo}>
                <View style={estiloLogin.logoContainer}>
                    <AntDesign name="login" size={24} color="black" />
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="person" size={24} color="black" />
                        <TextInput
                            style={estiloLogin.campo}
                            placeholder="Login"
                            onChangeText={login => setLogin(login)}
                            value={login}
                        />
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="vpn-key" size={24} color="black" />
                        <TextInput
                            style={estiloLogin.campo}
                            placeholder="Senha"
                            onChangeText={senha => setSenha(senha)}
                            value={senha}
                        />
                </View>

                <TouchableOpacity onPress={entrar}>
                    <LinearGradient colors={['#000000', '#000000', '#000000']} style={estiloLogin.botaoLinearGradient}>
                        <Text style={estiloLogin.botaoTexto}>
                                Entrar
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Login;