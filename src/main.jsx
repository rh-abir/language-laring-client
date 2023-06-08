import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import AuthPorvider from "./provider/AuthPorvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPorvider>
      <ToastContainer position="top-center" autoClose={2000}/>
      <RouterProvider router={router} />
    </AuthPorvider>
  </React.StrictMode>
);
