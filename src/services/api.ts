import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const tokenLocalStorage = localStorage.getItem('token') as string;

if (tokenLocalStorage) {
  api.defaults.headers.common["Authorization"] = `Bearer ${tokenLocalStorage}`
}

export { api }