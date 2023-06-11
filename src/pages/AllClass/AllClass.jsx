import { useEffect, useState } from "react";
import TitleText from "../../compnents/TitleText/TitleText";
import { getAllCalss } from "../../api/class";
import SingleClassCard from "./SingleClassCard";

const AllClass = () => {

    const [allClass, setAllClass] = useState([])
    useEffect(() => {
        getAllCalss()
        .then(data => {
            setAllClass(data)
        })
    }, [])

    console.log(allClass)

  return (
    <div className="max-w-7xl mx-auto my-20">
      <TitleText text={"All Class"}></TitleText>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {
            allClass.map(clas => <SingleClassCard
                key = {clas._id}
                clas = {clas}
            ></SingleClassCard>)
        }
      </div>
    </div>
  );
};

export default AllClass;
