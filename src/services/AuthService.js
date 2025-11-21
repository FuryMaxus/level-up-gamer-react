import apiUsers from "./ApiUsers";

export async function loginService(email, password) {
  try {
    const response = await apiUsers.post('/auth/ingreso', { email, password });
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
    const response = await apiUsers.post('/auth/registro', body);

    return response.data;

  } catch (error) {
    console.error("Error registrando:", error.response?.data || error.message);
    throw error;
  }
}

export function getMyProfile() {
  return apiUsers.get("/usuarios/me");
}


