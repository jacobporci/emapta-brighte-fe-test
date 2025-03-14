import { HTMLProps } from "react";
import { Edit2, Trash2 } from "react-feather";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
}) => <div className={`col-span-1 p-10 gap-y-4 ${className}`}>{children}</div>;

const FormGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
}) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-5 ${className}`}>
    {children}
  </div>
);

const Field = ({ label, name }: { label: string; name: string }) => (
  <div className="col-span-1 mt-5">
    <label htmlFor="name" className="uppercase text-sm">
      {label}
    </label>
    <input
      className="border-1 border-gray-400 rounded-sm p-2 w-full"
      type="text"
      id={name}
      name={name}
    />
  </div>
);

const SubHeader = ({ label }: { label: string }) => (
  <h2 className="text-md uppercase font-bold border-b-gray-300 border-b-1 mt-5 pb-2">
    {label}
  </h2>
);

const TableHeader = ({ children }: { children: string }) => (
  <th className="text-left">{children}</th>
);

const TableRow = ({ children }: { children: React.ReactNode[] }) => (
  <tr className="border-b-1 border-gray-300">{children}</tr>
);

const TableCell = ({ children }: { children: string | React.ReactNode }) => (
  <td className="text-left py-3">{children}</td>
);
const Actions = () => (
  <div className="flex gap-2 text-gray-400">
    <button>
      <Edit2 />
    </button>
    <button>
      <Trash2 />
    </button>
  </div>
);

const Button = ({
  children,
  className,
}: {
  children: string;
  className?: HTMLProps<HTMLElement>["className"];
}) => (
  <button
    className={`col-span-1 shadow-1 p-5 uppercase border-1 border-gray-300 shadow-lg font-bold rounded-sm ${className}`}
  >
    {children}
  </button>
);
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
