import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:7878'
});

export default axiosInstance;
