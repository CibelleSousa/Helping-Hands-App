import axios from 'axios';

// ⚠️ IMPORTANTE: Substitua o endereço de IP pelo endereço IPv4 do seu computador.
const API_URL = 'http://192.168.0.106:3000';

const api = axios.create({
  baseURL: API_URL,
});

export default api;