const InstructorCard = ({ instructor }) => {
  return (
    <div className="card w-full glass">
      <figure>
        <img
          className="w-[100%] h-[200px]"
          src={instructor?.image}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <p>How to park your car at your garage?</p>
        <div className="card-actions">
          <button className="btn btn-primary">See Classes!</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
