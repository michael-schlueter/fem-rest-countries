import Header from "@/components/Header";
import NotFound from "@/components/NotFound";
import { useDarkMode } from "@/lib/hooks";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () =>  <NotFound type="Page" />,
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
