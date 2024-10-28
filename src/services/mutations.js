import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";
const useRegister = () => {
  const mutationFn = (data) => api.post("auth/register", data);

  return useMutation({ mutationFn });
};
const useLogin = () => {
  const mutationFn = (data) => api.post("auth/login", data);
  return useMutation({ mutationFn });
};
const useDeleteProducts = () => {
  const mutationFn = (data) => api.delete(`products/${data}`);
  return useMutation({ mutationFn });
};
const useEditProducts = () => {
  const mutationFn = (data) => {
    // const { id, ...updatedData } = data;
    console.log("data in useEditProducts", data);
    // return api.put(`products/${id}`, updatedData);
  };
  return useMutation({ mutationFn });
};
const useAddProduct = () => {
  const mutationFn = (data) => api.post("products/", data);
  return useMutation({ mutationFn });
};

export {
  useRegister,
  useLogin,
  useDeleteProducts,
  useAddProduct,
  useEditProducts,
};
