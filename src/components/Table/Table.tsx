"use client";

import { useReferrals } from "@/hooks/useReferrals";
import { Section } from "../Section";
import { Actions, TableCell, TableHeader, TableRow } from "./components";

export const Table = () => {
  const { data } = useReferrals();

  return (
    <Section className="bg-gray-100 px-10 py-20">
      <div className="bg-white w-full h-full px-5 py-10">
        <table className="w-full">
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
            {data?.map(({ id, givenName, surname, email, phone }) => (
              <TableRow key={id}>
                <TableCell>{givenName}</TableCell>
                <TableCell>{surname}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>
                  <Actions />
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};
