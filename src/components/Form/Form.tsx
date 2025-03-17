"use client";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { SubHeader } from "@/components/SubHeader";
import { useCreateReferral } from "@/hooks/useCreateReferral";
import { Referral } from "@prisma/client";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";
import { Field, FormGrid } from "./components";
import { useEffect } from "react";
import { useUpdateReferral } from "@/hooks/useUpdateReferral";
import { useReferrals } from "@/hooks/useReferrals";
import { useQueryClient } from "@tanstack/react-query";

type tForm = {
  referral?: Referral;
  onReset: () => void;
};

const DEFAULT_VALUES: Partial<Referral> = {
  givenName: "",
  surname: "",
  email: "",
  phone: "",
  homeNameOrNumber: "",
  street: "",
  suburb: "",
  state: "",
  postcode: "",
  country: "",
};

export const Form = ({ referral, onReset }: tForm) => {
  const queryClient = useQueryClient();
  const { mutate: createReferralMutation } = useCreateReferral();
  const { mutate: updateReferralMutation } = useUpdateReferral();
  const { data } = useReferrals();

  const form = useForm<Referral>({ defaultValues: DEFAULT_VALUES });
  const givenName = useWatch({ control: form.control, name: "givenName" });
  const surname = useWatch({ control: form.control, name: "surname" });
  const email = useWatch({ control: form.control, name: "email" });
  const phone = useWatch({ control: form.control, name: "phone" });

  useEffect(() => {
    form.reset(referral ?? DEFAULT_VALUES);
  }, [form, referral]);

  useEffect(() => {
    if (referral && data) {
      const index = data?.findIndex(({ id }) => id === referral.id);

      const referralData = {
        ...data?.[index],
        givenName,
        surname,
        email,
        phone,
      };

      queryClient.setQueryData(["referrals"], (oldData: Referral[]) => {
        const newData = [...oldData];
        newData[index] = referralData;
        return newData;
      });
    }
  }, [data, givenName, queryClient, referral, surname, email, phone]);

  const handleSubmit: SubmitHandler<Referral> = (data) => {
    if (referral?.id) {
      updateReferralMutation(data);
    } else {
      createReferralMutation(data);
    }
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
          <div className="flex flex-col md:flex-row mt-10 gap-4">
            <Button>upload avatar</Button>
            <Button className="bg-[#67dc7e] text-white" type="submit">
              {referral ? "update referral" : "create referral"}
            </Button>
          </div>
          <Button
            className="mt-4 md:w-full text-red-500"
            onClick={(e) => {
              e.preventDefault();
              onReset();
            }}
          >
            Reset
          </Button>
        </form>
      </FormProvider>
    </Section>
  );
};
