import axiosClient from '../axiosClient';

// Auth endpoints
export const authAPI = {
  login: (data: { username: string; password: string }) => {
    return axiosClient.post('/auth/login/', data);
  },
  
  register: (data: { username: string; email: string; password: string }) => {
    return axiosClient.post('/auth/register/', data);
  },
  
  logout: () => {
    return axiosClient.post('/auth/logout/');
  },
  
  getProfile: () => {
    return axiosClient.get('/auth/profile/');
  },
};

// Ví dụ: Sản phẩm API
export const productAPI = {
  getAll: () => {
    return axiosClient.get('/products/');
  },
  
  getById: (id: number) => {
    return axiosClient.get(`/products/${id}/`);
  },
  
  create: (data: any) => {
    return axiosClient.post('/products/', data);
  },
  
  update: (id: number, data: any) => {
    return axiosClient.put(`/products/${id}/`, data);
  },
  
  delete: (id: number) => {
    return axiosClient.delete(`/products/${id}/`);
  },
};
