import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth' // Importamos nosso departamento

// 1. Criamos a "sala de controle"
export const store = configureStore({
  // 2. Registramos todos os nossos departamentos (reducers)
  reducer: {
    auth: authReducer,
    // No futuro, outros slices viriam aqui, ex: services: servicesReducer
  },
});

// 3. Criamos "moldes" (tipos) para o nosso TypeScript
// Isso nos ajuda a saber exatamente qual é o formato do nosso estado total
export type RootState = ReturnType<typeof store.getState>;
// E isso nos ajuda a saber os tipos das nossas funções "dispatch"
export type AppDispatch = typeof store.dispatch;