import { ButtonHTMLAttributes, HTMLProps } from "react";

export const Button = ({
  children,
  className,
  ...props
}: {
  children: string;
  className?: HTMLProps<HTMLElement>["className"];
} & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`w-full md:w-1/2 shadow-1 p-5 uppercase border-1 border-gray-300 shadow-lg font-bold rounded-sm ${className}`}
    {...props}
  >
    {children}
  </button>
);
