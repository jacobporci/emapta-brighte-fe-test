import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Referral } from "@prisma/client";
import { toast } from "react-toastify";

const TOAST_ID = "updateReferral";

export const useUpdateReferral = ({ onSuccess }: { onSuccess: () => void }) => {
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
    onMutate: () => {
      toast.loading("Updating referral...", { toastId: TOAST_ID });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["referrals"] });
      onSuccess();
      toast.update(TOAST_ID, {
        type: "success",
        render: "Referral updated successfully",
        isLoading: false,
        autoClose: 3000,
      });
    },
    onError: () => {
      toast.update(TOAST_ID, {
        type: "error",
        render: "Failed to update referral",
        isLoading: false,
        autoClose: 3000,
      });
    },
  });
};
