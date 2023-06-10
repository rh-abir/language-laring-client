
import TitleText from "../../../compnents/TitleText/TitleText";

const StudentSays = () => {
  return (
    <div className="my-20">
        <TitleText text="Our Happy Students"></TitleText>
        
      <div className="md:flex gap-10 ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">AWESOME !</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">HIGH QUALITY!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">SO SIMPLE!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus aliquid, ut similique repudiandae reprehenderit excepturi temporibus porro suscipit unde!</p>
          </div>
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default StudentSays;
