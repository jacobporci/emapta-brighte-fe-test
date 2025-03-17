"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-toastify";

const TOAST_ID = "deleteReferral";
export const useDeleteReferral = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteReferral"],
    mutationFn: async (id: string) => {
      const res = await axiosInstance.delete(`/referral/${id}`);
      return res.data;
    },
    onMutate: () => {
      toast.loading("Creating referral...", { toastId: TOAST_ID });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["referrals"] });
      toast.update(TOAST_ID, {
        type: "success",
        render: "Referral deleted successfully",
        isLoading: false,
        autoClose: 3000,
      });
    },
    onError: () => {
      toast.update(TOAST_ID, {
        type: "error",
        render: "Failed to delete referral",
        isLoading: false,
        autoClose: 3000,
      });
    },
  });
};
