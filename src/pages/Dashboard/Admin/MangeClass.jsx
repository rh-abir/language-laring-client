import TitleText from "../../../compnents/TitleText/TitleText";
import { updateClassStatus } from "../../../api/select";
import { useQuery } from "@tanstack/react-query";

const MangeClass = () => {
  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/class`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleApproveClass = (id) => {
    console.log(id);
    updateClassStatus(id, "approve").then((data) => {
      console.log(data);
      refetch();
    });
  };

  const handleDenyClass = (id) => {
    console.log(id);
    updateClassStatus(id, "deny").then((data) => {
      console.log(data);
      refetch();
    });
  };

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
              {allClass?.map((clas, index) => (
                <tr key={clas._id}>
                  <td>
                    {/* TODO : make number dinamic */}
                    {index + 1}
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
                    <button
                      onClick={() => handleApproveClass(clas._id)}
                      className={`btn btn-outline btn-primary btn-xs ${
                        clas.seats === ""
                      }`}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDenyClass(clas._id)}
                      className="btn btn-outline btn-secondary btn-xs"
                    >
                      Deny
                    </button>
                    <button className="btn btn-outline btn-accent btn-xs">
                      feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MangeClass;
