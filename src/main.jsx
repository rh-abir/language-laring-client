import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import AuthPorvider from "./provider/AuthPorvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthPorvider>
        <ToastContainer position="top-center" autoClose={2000} />
        <RouterProvider router={router} />
      </AuthPorvider>
    </QueryClientProvider>
  </React.StrictMode>
);
