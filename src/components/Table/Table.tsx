"use client";

import { useReferrals } from "@/hooks/useReferrals";
import { Section } from "../Section";
import { Actions, TableCell, TableHeader, TableRow } from "./components";
import { Referral } from "@prisma/client";
import { useDeleteReferral } from "@/hooks/useDeleteReferral";

type tTable = {
  onEdit: (data: Referral) => void;
};

export const Table = ({ onEdit }: tTable) => {
  const { data, isPending } = useReferrals();
  const { mutate, isPending: isDeleting } = useDeleteReferral();

  return (
    <Section className="bg-gray-100 px-10 py-20">
      <div className="bg-white w-full h-full px-5 py-10">
        <table className="w-full table-fixed">
          <thead>
            <TableRow>
              <TableHeader>GIVEN NAME</TableHeader>
              <TableHeader>SURNAME</TableHeader>
              <TableHeader>EMAIL</TableHeader>
              <TableHeader>PHONE</TableHeader>
              <TableHeader>ACTIONS</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {data?.map((referral) => (
              <TableRow key={referral.id}>
                <TableCell>{referral.givenName}</TableCell>
                <TableCell>{referral.surname}</TableCell>
                <TableCell>{referral.email}</TableCell>
                <TableCell>{referral.phone}</TableCell>
                <TableCell>
                  <Actions
                    onEdit={() => onEdit(referral)}
                    onDelete={() => mutate(referral.id)}
                    disabled={isPending || isDeleting}
                  />
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};
