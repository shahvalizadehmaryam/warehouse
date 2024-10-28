import { useQuery } from "@tanstack/react-query";
import api from "configs/api";

const useGetAllProducts = (page) => {
  console.log("page", page);
  const queryKey = ["products", page];
  const queryFn = () => api.get(`products?page=${page}&limit=10`);
  return useQuery({ queryKey, queryFn });
};
const useProductsById = (productId) => {
  const queryKey = ["product", productId];
  const queryFn = () => api.get(`products/${productId}`);
  return useQuery({ queryKey, queryFn });
};
export { useGetAllProducts, useProductsById };
