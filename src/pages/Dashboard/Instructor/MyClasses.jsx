import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthPorvider";
import { getClassByUSer } from "../../../api/class";
import MyClassRow from "./MyClassRow";
import TitleText from "../../../compnents/TitleText/TitleText";

const MyClasses = () => {

    const {user} = useContext(AuthContext)

    const [classes, setClasse] = useState([])

    console.log(user.email)

    useEffect(() => {
      getClassByUSer(user?.email)
      .then(data => {
        setClasse(data)
      })
    }, [user])

    console.log(classes)



  return (
    <div className="mx-20 mt-20">
      <TitleText text="My Classes"></TitleText>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th> Title</th>
              <th>Total Enroll</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              classes.map(cls => <MyClassRow
                key={cls._id}
                cls ={cls}

              ></MyClassRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
