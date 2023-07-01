import axios from "axios";

export const api = axios.create({
  // baseURL: "http://192.168.1.68:1337/api",
  // baseURL: "http://192.168.1.69:1337/api",
  baseURL: "http://192.168.1.69:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
});
