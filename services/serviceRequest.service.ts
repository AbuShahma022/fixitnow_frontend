import { api } from "./axios";

import {
  CreateServiceRequestPayload,
  ServiceRequestResponse,
  ServiceRequestsResponse,
} from "@/types/service-request";

export const createServiceRequest =
  async (
    payload: CreateServiceRequestPayload
  ): Promise<ServiceRequestResponse> => {
    const { data } =
      await api.post<ServiceRequestResponse>(
        "/service-request/create-service-request",
        payload
      );

    return data;
  };

export const getMyServiceRequests =
  async (): Promise<ServiceRequestsResponse> => {
    const { data } =
      await api.get<ServiceRequestsResponse>(
        "/service-request/get-my-service-requests"
      );

    return data;
  };

export const getServiceRequestDetails =
  async (
    id: string
  ): Promise<ServiceRequestResponse> => {
    const { data } =
      await api.get<ServiceRequestResponse>(
        `/service-request/get-my-service-request-details/${id}`
      );

    return data;
  };

  export const getAllServiceRequests =
  async (): Promise<ServiceRequestsResponse> => {
    const { data } =
      await api.get<ServiceRequestsResponse>(
        "/service-request/get-all-service-requests"
      );

    return data;
  };

export const getAdminServiceRequestDetails =
  async (
    id: string
  ): Promise<ServiceRequestResponse> => {
    const { data } =
      await api.get<ServiceRequestResponse>(
        `/service-request/get-service-request-details/${id}`
      );

    return data;
  };

export const approveServiceRequest =
  async (id: string) => {
    const { data } = await api.patch(
      `/service-request/approve-service-request/${id}`
    );

    return data;
  };

export const rejectServiceRequest =
  async ({
    id,
    adminFeedback,
  }: {
    id: string;
    adminFeedback: string;
  }) => {
    const { data } = await api.patch(
      `/service-request/reject-service-request/${id}`,
      {
        adminFeedback,
      }
    );

    return data;
  };