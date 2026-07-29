import { Category } from "./category";

export interface MasterService {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
  category: Category;
}

export interface MasterServicesResponse {
  success: boolean;
  message: string;
  data: MasterService[];
}