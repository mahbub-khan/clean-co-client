import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/Routes.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={myRoutes}></RouterProvider>
      </AuthProviders>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
