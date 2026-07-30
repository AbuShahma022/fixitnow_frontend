import { api } from "./axios";

import { CategoriesResponse } from "@/types/category";

export const getAllCategories = async () => {
  const { data } = await api.get<CategoriesResponse>(
    "/category/get-all-categories"
  );

  return data.data;
};

export const getCategoryById = async (id: string) => {
  const { data } = await api.get(`/category/get-category/${id}`);

  return data.data;
};