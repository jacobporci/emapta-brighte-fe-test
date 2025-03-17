"use client";

import { Form } from "@/components/Form/Form";
import { Table } from "@/components/Table/Table";
import { Referral } from "@prisma/client";
import { useState } from "react";

export default function Home() {
  const [referral, setReferral] = useState<Referral | undefined>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-screen text-[#aeaeae]">
      <Form referral={referral} onReset={() => setReferral(undefined)} />
      <Table onEdit={(data) => setReferral(data)} />
    </div>
  );
}
