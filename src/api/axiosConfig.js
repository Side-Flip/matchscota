import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/matchweb", // Ajusta esto a la URL de tu backend Django
  withCredentials: true,
  timeout: 5000, // Aumenta el timeout a 5000ms (5 segundos)
});

axiosInstance.interceptors.request.use((config) => {
  const csrfToken = Cookies.get("csrftoken");
  if (csrfToken) {
    config.headers["X-CSRFToken"] = csrfToken;
  }
  return config;
});

export default axiosInstance;
