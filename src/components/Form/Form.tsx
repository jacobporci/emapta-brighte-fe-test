"use client";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { SubHeader } from "@/components/SubHeader";
import { useCreateReferral } from "@/hooks/useCreateReferral";
import { Referral } from "@prisma/client";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Field, FormGrid } from "./components";
import { useEffect } from "react";

type tForm = {
  referral?: Referral;
};
export const Form = ({ referral }: tForm) => {
  const form = useForm<Referral>();

  const { mutate } = useCreateReferral();

  useEffect(() => {
    if (referral) form.reset(referral);
  }, [form, referral]);

  const handleSubmit: SubmitHandler<Referral> = (data) => {
    mutate(data);
  };

  return (
    <Section>
      <h1 className="text-3xl font-extrabold text-black">Referral Builder</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <SubHeader label="personal details" />
          <FormGrid>
            <Field label="GIVEN NAME" name="givenName" />
            <Field label="SURNAME" name="surname" />
            <Field label="EMAIL" name="email" />
            <Field label="PHONE" name="phone" />
          </FormGrid>
          <SubHeader label="address" />
          <FormGrid>
            <Field label="HOME NAME OR #" name="homeNameOrNumber" />
            <Field label="STREET" name="street" />
            <Field label="suburb" name="suburb" />
            <Field label="state" name="state" />
            <Field label="postcode" name="postcode" />
            <Field label="country" name="country" />
          </FormGrid>
          <FormGrid className="mt-10">
            <Button>upload avatar</Button>
            <Button className="bg-[#67dc7e] text-white" type="submit">
              create referral
            </Button>
          </FormGrid>
        </form>
      </FormProvider>
    </Section>
  );
};
