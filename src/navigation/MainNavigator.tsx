import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import {Home} from "../styles/Home.style"
import HomeScreen from '../screens/HomeScreen';


export type RootStackParamList = {
  Home: undefined;
};

// Criamos o navegador, já ensinando a ele sobre nossa lista de telas.
const Stack = createNativeStackNavigator<RootStackParamList>();

// Tipo para as props das opções de tela
type ScreenOptionsProps = {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
  navigation: any;
};

const screenOptions: (props: ScreenOptionsProps) => NativeStackNavigationOptions = ({ route }) => ({
  title: 'Services',
  headerTitleAlign: 'center',
  headerBackTitle: '',
  headerRight: () => (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ marginRight: 20 }}>
        <FontAwesome name="search" size={22} color="#E67E22" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="sliders" size={22} color="#E67E22" />
      </TouchableOpacity>
    </View>
  ),
});

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}