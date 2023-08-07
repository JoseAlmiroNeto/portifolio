import { twMerge } from "tailwind-merge";

interface IInput {
  className?: string;
  placeholder?: string;
  type?: string;
}

export function Input({ className, placeholder, type }: IInput) {
  return (
    <input
      type={type}
      className={twMerge(
        "w-full bg-transparent border border-zinc-100 rounded p-1",
        className
      )}
      placeholder={placeholder}
    />
  );
}
