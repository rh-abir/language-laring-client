import { useContext } from "react";
import TitleText from "../../../../compnents/TitleText/TitleText";
import { AuthContext } from "../../../../provider/AuthPorvider";
import { useQuery } from "@tanstack/react-query";
import { deleteSelectClass } from "../../../../api/select";
import ModalPayment from "../../../../compnents/Mordel/ModalPayment";
import { toast } from "react-toastify";

const SelecedPage = () => {
  const { user } = useContext(AuthContext);

  const { data: selectClass = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/select/${user?.email}`);

      const data = await res.json();
      return data;
    },
  });

  //  TODO don't to delete

  // console.log(selectClass);

  const handlerDelte = (id) => {
   
    console.log("delete handlaer", id);

    deleteSelectClass(id).then((data) => {
      console.log(data);
      if(data.deletedCount){
        toast.success('Delete successfull')
        refetch()
      }
    });
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
                  <ModalPayment
                    index={index}
                    money={selected.price}
                    product={selected}
                  ></ModalPayment>
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
