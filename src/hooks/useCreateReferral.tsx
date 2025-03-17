import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Referral } from "@prisma/client";

export const useCreateReferral = () => {
  return useMutation({
    mutationKey: ["createReferral"],
    mutationFn: async (data: Referral) => {
      try {
        const res = await axiosInstance.post("/referral", data);
        return res;
      } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
      }
    },
  });
};
