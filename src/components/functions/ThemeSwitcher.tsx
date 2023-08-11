"use client";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

interface ThemeSwitcherProps {
  initialTheme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
}

export function ThemeSwitcher({
  initialTheme,
  onThemeChange,
}: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<"dark" | "light">(initialTheme);

  useEffect(() => {
    document.documentElement.classList.add(
      theme === "dark" ? "dark-theme" : "light-theme"
    );
    document.documentElement.classList.remove(
      theme === "dark" ? "light-theme" : "dark-theme"
    );
    onThemeChange(theme);
  }, [theme, onThemeChange]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <label className="cursor-pointer absolute top-0 right-0 p-7">
      <input
        className="hidden"
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span>{theme === "dark" ? <BsSunFill className="h-6 w-6" /> : <BsFillMoonStarsFill className="h-6 w-6" />}</span>
    </label>
  );
}
