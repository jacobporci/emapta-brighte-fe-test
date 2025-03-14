import { HTMLProps } from "react";

export const Button = ({
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
