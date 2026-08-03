import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { updateUserStatus } from "@/services/user.service";

import { UpdateUserStatusPayload } from "@/types/user";

export const useUpdateUserStatus = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateUserStatusPayload;
    }) =>
      updateUserStatus(id, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS.ADMIN_USERS,
      });

      queryClient.invalidateQueries({
        queryKey: [
          ...QUERY_KEYS.USER_DETAILS,
          variables.id,
        ],
      });
    },
  });
};