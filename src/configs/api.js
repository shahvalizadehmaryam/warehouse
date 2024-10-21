import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((request) => {
  return request;
});
api.interceptors.response.use((response) => {
  return response;
});
export default api;
