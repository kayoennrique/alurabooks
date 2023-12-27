import axios from "axios";
import { ICategorie } from "../interfaces/ICategorie";
import { IBook } from "../interfaces/IBooks";

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
})

http.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = sessionStorage.getItem('token')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // Do something with request error
  console.log('Erro no interceptor do axios')
  return Promise.reject(error);
});

export default http

export const getCategoryBySlug = async (slug: string) => {
  const response = await http.get<ICategorie[]>('categorias', {
    params: {
      slug
    }
  });
  return response.data[0]
}

  export const getBooksFeatured = async (type: string) => {
    const response = await http.get<IBook[]>(`public/${type}`)
    return response.data
  }
