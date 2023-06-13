

const SingleClassCard = ({clas , handleSelect}) => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
    <figure>
      <img src={clas.imageUrl} alt="image" className="w-full h-[250px]" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{clas?.title ? clas?.title : "no title"}</h2>
      <h2 className="">Instructor: {clas.name}</h2>
      {/* <h2 className="card-title">$ {}</h2> */}
      <p> $ {clas.price}</p>
      <div className="card-actions justify-end">
        <button
          onClick={() => handleSelect(clas)}
          className="btn btn-outline btn-xs "
        >
          book
        </button>
      </div>
    </div>
  </div>
  );
};

export default SingleClassCard;
