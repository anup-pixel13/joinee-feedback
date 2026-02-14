// API Base URL configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Debug logging
console.log('='.repeat(50));
console.log('🚀 Environment:', import.meta.env.MODE);
console.log('🚀 VITE_API_URL:', import.meta.env.VITE_API_URL);
console.log('🚀 Final API Base URL:', API_BASE_URL);
console.log('='.repeat(50));

export default API_BASE_URL;