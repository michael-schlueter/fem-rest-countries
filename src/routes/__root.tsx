import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-light-gray dark:bg-dark-blue-200">
      <header className="bg-white dark:bg-dark-blue-400 flex justify-between px-4 lg:px-20 py-[30px] shadow-custom-2">
        <h1 className="text-lg md:text-2xl text-dark-blue-300 dark:text-white font-extrabold">
          Where in the world?
        </h1>
        <button
          onClick={handleToggleDarkMode}
          className="flex gap-2 items-center text-dark-blue-300 dark:text-white"
        >
          <Moon className="h-4 w-4 md:h-5 md:w-5 dark:fill-white" />

          <span className="text-sm md:text-xl font-semibold">Dark Mode</span>
        </button>
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
