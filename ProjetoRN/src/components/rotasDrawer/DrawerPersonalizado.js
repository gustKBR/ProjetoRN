import React from 'react';
import { Text, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';
import { FontAwesome } from '@expo/vector-icons';

function DrawerPersonalizado(props) {
    return (
        <DrawerContentScrollView {...props}>
            
            <View style={estiloRotasDrawer.fotoContainer}>
                <FontAwesome name="user-circle-o" size={100} color="black" />
                <Text style={estiloRotasDrawer.nome}>Usuário</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default DrawerPersonalizado;