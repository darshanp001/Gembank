import axios from 'axios';

export const submitLOI = async (formData) => {
  const response = await axios.post('http://localhost:5000/api/loi/submit', formData);
  return response.data;
};