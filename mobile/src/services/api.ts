import axios from 'axios';

// ⚠️ IMPORTANTE: Substitua o endereço de IP pelo endereço IPv4 do seu computador.
const API_URL = 'http://10.136.7.4:3000';

const api = axios.create({
  baseURL: API_URL,
});

export default api;