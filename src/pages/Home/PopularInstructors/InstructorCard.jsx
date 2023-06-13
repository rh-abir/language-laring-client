const InstructorCard = ({ instructor }) => {
  // console.log(instructor);
  return (
    <div className="card w-full border-b-2">
      <figure>
        <img
          className="rounded-full w-[200px] h-[200px]"
          src={instructor?.image}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-center -mt-5">{instructor.name}</h2>
        <div className="border w-20 mx-auto"></div>
        <p>
          Teach and supervise students using lectures, demonstrations,
          discussion groups, laboratory workshop sessions,
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;
