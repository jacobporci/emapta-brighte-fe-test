import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Referral } from "@prisma/client";

export const useUpdateReferral = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateReferral"],
    mutationFn: async (data: Referral) => {
      try {
        const res = await axiosInstance.put(`/referral/${data.id}`, data);
        return res.data;
      } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["referrals"] });
    },
  });
};
