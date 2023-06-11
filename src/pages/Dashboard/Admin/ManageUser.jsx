import { useEffect, useState } from "react";
import { getAlluser } from "../../../api/auth";
import TitleText from "../../../compnents/TitleText/TitleText";

const ManageUser = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    getAlluser().then((data) => {
      setAllUser(data);
    });
  }, []);

  console.log(allUser);

  return (
    <div className="mx-20 mt-20 ">
      <TitleText text={"Manage A User"}></TitleText>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUser.map((user, index) => (
              <>
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-xs cursor-default">
                      {user.roll}
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline btn-secondary btn-xs">
                      Instructor
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline btn-primary btn-xs">Admin</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
