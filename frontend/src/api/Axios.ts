import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { axiosConfig } from "config/axiosConfig"

const axiosService: AxiosInstance = axios.create(axiosConfig)
axiosService.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
    }
    return config
    }, e => {
      Promise.reject(e);
    }
);

export default axiosService