import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Definimos o "molde" (interface) para o estado deste departamento
interface AuthState {
  userToken: string | null;
  isLoading: boolean;
}

// 2. Definimos o estado inicial (como o app começa)
const initialState: AuthState = {
  userToken: null, // Começa deslogado
  isLoading: true, // Começa carregando (para checarmos se ele já tem um token salvo)
};

// 3. Criamos o "departamento" (o Slice)
const authSlice = createSlice({
  name: 'auth', // O nome do departamento
  initialState,
  // 4. Os "botões" que alteram o estado (os Reducers)
  reducers: {
    // Ação para quando o login dá certo (recebe um token de mentira)
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload; // Recebe o token falso/real
      state.isLoading = false;
    },
    // Ação para quando o usuário sai
    logout: (state) => {
      state.userToken = null;
    },
    // Ação para dizer que terminamos de carregar
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// 5. Exportamos os "botões" (ações) para as telas usarem
export const { loginSuccess, logout, setLoading } = authSlice.actions;

// 6. Exportamos o departamento inteiro para a "sala de controle" (a store)
export default authSlice.reducer;