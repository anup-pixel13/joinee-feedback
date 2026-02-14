// API Base URL - works for local, network, and production
const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  'http://localhost:8080/api';

console.log('🚀 API Base URL:', API_BASE_URL);

export default API_BASE_URL;