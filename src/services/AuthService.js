import axios from "axios";


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

export async function registerService(username, email, password,address) {
  try {
    
    const body = { username, email, password };

    if (address && address.trim() !== "") {
      body.address = address;
    }
    const response = await axios.post(`${AUTH_URL}/registro`, body);

    return response.data;

  } catch (error) {
    console.error("Error registrando:", error.response?.data || error.message);
    throw error;
  }
}


