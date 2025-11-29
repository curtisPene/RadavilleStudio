import { Header } from "@/components/header/Header";

import { Outlet, useLocation } from "react-router";

export const RootLayout = () => {
  const { pathname } = useLocation();

  const styleMap = {
    "/about": {
      bgColor: "var(--color-about-bg)",
      fillColor: "var(--color-about-text)",
    },
    "/curation": {
      bgColor: "var(--color-curation-bg)",
      fillColor: "var(--color-curation-text)",
    },
  };

  const colors = styleMap[pathname as keyof typeof styleMap] || {};

  return (
    <div
      data-rootlayout
      className="relative min-h-screen"
      style={{ backgroundColor: colors.fillColor }}
    >
      <Header fillColor={colors.fillColor} backgroundColor={colors.bgColor} />
      <Outlet />
    </div>
  );
};
