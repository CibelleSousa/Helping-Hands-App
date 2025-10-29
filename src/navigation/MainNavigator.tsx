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
import Profile from '../screens/profile/Profile';
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
  title: 'Services',
  headerTitleAlign: 'center',
  headerTintColor: "#E67E22",  
  headerBackTitle: '',
  headerShadowVisible: false,
  headerTitleStyle: {fontFamily: 'LeagueSpartan_600SemiBold', fontSize: 30},
  headerLeft: () => (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{marginLeft: 10}}>
        <FontAwesome name="chevron-left" size={22} color="#E67E22" />
       </TouchableOpacity>
    </View>
  ),
  headerRight: () => (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ marginRight: 20 }}>
        <FontAwesome name="search" size={22} color="#E67E22" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 20 }}>
        <FontAwesome name="sliders" size={22} color="#E67E22" />
      </TouchableOpacity>
    </View>
  ),
});

export default function MainNavigator() {
  let [fontsLoaded] = useFonts({LeagueSpartan_600SemiBold});

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