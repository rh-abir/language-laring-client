import TitleText from "../../../compnents/TitleText/TitleText";

import img1 from '../../../assets/img/student/img1.jpg'
import img2 from '../../../assets/img/student/img2.jpg'
import img3 from '../../../assets/img/student/img3.jpg'

const StudentSays = () => {
  return (
    <div className="my-20">
      <TitleText text="Our Happy Students"></TitleText>
    
      <div className="grid  md:grid-cols-3 gap-7">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">AWESOME!</h2>
            <p>hese motivational quotes by great thinkers, leaders, and writers are sure to remind students of the beauty and importance of education and </p>
            <div className=" flex  items-center gap-4 justify-center ">
              <img className="w-10 h-10 rounded-full" src={img2} alt="" />
              <p> Mrk Andorson</p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">HIGH QUALITY!</h2>
            <p>hese motivational quotes by great thinkers, leaders, and writers are sure to remind students of the beauty and importance of education and </p>
            <div className=" flex  items-center gap-4 justify-center ">
              <img className="w-10 h-10 rounded-full" src={img1} alt="" />
              <p> Mrk Andorson</p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text  text-transparent  ">SO SIMPLE!</h2>
            <p>hese motivational quotes by great thinkers, leaders, and writers are sure to remind students of the beauty and importance of education and </p>
            <div className=" flex  items-center gap-4 justify-center ">
              <img className="w-10 h-10 rounded-full" src={img3} alt="" />
              <p> Mrk Andorson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSays;
