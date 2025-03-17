import { Form } from "@/components/Form/Form";
import { Table } from "@/components/Table/Table";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-screen text-[#aeaeae]">
      <Form />
      <Table />
    </div>
  );
}
