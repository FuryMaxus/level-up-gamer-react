import axios from "axios";
import { jwtDecode } from "jwt-decode"; 

const AUTH_URL = "http://localhost:8081/api/v1/auth"

export async function loginService(email, password) {
  try {
    const response = await axios.post(`${AUTH_URL}/ingreso`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Login falló:', error.response?.data || error.message);
    throw error;
  }
}


