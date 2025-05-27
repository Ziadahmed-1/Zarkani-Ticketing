// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://apitiketing.zarkani-group.com", // Replace with your actual API URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // You can add other default headers here like Authorization
  },
});

// Optional: Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token from localStorage/session if needed
    const token = JSON.parse(localStorage.getItem("user"))?.encodedPayload;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here (e.g., redirect to login on 401)
    return Promise.reject(error);
  }
);

export default axiosInstance;
