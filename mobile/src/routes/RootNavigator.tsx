import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { loadUserFromStorage } from '../store/slices/auth';
import MainNavigator from './MainNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import Splash from '../screens/Splash';

export default function RootNavigator() {
  // 1. Lendo o estado do Redux
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const userToken = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<AppDispatch>();

  // Verificando se já existe um token salvo no celular
  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]); // O array [dispatch] garante que isso rode SÓ UMA VEZ

  // 2. A lógica da "catraca"
  if (isLoading) {
    return <Splash />;
  }

  return (   
    userToken == null ? <AuthStackNavigator /> : <MainNavigator />
  );
  
}