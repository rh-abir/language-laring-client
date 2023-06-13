import { useQuery } from "@tanstack/react-query";
import TitleText from "../../../../compnents/TitleText/TitleText";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthPorvider";


const EnrollPage = () => {

  const {user} = useContext(AuthContext)
    const {data : PaymetClass =[] } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/payment/${user.email}`);
          const data = await res.json();
          return data;
        },
      });

      console.log(PaymetClass)

    return (
        <div className="mx-20 mt-20 ">
            <TitleText text={"My Enroll Classs"}></TitleText>
            <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th></th>
                <th>Class name</th>
                <th></th>
                <th className="text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {PaymetClass.map((clas, index) => (
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
                            src={clas.product.imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{clas.product.className}</td>
                  <td>{clas.name} </td>
                  <td className="text-center">{clas.product.price}</td>
                  <td></td>
                  <td></td>
                  <td></td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default EnrollPage;