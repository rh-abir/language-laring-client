import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

import SignUp from "../pages/Authentication/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard/Dashboard";

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
      { path: "/instructors", element: <PrivateRouter><Instructors></Instructors></PrivateRouter> },
      { path: "/classes", element: <PrivateRouter><Classes></Classes></PrivateRouter> },
      { path: "/dashboard", element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter> },
    ],
  },
]);

export default router;
