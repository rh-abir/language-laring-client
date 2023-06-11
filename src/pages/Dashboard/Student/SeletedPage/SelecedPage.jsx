import { useContext, useEffect, useState } from "react";
import TitleText from "../../../../compnents/TitleText/TitleText";
import { AuthContext } from "../../../../provider/AuthPorvider";
import { getSelectsClass } from "../../../../api/select";
// import { useQueries } from "react-query";

const SelecedPage = () => {
  const { user } = useContext(AuthContext);

  const [selectClass, setSelectClass] = useState([]);
  useEffect(() => {
    getSelectsClass(user?.email).then((data) => {
      console.log("select data", data);

      setSelectClass(data);
    });
  }, [user]);



//   const {refetch, data: selectClass = []} = useQueries({
//     queryKey: ['', user?.email ],
//     querFn: async() => {
//         const res = await fetch(`${import.meta.env.VITE_API_URL}
//         /select/${user?.email}`)
//         return res.json()
//     }
//   })


const handlerDelte = (id) => {
console.log('delete handlaer', id)
}


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
            {selectClass.map((selected, index) => (
              <>
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
                    <button onClick={() => handlerDelte(selected._id)} className="btn btn-outline btn-secondary btn-xs">
                      Delete
                    </button>
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

export default SelecedPage;
