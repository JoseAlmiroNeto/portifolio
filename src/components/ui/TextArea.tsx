import { twMerge } from "tailwind-merge";

interface ITextArea {
  className?: string;
  placeholder?: string;
  rows?: number;
}

export function TextArea({ className, placeholder, rows }: ITextArea) {
  return (
    <textarea
      className={twMerge(
        "w-full bg-transparent border border-zinc-100 rounded p-1 resize-none",
        className
      )}
      placeholder={placeholder}
      rows={rows}
    />
  );
}
