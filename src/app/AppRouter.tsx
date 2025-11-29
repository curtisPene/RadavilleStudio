import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { AboutPage } from "@/features/about/pages/AboutPage";
import { CurationPage } from "@/features/curation/pages/CurationPage";

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
        {
          path: "/curation",
          element: <CurationPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
