import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IButton {
  className?: string;
  children?: ReactNode
}

export function Button({ className, children }: IButton) {
  return (
    <button
      className={twMerge(
        "bg-zinc-100 text-black flex items-center border px-2 rounded hover:bg-zinc-300 transition-colors",
        className
      )}
    >{children}</button>
  );
}