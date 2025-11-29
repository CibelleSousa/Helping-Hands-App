import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse, User } from '../../interfaces/auth.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: true,
};

// Ação assícrona de carregar memória cache
export const loadUserFromStorage = createAsyncThunk(
  'auth/loadFromStorage',
  async (_, { rejectWithValue }) => {
    try {
      // Tenta ler os dados salvos no celular
      const timer = new Promise(resolve => setTimeout(resolve, 2000));
      const tokenPromise = await AsyncStorage.getItem('@HelpingHands:token');
      const userPromise = await AsyncStorage.getItem('@HelpingHands:user');

      const [_, token, userJson] = await Promise.all([timer, tokenPromise, userPromise]);

      if (token && userJson) {
        return { token, user: JSON.parse(userJson) };
      }
      return null; // Não tinha nada salvo (usuário novo ou deslogado)
    } 
    catch (error) {
      return rejectWithValue('Falha ao carregar dados locais');
    }
  }
);


const authSlice = createSlice({
  name: 'auth', // O nome do slice
  initialState,
  // Altera o estado (os Reducers)
  reducers: {
    // Ação síncrona para salvar credenciais (usada após o sucesso do RTK Query)
    setCredentials: (state, action: PayloadAction<AuthResponse>) =>{
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      AsyncStorage.setItem('@HelpingHands:token', token);
      AsyncStorage.setItem('@HelpingHands:user', JSON.stringify(user));
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    // Ação para quando o usuário sai
    logout: (state) => {
      state.user = null;
      state.token = null;
      AsyncStorage.removeItem('@HelpingHands:token');
      AsyncStorage.removeItem('@HelpingHands:user');
    },
  },
  extraReducers(builder) {
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

// Exportamos as ações para as telas usarem
export const { setCredentials, logout, setLoading } = authSlice.actions;

// Exportamos a slice para a store
export default authSlice.reducer;