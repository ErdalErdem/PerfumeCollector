
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000/api/perfumes',
});

export const fetchPerfumes = () => API.get('/');
export const fetchPerfume = (id) => API.get(`/${id}`);
export const createPerfume = (data) => API.post('/', data);
export const updatePerfume = (id, data) => API.put(`/${id}`, data);
export const deletePerfume = (id) => API.delete(`/${id}`);