import {  useEffect, useState } from "react";
import { getAlluser, makeInstructor } from "../../../api/auth";
import TitleText from "../../../compnents/TitleText/TitleText";
// import { AuthContext } from "../../../provider/AuthPorvider";

const ManageUser = () => {

  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    getAlluser().then((data) => {
      setAllUser(data);
    });
  }, []);

  console.log(allUser);


  const handlemakeInstructor = (email) => {
    console.log(email)
    makeInstructor(email)
    .then(data => {
      console.log(data)
    })
  }




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
            {allUser.map((users, index) => (
              
                <tr key={users._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={users.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>
                    <button className="btn btn-xs cursor-default">
                      {users.role}
                    </button>
                  </td>
                  <td>
                    {users.role === 'admin' ? '' : <button onClick={() => handlemakeInstructor(users.email)} className="btn btn-outline btn-secondary btn-xs">
                      Instructor
                    </button>}
                  </td>
                  <td>
                    { users.role === 'admin' ? '' : <button className="btn btn-outline btn-primary btn-xs">Admin</button>}
                  </td>
                </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
