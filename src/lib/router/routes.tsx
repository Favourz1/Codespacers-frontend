import { RouteObject } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "@/components/Layout";
import { ROUTE_KEYS } from "@/lib/constants";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/Login";
import Budget from "@/pages/budget";
import ExpenseRecords from "@/pages/expense-records";
import Subscriptions from "@/pages/subscriptions";
import TrackExpenditure from "@/pages/track-expenditure";
import Home from "@/pages/Home";
import HomeLayout from "@/components/HomeLayout";
import AuthLayout from "@/components/AuthLayout";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";

const PRIVATE_ROUTES: RouteObject[] = [
  { path: ROUTE_KEYS.DASHBOARD, element: <Dashboard /> },
  { path: ROUTE_KEYS.BUDGET, element: <Budget /> },
  { path: ROUTE_KEYS.SUBSCRIPTIONS, element: <Subscriptions /> },
  { path: ROUTE_KEYS.EXPENSE_RECORDS, element: <ExpenseRecords /> },
  { path: ROUTE_KEYS.TRACK_EXPENDITURE, element: <TrackExpenditure /> },
];

const AUTH_ROUTES: RouteObject[] = [
  { path: ROUTE_KEYS.LOGIN, element: <Login /> },
  { path: ROUTE_KEYS.SIGNUP, element: <Signup /> },
  { path: ROUTE_KEYS.FORGOT_PASSWORD, element: <ForgotPassword /> },
];
const PUBLIC_ROUTES: RouteObject[] = [
  { path: ROUTE_KEYS.HOME, element: <Home /> },
];

const ROUTES: RouteObject[] = [
  {
    path: ROUTE_KEYS.HOME,
    element: (
      <PublicRoutes>
        <HomeLayout />
      </PublicRoutes>
    ),
    children: PUBLIC_ROUTES,
  },
  {
    path: ROUTE_KEYS.ONBOARDING,
    element: (
      <PrivateRoutes>
        <AuthLayout />
      </PrivateRoutes>
    ),
    children: AUTH_ROUTES,
  },
  {
    path: ROUTE_KEYS.AUTH_ROOT,
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
