import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { AboutPage } from "@/features/about/pages/AboutPage";
import { CurationPage } from "@/features/curation/pages/CurationPage";
import { CarouselPage } from "@/features/carousel/pages/CarouselPage";
import { ContactPage } from "@/features/contact/pages/ContactPage";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <CarouselPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/curation",
          element: <CurationPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
