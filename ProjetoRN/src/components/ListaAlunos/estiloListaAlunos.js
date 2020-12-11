import { StyleSheet } from 'react-native';

const estiloListaAlunos = StyleSheet.create({
    areaItens: {   
        flex: 1,
        backgroundColor: '#92afd7',
    },
    itemTitulo: {   
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
    },    
    itemSubTitulo: {   
        fontSize: 18,
        textAlign: 'center',
    },    
    itemFoto: {   
        flex: 1,
        height: 300,
        marginTop: 20,
        marginBottom: 20
    },
});

export default estiloListaAlunos;
