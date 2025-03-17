import axios, { AxiosRequestConfig } from "axios";

export const baseURL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api";

const defaultConfig: AxiosRequestConfig = {
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const axiosInstance = axios.create(defaultConfig);
