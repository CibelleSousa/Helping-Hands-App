import React from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { RouteProp } from '@react-navigation/native';
import { useFonts } from '@expo-google-fonts/league-spartan';
import { LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import HomeScreen from '../screens/HomeScreen';
import WIPScreen from '../screens/WIPScreen';

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
Font.getLoadedFonts();
const screenOptions: (props: ScreenOptionsProps) => NativeStackNavigationOptions = ({ route }) => ({
  title: 'WIP',
});

export default function ReplaceNavigator() {
  let [fontsLoaded] = useFonts({LeagueSpartan_600SemiBold});

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={WIPScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}