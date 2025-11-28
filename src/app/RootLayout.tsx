import { Header } from "@/components/header/Header";
import { cn } from "@/lib/cn";

import { Outlet, useLocation } from "react-router";

export const RootLayout = () => {
  const { pathname } = useLocation();
  return (
    <div
      data-rootlayout
      className={cn(
        "relative min-h-screen",
        pathname === "/about" && "bg-about-bg"
      )}
    >
      <Header />
      <Outlet />
    </div>
  );
};
