import { useContext, useEffect, useState } from "react";
import TitleText from "../../compnents/TitleText/TitleText";
import { getAllApproveCalss } from "../../api/class";
import SingleClassCard from "./SingleClassCard";
import { addSelectClass } from "../../api/select";
import { AuthContext } from "../../provider/AuthPorvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllClass = () => {
  const { user } = useContext(AuthContext);

  const naviget = useNavigate();

  const [allClass, setAllClass] = useState([]);
  useEffect(() => {
    getAllApproveCalss().then((data) => {
      setAllClass(data);
    });
  }, []);

  console.log(allClass);

  const handleSelect = (seleted) => {

    const {_id, ...rest}  = seleted;

    if (!user?.email) {
      return naviget("/signin");
    }

    const seletedClassInfo = {
      student: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
      ...rest,
    };
    console.log("hello", seletedClassInfo);
    addSelectClass(seletedClassInfo).then((data) => {
      console.log(data);
      if (data.insertedId) {
        toast.success("Selected your Class !");
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-20">
      <TitleText text={"All Class"}></TitleText>

      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
        {allClass.map((clas) => (
          <SingleClassCard
            key={clas._id}
            clas={clas}
            handleSelect={handleSelect}
          ></SingleClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
