import { twMerge } from "tailwind-merge";

interface ISeparetor {
  className?: string;
}

export function Separetor({ className }: ISeparetor) {
  return (
    <div className={twMerge("w-20 h-1 border", className)} />
  );
}
