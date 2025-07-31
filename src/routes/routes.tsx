import Loading from "@/common/loading";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("@/pages/home/page"));
const Projects = lazy(() => import("@/pages/Projects/page"));
const Education = lazy(() => import("@/pages/education/page"));
const Experience = lazy(() => import("@/pages/Experience/page"));
const Contact = lazy(() => import("@/pages/Contact/page"));
const Skills = lazy(() => import("@/pages/Skills/page"));

const withSuspense = (Component: any) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);
export const routes = [
  {
    path: "/",
    element: withSuspense(Home),
  },
  {
    path: "/home",
    element: withSuspense(Home),
  },
  {
    path: "/education",
    element: withSuspense(Education),
  },
  {
    path: "/experience",
    element: withSuspense(Experience),
  },
  {
    path: "/contact",
    element: withSuspense(Contact),
  },
  {
    path: "/skills",
    element: withSuspense(Skills),
  },
  {
    path: "/projects",
    element: withSuspense(Projects),
  },
];
