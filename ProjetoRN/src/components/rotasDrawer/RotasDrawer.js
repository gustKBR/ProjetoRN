import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicial from '../../views/Inicial/Inicial';
import Colecao from '../../views/Colecao/Colecao';
import Perfil from '../../views/Perfil/Perfil';
import Aluno from '../../views/Aluno/Aluno';
import { MaterialIcons} from '@expo/vector-icons';
import DrawerPersonalizado from './DrawerPersonalizado';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator
        drawerContent={DrawerPersonalizado}
    >
      <Drawer.Screen 
        name="Inicial" 
        component={Inicial}
        options={{
          drawerIcon: ({color, size}) => (
              <MaterialIcons name='home' size={size} color={color} />
          )
        }}/>
      <Drawer.Screen 
        name="Colecao" 
        component={Colecao}
        options={{
          drawerIcon: ({color, size}) => (
              <MaterialIcons name='storage' size={size} color={color} />
          )
        }}/>
      <Drawer.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          drawerIcon: ({color, size}) => (
              <MaterialIcons name='person' size={size} color={color} />
          )
        }}/>
        <Drawer.Screen 
        name="Aluno" 
        component={Aluno}
        options={{
          drawerIcon: ({color, size}) => (
              <Ionicons name="md-person-add" size={size} color={color} initialParams={{aluno: {}, operacao: 'adicionar'}}/>
          )
        }}/>
    </Drawer.Navigator>
  );
}

export default RotasDrawer;