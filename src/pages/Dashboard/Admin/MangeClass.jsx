import { useEffect, useState } from "react";
import { getAllCalss } from "../../../api/class";
import TitleText from "../../../compnents/TitleText/TitleText";

const MangeClass = () => {
  const [allClass, setAllClass] = useState([]);

  useEffect(() => {
    getAllCalss().then((data) => {
      setAllClass(data);
    });
  }, []);

  console.log(allClass);
  return (
    <div className="mx-20 mt-20 ">
      <TitleText text={"Manage Classes"}></TitleText>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th></th>
                <th>Class name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allClass.map((clas) => (
                <>
                  <tr key={clas._id}>
                    <td>
                      {/* TODO : make number dinamic */}
                      {1}
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={clas.imageUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{clas.title}</td>
                    <td>{clas.name} </td>
                    <td>{clas.email} </td>
                    <td>{clas.seats} </td>
                    <td>{clas.price} </td>
                    <td>
                      <button className="btn btn-xs cursor-default">
                        {clas.status}
                      </button>
                    </td>
                    <td className="space-x-3">
                      <button className="btn btn-outline btn-primary btn-xs">
                        Approve
                      </button>
                      <button className="btn btn-outline btn-secondary btn-xs">
                        Deny
                      </button>
                      <button className="btn btn-outline btn-accent btn-xs">
                        feedback
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MangeClass;
