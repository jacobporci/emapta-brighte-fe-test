import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Referral } from "@prisma/client";

export const useCreateReferral = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createReferral"],
    mutationFn: async (data: Referral) => {
      try {
        const res = await axiosInstance.post("/referral", data);
        return res.data;
      } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["referrals"], (oldData: Referral[]) => [
        ...oldData,
        data,
      ]);
    },
  });
};
