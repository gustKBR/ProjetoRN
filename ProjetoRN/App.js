import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RotasLoginStack from './src/components/rotasStack/RotasLoginStack';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light-content" backgroundColor="#FFFFFF" />
            <RotasLoginStack />
        </NavigationContainer>
    );
}