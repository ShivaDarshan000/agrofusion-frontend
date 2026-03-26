import axios from "axios";

const API_URL = "https://agrofusion-backend.onrender.com";

export const predictCrop = async (data) => {
  const response = await axios.post(`${API_URL}/predict`, data);
  return response.data;
};
