import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

import SignUp from "../pages/Authentication/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import PrivateRouter from "./PrivateRouter";
import DashboardLayout from "../Layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <p>This is Error page</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/signin", element: <SignIn></SignIn> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
  },
]);

export default router;
