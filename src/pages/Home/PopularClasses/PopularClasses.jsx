import { useContext, useEffect, useState } from "react";
import { getAllCalss } from "../../../api/class";
import TitleText from "../../../compnents/TitleText/TitleText";
import ClassCard from "./ClassCard";
import Container from "../../../compnents/Container/Container";
import { addSelectClass } from "../../../api/select";
import { AuthContext } from "../../../provider/AuthPorvider";
import { toast } from "react-toastify";
// import ClassCard from "./ClassCard";

const PopularClasses = () => {
  const { user } = useContext(AuthContext);

  const [allClases, setAllClasses] = useState([]);

  useEffect(() => {
    getAllCalss().then((data) => {
      setAllClasses(data);
    });
  }, []);

  console.log(allClases);

  const handleSelect = (seleted) => {
    const selected = seleted;
    const seletedClassInfo = {
      student: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
      ...selected,
    };
    console.log("hello", seletedClassInfo);
    addSelectClass(seletedClassInfo).then((data) => {
      console.log(data);
      if(data.insertedId){
        toast.success('Selected your Class !')
      }
    });
  };

  return (
    <div className="my-20">
      <TitleText text="Our Popular Classes"></TitleText>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 ">
          {allClases.map((cls) => (
            <ClassCard
              key={cls._id}
              cls={cls}
              handleSelect={handleSelect}
            ></ClassCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;
