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
        "h-16 flex items-center justify-center border border-white rounded cursor-default hover:scale-105 hover:transition-transform",
        className
      )}
    >
      {children}
    </div>
  );
}
