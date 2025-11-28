import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";

export const AppRouter = () => {
  const router = createBrowserRouter([
    { path: "/", element: <RootLayout />, children: [] },
  ]);

  return <RouterProvider router={router} />;
};
