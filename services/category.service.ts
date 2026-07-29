import { api } from "./axios";

import { CategoriesResponse } from "@/types/category";

export const getAllCategories = async () => {
  const { data } = await api.get<CategoriesResponse>(
    "/category/get-all-categories"
  );

  return data.data;
};