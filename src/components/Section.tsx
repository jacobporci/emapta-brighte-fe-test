import { HTMLProps } from "react";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
}) => <div className={`col-span-1 p-10 gap-y-4 ${className}`}>{children}</div>;
