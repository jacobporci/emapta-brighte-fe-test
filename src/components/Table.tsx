import { Edit2, Trash2 } from "react-feather";

export const TableHeader = ({ children }: { children: string }) => (
  <th className="text-left">{children}</th>
);

export const TableRow = ({ children }: { children: React.ReactNode[] }) => (
  <tr className="border-b-1 border-gray-300">{children}</tr>
);

export const TableCell = ({
  children,
}: {
  children: string | React.ReactNode;
}) => <td className="text-left py-3">{children}</td>;

export const Actions = () => (
  <div className="flex gap-2 text-gray-400">
    <button>
      <Edit2 />
    </button>
    <button>
      <Trash2 />
    </button>
  </div>
);
