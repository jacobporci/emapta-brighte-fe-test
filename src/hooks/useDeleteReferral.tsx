"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export const useDeleteReferral = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteReferral"],
    mutationFn: async (id: string) => {
      const res = await axiosInstance.delete(`/referral/${id}`);
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["referrals"] }),
  });
};
