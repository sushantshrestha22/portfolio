import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Layout from "@/layout/layout";
import Error from "@/common/error";
import NotFound from "@/common/not-found";
import Loading from "@/common/loading";
import { lazy } from "react";
import { routes } from "./routes/routes";

const Home = lazy(() => import("@/pages/home/page"));

const withSuspense = (Component: any) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

const adminOnlyRoutes: any[] = [
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: withSuspense(Home),
      },
    ],
  },
  ...routes,
];

const router = createBrowserRouter([
  {
    element: <NotFound />,
    path: "*",
  },
  ...adminOnlyRoutes,
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
