import { IoIosAddCircleOutline } from "react-icons/io";
import { MdStorage } from "react-icons/md";
import { Link } from "react-router-dom";

const StudentSidbar = ({ open }) => {
    return (
        <>
        <ul className="pt-2">
          <li
            className={`text-gray-300 text-sm  items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2`}
          >
            <Link to="selected" className="flex gap-x-4">
              <span className="text-2xl block float-left">
                <IoIosAddCircleOutline></IoIosAddCircleOutline>
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                My Selected Classes
              </span>
            </Link>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center  cursor-pointer p-2 hover:bg-light-white rounded-md mt-2`}
          >
            <Link to="enroll" className="flex gap-x-4 ">
              <span className="text-2xl block float-left">
                <MdStorage></MdStorage>
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                My Enrolled Classes
              </span>
            </Link>
          </li>
        </ul>
      </>
    );
};

export default StudentSidbar;