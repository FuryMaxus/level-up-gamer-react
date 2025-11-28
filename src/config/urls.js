const IP = import.meta.env.VITE_API_IP || "localhost";

export const URL_PRODUCTOS = `http://${IP}:8080/api/v1/productos`;
export const URL_USUARIOS = `http://${IP}:8081/api/v1`;