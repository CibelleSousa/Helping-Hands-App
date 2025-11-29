import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from '../screens/servicesProvider/Services';
import ServiceInfo from '../screens/servicesProvider/ServiceInfo';
import { ServiceProvider } from '../data/mockedServices.type';
import { ProviderCardResponse } from "../interfaces/provideCard.interface";
// imports de estilização do header
import { RouteProp } from '@react-navigation/native';
import * as Font from 'expo-font';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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
const screenOptions: (props: ScreenOptionsProps) => NativeStackNavigationOptions = ({ route }) => ({
  headerTitleAlign: 'center',
  headerTintColor: "#A04D1C",  
  headerBackTitle: '',
  headerShadowVisible: false,
  headerTitleStyle: {fontFamily: 'LeagueSpartan_600SemiBold', fontSize: 30},
  headerRight: () => (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ marginRight: 20 }}>
        <FontAwesome name="search" size={22} color="#A04D1C" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 20 }}>
        <FontAwesome name="sliders" size={22} color="#A04D1C" />
      </TouchableOpacity>
    </View>
  )
});

export default function ServicesStackNavigator(){
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='ServiceList' component={Services} options={{title: 'Serviços', headerLeft: () => null}} />
            <Stack.Screen 
              name='ServiceInfo' 
              component={ServiceInfo} 
              options={(props: NativeStackScreenProps<ServiceStackParamList, 'ServiceInfo'>) => ({
                title:'Informações',
                //precisa implementar o headerLeft aqui
                })} 
            />
        </Stack.Navigator>
    );
}