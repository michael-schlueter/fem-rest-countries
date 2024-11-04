import Header from "@/components/Header";
import { useDarkMode } from "@/lib/hooks";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-light-gray dark:bg-dark-blue-200">
      <Header onHandleToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Outlet />
    </div>
  );
}
