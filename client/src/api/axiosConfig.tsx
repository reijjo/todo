import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  // baseURL: "http://localhost:3001"
});

export default api;
