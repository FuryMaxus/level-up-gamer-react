import axios from "axios";
import axiosProtected from "../config/axiosConfig";
import { URL_USUARIOS } from "../config/urls";



export async function loginService(email, password) {
  try {
    const response = await axios.post(`${URL_USUARIOS}/auth/ingreso`, { email, password });
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
    const response = await axios.post(`${URL_USUARIOS}/auth/registro`, body);

    return response.data;

  } catch (error) {
    console.error("Error registrando:", error.response?.data || error.message);
    throw error;
  }
}

export function getMyProfile() {
  return axiosProtected.get(`${URL_USUARIOS}/usuarios/me`);
}


