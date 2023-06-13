import { useEffect, useState } from "react";
import TitleText from "../../../compnents/TitleText/TitleText";
import { getAllinstructor } from "../../../api/auth";
import InstructorCard from "./InstructorCard";

const PopularInstructors = () => {
  const [instructors, setINstructor] = useState([]);

  useEffect(() => {
    getAllinstructor().then((data) => {
      setINstructor(data);
    });
  }, []);

  // console.log(instructors);

  return (
    <div className="mb-20 mt-40" >
      <TitleText text="Our Popular Instructors"></TitleText>

      <div className="grid grid-cols-3 gap-5 mt-10">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
