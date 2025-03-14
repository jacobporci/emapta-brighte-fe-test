import { HTMLProps } from "react";

export const FormGrid = ({
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

export const Field = ({ label, name }: { label: string; name: string }) => (
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
