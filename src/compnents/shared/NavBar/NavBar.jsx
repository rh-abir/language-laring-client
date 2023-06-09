import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthPorvider";

import avator from "../../../assets/img/avator.jpg";
import logo from "../../../assets/img/logo.png";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navlink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/">Instructors</Link>
      </li>
      <li>
        <Link to="/">Classes</Link>
      </li>
      {user && (
        <li>
          <Link to="/">Dashboard</Link>
        </li>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log()
        toast.success("LogOut Successfully !");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(user);

  return (
    <div className="bg-base-200 shadow-lg h-20">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {navlink}
            </ul>
          </div>
          <Link to="/" className="">
            <img className="w-7/12" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          {/* uesr profile */}
          {!user ? (
            <button className="btn btn-primary btn-outline">
              <Link to="signIn">Log In</Link>
            </button>
          ) : (
            <div className="flex-none z-10">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user ? user?.photoURL : avator} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {user && (
                    <>
                      <li>
                        <Link className="justify-between">Dashboard</Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleLogOut}
                          className="justify-between"
                        >
                          Log Out
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
