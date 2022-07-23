import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
})

const tokenLocalStorage = localStorage.getItem('token') as string;

if (tokenLocalStorage) {
  api.defaults.headers.common["Authorization"] = `Bearer ${tokenLocalStorage}`
}

export { api }