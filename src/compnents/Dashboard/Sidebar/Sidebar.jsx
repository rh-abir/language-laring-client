import { useContext, useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiLogoutCircleRLine, RiDashboardFill } from "react-icons/ri";
import { BiHomeCircle } from "react-icons/bi";
import InstructorSidebar from "../InstructorSidebar/InstructorSidebar";
import { Link } from "react-router-dom";
import AdminSidbar from "../AdminSidbar/AdminSidbar";
import { getRole } from "../../../api/auth";
import { AuthContext } from "../../../provider/AuthPorvider";
import StudentSidbar from "../StudentSidbar/StudentSidbar";

const Sidebar = () => {

  const {user} = useContext(AuthContext)
  console.log(user)

  const [open, setOpen] = useState(true);

  const [role, setRole] = useState();
  useEffect(() => {
    getRole(user?.email)
    .then(data => {
      setRole(data)
      console.log('sidebar user',data)
    })
  }, [user])

console.log(role)

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
            className={`text-white origin-left font-medium  duration-300 ${
              !open && "scale-0"
            }`}
          >
            {role?.role === "instructor" && "Instructor Dashboard"}
            {role?.role === "admin" && "Admin Dashboard"}
            {role?.role === "student" && "Student Dashboard"}
          </h1>
        </div>

        <div className="flex flex-col  space-y-80 gap-10 mt-10">
          {role?.role === "instructor" && (
            <InstructorSidebar open={open}></InstructorSidebar>
          )}

          {role?.role === "admin" && (
            <AdminSidbar open={open}></AdminSidbar>
          )}

          {role?.role === "student" && (
            <StudentSidbar open={open}></StudentSidbar>
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
