import axios from 'axios';

// Use Vite's import.meta.env to access environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const submitLOI = async (formData) => {
  try {
    console.log('📤 Sending LOI to backend:', `${API_URL}/loi/submit`);

    const response = await axios.post(`${API_URL}/loi/submit`, formData);

    console.log('✅ Backend response:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ API Error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};


// import axios from 'axios';

// export const submitLOI = async (formData) => {
//   const response = await axios.post('http://localhost:5000/api/loi/submit', formData);
//   return response.data;
// };