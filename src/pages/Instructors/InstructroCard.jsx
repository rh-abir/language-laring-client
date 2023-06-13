

const InstructroCard = ({Instructor}) => {
    return (
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img 
            src={Instructor.image}
            alt="image"
            className="w-full h-[250px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Instructor?.name}</h2>
          <h2 className=""><span className="font-semibold">Instro Email : </span> {Instructor.email}</h2>
         
        </div>
      </div>
    );
  };
  
  export default InstructroCard;
  