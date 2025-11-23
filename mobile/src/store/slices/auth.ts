import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../../services/api';
import { AuthResponse, User } from '../../interfaces/auth.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. Definimos a interface para o estado deste slice
interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

// 2. Definimos o estado inicial (como o app começa)
const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: true,
  error: null
};

// Ação assícrona de carregar memória cache
export const loadUserFromStorage = createAsyncThunk(
  'auth/loadFromStorage',
  async (_, { rejectWithValue }) => {
    try {
      // Tenta ler os dados salvos no celular
      const token = await AsyncStorage.getItem('@HelpingHands:token');
      const userJson = await AsyncStorage.getItem('@HelpingHands:user');

      if (token && userJson) {
        // Se achou, configura o Axios para já sair usando esse token
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return { token, user: JSON.parse(userJson) };
      }
      return null; // Não tinha nada salvo (usuário novo ou deslogado)
    } 
    catch (error) {
      return rejectWithValue('Falha ao carregar dados locais');
    }
  }
);

// Ação assíncrona de Login
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: {email: string; password: string}, {rejectWithValue}) => {
    try {
      const response = await api.post<AuthResponse>('auth/login', credentials);

      // Salva no cache ao logar
      await AsyncStorage.setItem('@HelpingHands:token', response.data.token);
      await AsyncStorage.setItem('@HelpingHands:user', JSON.stringify(response.data.user));

      return response.data;  
    } 
    catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Erro ao conectar com o servidor.');
    }
  }
);

// 3. Criamos o Slice
const authSlice = createSlice({
  name: 'auth', // O nome do slice
  initialState,
  // 4. Altera o estado (os Reducers)
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    // Ação para quando o usuário sai
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;

      // Apaga da memória cache
      AsyncStorage.removeItem('@HelpingHands:token');
      AsyncStorage.removeItem('@HelpingHands:user');

      delete api.defaults.headers.common['Authorization'];
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers(builder) {
    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        api.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
    // Cache
    builder
      .addCase(loadUserFromStorage.fulfilled, (state, action) =>{
        if(action.payload){
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
        state.isLoading = false;
      })
      .addCase(loadUserFromStorage.rejected, (state) =>{
        state.isLoading = false;
      });
  },
});

// 5. Exportamos as ações para as telas usarem
export const { logout, clearError, setLoading } = authSlice.actions;

// 6. Exportamos a slice para a store
export default authSlice.reducer;