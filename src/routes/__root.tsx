import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Moon } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen bg-light-gray">
      <header className="bg-white flex justify-between items-baseline px-4 lg:px-20 py-[30px] shadow-md">
        <h1 className="text-lg md:text-2xl font-extrabold">Where in the world?</h1>
        <button className="flex gap-2 items-center">
          <Moon className="h-4 w-4 md:h-5 md:w-5 text-dark-blue-300" />

          <span className="text-sm md:text-xl font-semibold">Dark Mode</span>
        </button>
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
