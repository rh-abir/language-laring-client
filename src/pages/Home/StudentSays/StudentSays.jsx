import TitleText from "../../../compnents/TitleText/TitleText";

import img1 from '../../../assets/img/student/img1.jpg'
import img2 from '../../../assets/img/student/img2.jpg'
import img3 from '../../../assets/img/student/img3.jpg'
import { Fade, Slide } from "react-awesome-reveal";

const StudentSays = () => {
  return (
    <div className="my-20">
      <TitleText text="Our Happy Students"></TitleText>
    
      <div className="grid  md:grid-cols-3 gap-7">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
          <Slide>
            <h2 className="card-title animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">AWESOME!</h2>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
            <p>hese motivational quotes by great thinkers, leaders, and writers are sure to remind students of the beauty and importance of education and </p>
            </Fade>
            <div className=" flex  items-center gap-4 justify-center ">
              <img className="w-10 h-10 rounded-full" src={img2} alt="" />
              <p> Mrk Andorson</p>;
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
          <Slide>
            <h2 className="card-title animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">HIGH QUALITY!</h2>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
            <p>This list of motivational quotes for students is perfect for when you need a little boost in your classroom! </p>
            </Fade>
            
            <div className=" flex  items-center gap-4 justify-center ">
              <img className="w-10 h-10 rounded-full" src={img1} alt="" />
              <p> Alan dinay</p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
          <Slide>
            <h2 className="card-title animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text  text-transparent  ">SO SIMPLE!</h2>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
            <p>The best way to find yourself is to lose yourself in the service of others.” – Mohandas Gandhi · “It is not the mountain we conquer </p>
            </Fade>
            <div className=" flex  items-center gap-4 justify-center ">
              <img className="w-10 h-10 rounded-full" src={img3} alt="" />
              <p> Jon Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSays;
