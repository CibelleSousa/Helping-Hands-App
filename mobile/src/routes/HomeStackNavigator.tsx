import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import * as Font from 'expo-font';

// Telas
import HomeScreen from '../screens/HomeScreen';
import ServiceInfo from '../screens/servicesProvider/ServiceInfo';

// Interfaces
import { ProviderCardResponse } from "../interfaces/provideCard.interface";

export type HomeStackParamList = {
    Home: undefined; // Nome da tela inicial
    ServiceInfo: { service: ProviderCardResponse }; // Reutilizamos a tela de detalhes
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
    headerTitleAlign: 'center',
    headerTintColor: "#A04D1C",
    headerBackTitle: '',
    headerShadowVisible: false,
    headerTitleStyle: {fontFamily: 'LeagueSpartan_600SemiBold', fontSize: 30},
    headerStyle: {backgroundColor: '#FFF'},
};

export default function HomeStackNavigator(){
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen 
              name='ServiceInfo' 
              component={ServiceInfo} 
              options={{
                title: 'Informações',
                headerBackVisible: true, // Garante que a seta apareça
              }} 
            />

        </Stack.Navigator>
    );
}