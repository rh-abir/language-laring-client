import { useState } from "react";
import TitleText from "../../compnents/TitleText/TitleText";
import { useEffect } from "react";
import { getAlluser } from "../../api/auth";
import InstructroCard from "./InstructroCard";


const Instructors = () => {

    const [allInstructors, setAllInstructors] = useState([])
    useEffect(() => {
        getAlluser()
        .then(data => {
            setAllInstructors(data)
        })
    }, [])

    console.log(allInstructors)


    return (
        <div className="max-w-7xl mx-auto my-20">
           <TitleText text={"All Instructors"}></TitleText>
           <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {
            allInstructors.map(Instructor => <InstructroCard
                key = {Instructor._id}
                Instructor = {Instructor}
            ></InstructroCard>)
        }
      </div>
        </div>
    );
};

export default Instructors;