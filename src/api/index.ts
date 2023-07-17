import axios from "axios";

export const api = axios.create({
  // baseURL: "http://192.168.1.k68:1337/api",
  // baseURL: "http://192.168.1.69:1337/api",
  // baseURL: "http://192.168.1.69:1337/api",
  // baseURL: "http://192.168.1.76:1337/api",
  // baseURL: "http://192.168.1.71:1337/api",
  // baseURL: "http://192.168.1.68:1337/api",
  // baseURL: "http://192.168.1.71:1337/api",
  // baseURL: "http://192.168.1.183:1337/api",
  baseURL: "http://172.16.7.48:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// http://localhost:1337/public/images/image-1688344250817-327880280.png
export const imageuri = "http://172.16.7.48:1337/public/images/";
