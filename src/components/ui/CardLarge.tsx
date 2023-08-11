import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ICard {
  children?: ReactNode;
  className?: string;
}

export function CardLarge({ children, className }: ICard) {
  return (
    <div
      className={twMerge(
        "w-full min-[780px]:w-[48%] h-80 2xl:h-[30rem] flex flex-col text-2xl border border-white rounded hover:scale-105 hover:transition-transform",
        className
      )}
    >
      {children}
    </div>
  );
}
