import axios from "axios";

const apiUsers = axios.create({
  baseURL: "http://35.174.36.141:8081/api/v1", 
});

apiUsers.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiUsers;