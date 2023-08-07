import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ISubTitle {
  children?: ReactNode;
  className?: string;
}

export function SubTitle({ children, className }: ISubTitle) {
  return (
    <h2 className={twMerge("text-lg xs:text-2xl 2xl:text-4xl font-bold py-2", className)}>
      {children}
    </h2>
  );
}
