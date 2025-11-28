import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";

export const AppRouter = () => {
  const router = createBrowserRouter([{ path: "/", element: <h1>Home</h1> }]);

  return <RouterProvider router={router} />;
};
