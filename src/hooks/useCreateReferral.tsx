import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Referral } from "@prisma/client";
import { toast } from "react-toastify";

const TOAST_ID = "createReferral";

export const useCreateReferral = ({ onSuccess }: { onSuccess: () => void }) => {
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
    onMutate: () => {
      toast.loading("Creating referral...", { toastId: TOAST_ID });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["referrals"], (oldData: Referral[]) => [
        ...oldData,
        data,
      ]);
      onSuccess();
      toast.update(TOAST_ID, {
        type: "success",
        render: "Referral created successfully",
        isLoading: false,
        autoClose: 3000,
      });
    },
    onError: () => {
      toast.update(TOAST_ID, {
        type: "error",
        render: "Failed to create referral",
        isLoading: false,
        autoClose: 3000,
      });
    },
  });
};
