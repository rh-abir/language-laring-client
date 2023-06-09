import { useContext } from "react";
import { AuthContext } from "../provider/AuthPorvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56 mx-auto bg-red-600"></progress>;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/signin" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRouter;
