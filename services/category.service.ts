import { api } from "./axios";

import {
  CategoriesResponse,
  CategoryResponse,
  CreateCategoryPayload,
  UpdateCategoryPayload,
} from "@/types/category";

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

export const createCategory = async (
  payload: CreateCategoryPayload
): Promise<CategoryResponse> => {
  const { data } =
    await api.post<CategoryResponse>(
      "/category/create-category",
      payload
    );

  return data;
};

export const updateCategory = async (
  id: string,
  payload: UpdateCategoryPayload
): Promise<CategoryResponse> => {
  const { data } =
    await api.patch<CategoryResponse>(
      `/category/update-category/${id}`,
      payload
    );

  return data;
};

export const deleteCategory = async (
  id: string
): Promise<CategoryResponse> => {
  const { data } =
    await api.delete<CategoryResponse>(
      `/category/delete-category/${id}`
    );

  return data;
};