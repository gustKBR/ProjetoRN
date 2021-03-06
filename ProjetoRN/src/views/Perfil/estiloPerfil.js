import { StyleSheet } from 'react-native';

const estiloPerfil = StyleSheet.create({
    container: {   
      flex: 1,
      backgroundColor: "#e7e7e7",
    },
    header:{
       height: 40,
       backgroundColor: '#23B14D',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: "space-between",
       padding: 5,
    },
    fundo: {     
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
    },
    botaoBackground: {
      width: 140,
      height: 100,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: "#14417b",
    },
    botaoTexto: {
      fontSize: 18,
      color: '#000000',
      fontWeight: 'bold',
    },
});

export default estiloPerfil;