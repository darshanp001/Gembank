import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const submitLOI = async (formData) => {
  try {
    console.log('📤 Sending LOI to backend:', API_URL + '/loi/submit');
    
    const response = await axios.post(`${API_URL}/loi/submit`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('✅ Backend response:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ API Error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};