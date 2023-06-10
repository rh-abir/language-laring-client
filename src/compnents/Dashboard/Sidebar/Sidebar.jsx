import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiLogoutCircleRLine, RiDashboardFill } from "react-icons/ri";
import { BiHomeCircle } from "react-icons/bi";
import InstructorSidebar from "../InstructorSidebar/InstructorSidebar";
import { Link } from "react-router-dom";
import AdminSidbar from "../AdminSidbar/AdminSidbar";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const isUser = {
    roll: "admin",
  };

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300  relative `}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        ></BsArrowLeftShort>

        <div className="inline-flex ">
          <RiDashboardFill
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-right mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          ></RiDashboardFill>
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            {isUser.roll === "instructor" && "Instructor Dashboard"}
            {isUser.roll === "admin" && "Admin Dashboard"}
            {isUser.roll === "student" && "student Dashboard"}
          </h1>
        </div>

        <div className="flex flex-col  space-y-80 gap-10 mt-10">
          {isUser.roll === "instructor" && (
            <InstructorSidebar open={open}></InstructorSidebar>
          )}

          {isUser.roll === "admin" && (
            <AdminSidbar open={open}></AdminSidbar>
          )}

          <ul className="pt-2">
            <li
              className={`text-gray-300 text-sm  items-center cursor-pointer p-2 hover:bg-light-white rounded-md mt-2`}
            >
              <Link to="/" className="flex gap-x-4">
                <span className="text-2xl block float-left">
                  <BiHomeCircle></BiHomeCircle>
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2`}
            >
              <span className="text-2xl block float-left">
                <RiLogoutCircleRLine></RiLogoutCircleRLine>
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
