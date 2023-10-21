import { Outlet, RouteObject } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "@/components/Layout";
import { ROUTE_KEYS } from "@/lib/constants";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";

const PRIVATE_ROUTES: RouteObject[] = [
  { path: ROUTE_KEYS.DASHBOARD, element: <Dashboard /> },
];

const PUBLIC_ROUTES: RouteObject[] = [
  { path: ROUTE_KEYS.HOME, element: <h1>Home</h1> },
  { path: ROUTE_KEYS.LOGIN, element: <Login /> },
  { path: ROUTE_KEYS.SIGNUP, element: <h1>Sign up</h1> },
];

const ROUTES: RouteObject[] = [
  {
    path: ROUTE_KEYS.HOME,
    element: (
      <PublicRoutes>
        <Outlet />
      </PublicRoutes>
    ),
    children: PUBLIC_ROUTES,
  },
  {
    path: ROUTE_KEYS.DASHBOARD,
    element: (
      <PrivateRoutes>
        <Layout />
      </PrivateRoutes>
    ),
    children: PRIVATE_ROUTES,
  },
  {
    path: "*",
    element: <h1>Page not found</h1>,
  },
];

export default ROUTES;
