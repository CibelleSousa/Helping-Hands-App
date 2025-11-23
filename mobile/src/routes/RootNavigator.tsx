import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setLoading } from '../store/slices/auth';
import MainNavigator from './MainNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import Splash from '../screens/Splash';

export default function RootNavigator() {
  // 1. Lendo o "cérebro" (o estado do Redux)
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const userToken = useSelector((state: RootState) => state.auth.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    // Esta função simula o app verificando se já existe um token
    // salvo no "cofre" do celular (AsyncStorage)
    const bootstrapAsync = () => {
      // Por enquanto, vamos só fingir que essa verificação demora 1 segundo
      setTimeout(() => {
        dispatch(setLoading(false)); // Avisa o Redux: "Pode parar de carregar"
      }, 3000); // 3000ms = 3 segundos
    };

    bootstrapAsync();
  }, [dispatch]); // O array [dispatch] garante que isso rode SÓ UMA VEZ

  // 2. A lógica da "catraca"
  if (isLoading) {
    return <Splash />;
  }

  return (
    userToken == null ? <AuthStackNavigator /> : <MainNavigator />
  );
  
}