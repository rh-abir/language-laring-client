import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";

import SignIn from "../pages/Authentication/SignIn/SignIn";
import PrivateRouter from "./PrivateRouter";
import DashboardLayout from "../Layout/DashboardLayout";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import MangeClass from "../pages/Dashboard/Admin/MangeClass";
import ManageUser from "../pages/Dashboard/Admin/ManageUser";
import AllClass from "../pages/AllClass/AllClass";

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
        element: <AllClass></AllClass>,
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
    children: [
      {
        path: "/dashboard/myclass",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },

      // adim route
      {
        path: "manageclass",
        element: <MangeClass></MangeClass>,
      },
      {
        path: "manageuser",
        element: <ManageUser></ManageUser>,
      },
    ],
  },
]);

export default router;
