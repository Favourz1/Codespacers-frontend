import "@/assets/styles/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "@/lib/router/routes";
import { AuthProvider } from "@/lib/context/Auth";
import { ConfigProvider } from "antd";

const router = createBrowserRouter(ROUTES);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#163a5f",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </AuthProvider>
  </React.StrictMode>
);
