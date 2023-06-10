import { useContext } from "react";
import { AuthContext } from "../provider/AuthPorvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <span className="loading loading-ring loading-md"></span>
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/signin" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRouter;
