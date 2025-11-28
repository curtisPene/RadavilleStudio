import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { AboutPage } from "@/features/about/pages/AboutPage";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <div>Home</div>,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
