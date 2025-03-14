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
