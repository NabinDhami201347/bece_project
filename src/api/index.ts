import axios from "axios";
import { LoginInfo } from "../schemas/login.schema";

export const api = axios.create({
  baseURL: "http://192.168.1.68:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (info: LoginInfo) => {
  try {
    const response = await api.post("/auth/login", info);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
