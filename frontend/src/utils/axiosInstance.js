import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://final-backend-orcin.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
