import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layout/layout";
import Error from "@/common/error";
import NotFound from "@/common/not-found";
import { routes } from "./routes/routes";
import { ThemeProvider } from "./components/theme-provider";

const adminOnlyRoutes: any[] = [
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [...routes],
  },
];

const router = createBrowserRouter([
  {
    element: <NotFound />,
    path: "*",
  },
  ...adminOnlyRoutes,
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
