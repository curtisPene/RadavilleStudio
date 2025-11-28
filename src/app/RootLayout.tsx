import { Header } from "@/components/header/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <PageWrapper
      data-rootlayout
      className="relative min-h-screen bg-neutral-800"
    >
      <Header />
      <Outlet />
    </PageWrapper>
  );
};
