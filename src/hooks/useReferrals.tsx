"use client";

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Referral } from "@prisma/client";

export const useReferrals = () => {
  return useQuery<Referral[]>({
    queryKey: ["referrals"],
    queryFn: async () => {
      const res = await axiosInstance.get("/referral");
      return res.data;
    },
  });
};
