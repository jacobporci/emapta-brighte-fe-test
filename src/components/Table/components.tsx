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
}) => (
  <td className="text-left py-3 px-1 text-ellipsis whitespace-nowrap overflow-hidden">
    {children}
  </td>
);

type tActions = {
  onEdit: () => void;
  onDelete: () => void;
  disabled?: boolean;
};

export const Actions = ({ onEdit, onDelete, disabled }: tActions) => (
  <div className="flex gap-2 text-gray-400 max-w-1/4">
    <button onClick={() => onEdit()} disabled={disabled}>
      <Edit2 />
    </button>
    <button onClick={() => onDelete()} disabled={disabled}>
      <Trash2 />
    </button>
  </div>
);
