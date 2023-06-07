import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/Authentication/Signin/Signin";
import SignUp from "../pages/Authentication/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <p>This is Error page</p>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {path: '/signin', element: <SignIn></SignIn>},
      {path: '/signup', element: <SignUp></SignUp>}

    ]
  },
]);

export default router;
