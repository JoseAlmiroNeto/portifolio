import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ICard {
  children?: ReactNode;
  className?: string;
}

export function Card({ children, className }: ICard) {
  return (
    <div
      className={twMerge(
        "h-16 flex items-center justify-center text-xl 2xl:text-2xl border border-white rounded cursor-default",
        className
      )}
    >
      {children}
    </div>
  );
}
