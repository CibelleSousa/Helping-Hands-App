import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const authScreenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: "#EF762F",
  headerBackTitle: '',
  headerShadowVisible: false,
  headerTitleStyle: { fontFamily: 'LeagueSpartan_600SemiBold', fontSize: 30 },
  animation: 'simple_push',
  
};

export default function AuthStackNavigator() {
  return (
      <Stack.Navigator screenOptions={authScreenOptions}>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{title: 'Login'}} 
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{title: 'Nova Conta'}}
        />
      </Stack.Navigator>
  );
}