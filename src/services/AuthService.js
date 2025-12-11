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

export async function createUserByAdmin(userData) {
    try {
        const response = await axiosProtected.post(`${URL_USUARIOS}/auth/registro/admin`, userData);
        return response.data;
    } catch (error) {
        console.error("Error creando usuario", error);
        throw error;
    }
}

export function getMyProfile() {
  try{
    return axiosProtected.get(`${URL_USUARIOS}/usuarios/me`);
  }catch (err) {
    console.error("Error intentando obtener los datos de perfil",err.response?.data || err.message);
  }
}

export async function updateProfile(email, data) {
  try {
    const response =  await axiosProtected.put(`${URL_USUARIOS}/usuarios/${email}`, data);
    return response.data;
  } catch (err) {
    console.error("Error en servicio updateProfile:", err);
    throw err; 
  }
}


export function changeMyPassword(currentPassword, newPassword) {
  try {
    const body = { currentPassword, newPassword };
    return axiosProtected.put(`${URL_USUARIOS}/usuarios/me/password`, body);
  } catch (err) {
    console.error("Error cambiando password", err.response?.data || err.message);
    throw err;
  }
}

export function adminResetPassword(targetEmail, newPassword) {
  try {
    const body = { newPassword };
    return axiosProtected.put(`${URL_USUARIOS}/usuarios/${targetEmail}/admin-password`, body);
  } catch (err) {
    console.error("Error reseteando password", err.response?.data || err.message);
    throw err;
  }
}

export function deleteUser(targetEmail) {
  try {
    return axiosProtected.delete(`${URL_USUARIOS}/usuarios/admin/${targetEmail}`);
  } catch (err) {
    console.error("Error eliminando usuario", err.response?.data || err.message);
    throw err;
  }
}

export async function getAllUsers() {
  try {
        const response = await axiosProtected.get(`${URL_USUARIOS}/usuarios`);
        return response.data; 
    } catch (error) {
        throw error;
    }
}


