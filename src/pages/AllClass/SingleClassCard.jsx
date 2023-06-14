import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthPorvider";
import { getRole } from "../../api/auth";

const SingleClassCard = ({ clas, handleSelect }) => {
  const { user } = useContext(AuthContext);

  const [role, setRole] = useState();
  useEffect(() => {
    getRole(user?.email).then((data) => {
      setRole(data);
      // console.log('sidebar user',data)
    });
  }, [user]);


  
  const enroll = clas.enroll;
  const seats = clas.seats;
  
  console.log(enroll, seats)

  return (
    <div className={`card card-compact w-full ${enroll === seats ? "bg-red-500" : "bg-base-100"} shadow-xl`}>
      <figure>
        <img src={clas.imageUrl} alt="image" className="w-full h-[250px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{clas?.title ? clas?.title : "no title"}</h2>
        <h2 className="">Instructor: {clas.name}</h2>
        {/* <h2 className="card-title">$ {}</h2> */}
        <p> $ {clas.price}</p>
        
        <div className="card-actions justify-end">
          {role?.role === "admin" || role?.role === "instructor" ? (
            <button className="btn btn-outline btn-xs " disabled>
              book
            </button>
          ) : (
            <button
              onClick={() => handleSelect(clas)}
              className="btn btn-outline btn-xs "
            >
              book
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleClassCard;
