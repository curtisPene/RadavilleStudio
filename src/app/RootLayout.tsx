import { Header } from "@/components/header/Header";
import { useRef } from "react";
import { Outlet, useLocation } from "react-router";

const styleMap = {
  "/": {
    bgColor: "var(--color-carousel-bg)",
    fillColor: "var(--color-carousel-text)",
  },
  "/about": {
    bgColor: "var(--color-about-bg)",
    fillColor: "var(--color-about-text)",
  },
  "/curation": {
    bgColor: "var(--color-curation-bg)",
    fillColor: "var(--color-curation-text)",
  },
  "/contact": {
    bgColor: "var(--color-contact-bg)",
    fillColor: "var(--color-contact-text)",
  },
};

export const RootLayout = () => {
  const { pathname } = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

  const colors = styleMap[pathname as keyof typeof styleMap] || {};

  return (
    <div
      ref={pageRef}
      data-rootlayout
      className="relative min-h-screen"
      style={{ backgroundColor: colors.fillColor }}
    >
      <Header fillColor={colors.fillColor} backgroundColor={colors.bgColor} />
      <Outlet />
    </div>
  );
};
