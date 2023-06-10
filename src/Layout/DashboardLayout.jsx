import { Outlet } from "react-router-dom";
import Sidebar from "../compnents/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="w-2/12"> <Sidebar></Sidebar></div>
      <div className="w-10/12 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
