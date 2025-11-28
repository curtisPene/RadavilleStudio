import { PageWrapper } from "@/components/PageWrapper";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <PageWrapper className="data-root-layout min-h-screen">
      <Outlet />
    </PageWrapper>
  );
};
