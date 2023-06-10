import { useEffect, useState } from "react";
import { getAllCalss } from "../../../api/class";
import TitleText from "../../../compnents/TitleText/TitleText";
import ClassCard from "./ClassCard";
import Container from "../../../compnents/Container/Container";
// import ClassCard from "./ClassCard";

const PopularClasses = () => {
  const [allClases, setAllClasses] = useState([]);

  useEffect(() => {
    getAllCalss().then((data) => {
      setAllClasses(data);
    });
  }, []);

  console.log(allClases);

  return (
    <div className="my-20">
      <TitleText text="Our Popular Classes"></TitleText>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 ">
          {allClases.map((cls) => (
            <ClassCard key={cls._id} cls ={cls}></ClassCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;