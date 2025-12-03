import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack';
import Services from '../screens/servicesProvider/Services';
import ServiceInfo from '../screens/servicesProvider/ServiceInfo';
import { ProviderCardResponse } from "../interfaces/provideCard.interface";
// imports de estilização do header
import { RouteProp } from '@react-navigation/native';
import * as Font from 'expo-font';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export type ServiceStackParamList = {
    ServiceList: undefined,
    ServiceInfo: { service: ProviderCardResponse }
};

const Stack = createNativeStackNavigator<ServiceStackParamList>();

// Estilização do Header
type ScreenOptionsProps = {
  route: RouteProp<ServiceStackParamList, keyof ServiceStackParamList>;
  navigation: any;
};
Font.getLoadedFonts();
const screenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: "#A04D1C",  
  headerBackTitle: '',
  headerShadowVisible: false,
  headerTitleStyle: {fontFamily: 'LeagueSpartan_600SemiBold', fontSize: 30},
  headerStyle: {backgroundColor: '#FFF'},
  
};

export default function ServicesStackNavigator(){
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='ServiceList' component={Services} options={{title: 'Serviços', headerLeft: () => null}} />
            <Stack.Screen 
              name='ServiceInfo' 
              component={ServiceInfo} 
              options={{
                title:'Informações',
                  headerBackVisible: true
                }} 
            />
        </Stack.Navigator>
    );
}