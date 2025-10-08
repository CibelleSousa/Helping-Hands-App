import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";

// Tipagem: mapa das nossas rotas
export type RootStackParamList = {
    Home: undefined
}

// Cria uma Instância do nosso navegador de pilha
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Helping Hands' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}