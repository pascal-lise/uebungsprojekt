import { AxiosRequestConfig } from "axios";

export const axiosConfig: AxiosRequestConfig = { 
    baseURL: process.env.REACT_APP_API_URL, 
}