import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { FormGrid } from "@/components/FormGrid";
import { Section } from "@/components/Section";
import { SubHeader } from "@/components/SubHeader";
import { Actions, TableCell, TableHeader, TableRow } from "@/components/Table";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-screen text-[#aeaeae]">
      <Section>
        <h1 className="text-3xl font-extrabold text-black">Referral Builder</h1>
        <SubHeader label="personal details" />
        <FormGrid>
          <Field label="GIVEN NAME" name="givenName" />
          <Field label="SURNAME" name="surname" />
          <Field label="EMAIL" name="email" />
          <Field label="PHONE" name="phone" />
        </FormGrid>
        <SubHeader label="address" />
        <FormGrid>
          <Field label="HOME NAME OR #" name="givenName" />
          <Field label="STREET" name="givenName" />
          <Field label="suburb" name="givenName" />
          <Field label="state" name="givenName" />
          <Field label="postcode" name="givenName" />
          <Field label="country" name="givenName" />
        </FormGrid>
        <FormGrid className="mt-10">
          <Button>upload avatar</Button>
          <Button className="bg-[#67dc7e] text-white">create referral</Button>
        </FormGrid>
      </Section>
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
              <TableRow>
                <TableCell>John</TableCell>
                <TableCell>Johnson</TableCell>
                <TableCell>jh@email.com</TableCell>
                <TableCell>1233-233-333</TableCell>
                <TableCell>
                  <Actions />
                </TableCell>
              </TableRow>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
