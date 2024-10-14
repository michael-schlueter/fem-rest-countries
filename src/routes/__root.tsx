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
      <header className="bg-white flex justify-between items-baseline px-4 py-[30px] shadow-md">
        <h1 className="text-lg font-extrabold">Where in the world?</h1>
        <button className="flex gap-2">
          <Moon className="h-4 w-4 text-dark-blue-300" />

          <span className="text-sm font-semibold">Dark Mode</span>
        </button>
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
