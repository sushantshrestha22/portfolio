import axios from "axios";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
  // baseURL: "https://192.168.16.240:5005/",
  withCredentials: true, // Include credentials for cross-origin requests
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    return config; // Return the modified config
  },
  (error) => {
    // Handle the error
    return Promise.reject(error); // Reject the promise
  }
);

// Export the configured axios instance
export default axiosInstance;