import { lazy } from "react";
const Home = lazy(() => import("@/pages/home/page"));
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
];
