import { useContext, useEffect, useState } from "react";
import TitleText from "../../../../compnents/TitleText/TitleText";
import { AuthContext } from "../../../../provider/AuthPorvider";
// import { useQuery } from "@tanstack/react-query";
// import { deleteSelectClass } from "../../../../api/select";

const SelecedPage = () => {
  const { user } = useContext(AuthContext);

  // const { data: selectClass = [], refetch } = useQuery({
  //   queryKey: ["select", user?.email],

  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/select/${user?.email}`);
  //     const data = await res.json();
  //     // console.log("res from axios", data);
  //     return data;
  //   },
  // });


const [selectClass, setSelectClass] = useState([])

useEffect(() => {
  fetch(`http://localhost:5000/select/${user?.email}`)
  .then(res => res.json())
  .then(data => {
    setSelectClass(data)
  })
}, [user])


//  TODO don't to delete 

  // console.log(selectClass);

  const handlerDelte = (id) => {
    console.log("delete handlaer", id);

    fetch(`http://localhost:5000/selects/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  };

  return (
    <div className="mx-20 mt-20 ">
      <TitleText text={"My Seleted Class"}></TitleText>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Course Name</th>
              <th>Instore Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {selectClass?.map((selected, index) => (
              <tr key={selected._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={selected.imageUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{selected.className}</td>
                <td>{selected.name}</td>
                <td>
                  <button className="btn btn-xs cursor-default">
                    $ {selected.price}
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline btn-primary btn-xs">
                    Pay
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handlerDelte(selected?._id)}
                    className="btn btn-outline btn-secondary btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelecedPage;
