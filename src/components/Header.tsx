import { Link } from "@tanstack/react-router";
import { Moon } from "lucide-react";

type HeaderProps = {
  onHandleToggleDarkMode: () => void;
};

export default function Header({ onHandleToggleDarkMode }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-dark-blue-400 flex justify-between px-4 lg:px-20 py-[30px] shadow-custom-2">
      <Link to="/" className="text-lg md:text-2xl text-dark-blue-300 dark:text-white font-extrabold">
        Where in the world?
      </Link>
      <button
        onClick={onHandleToggleDarkMode}
        className="flex gap-2 items-center text-dark-blue-300 dark:text-white"
        aria-label="Toggle Dark Mode"
      >
        <Moon className="h-4 w-4 md:h-5 md:w-5 dark:fill-white" />

        <span className="text-sm md:text-xl font-semibold">Dark Mode</span>
      </button>
    </header>
  );
}
