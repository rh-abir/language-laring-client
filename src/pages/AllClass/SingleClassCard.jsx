

const SingleClassCard = ({clas}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img 
          src={clas.imageUrl}
          alt="image"
          className="w-full h-[250px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{clas?.title ? clas?.title : 'no title'}</h2>
        <h2 className="card-title">Instro Name {clas.name}</h2>
        <h2 className="card-title">$ {clas.price}</h2>
        <p>Available seats : {clas.seats}</p>


        <div className="card-actions justify-end">
        <button className="btn btn-outline btn-primary">Book Mark</button>
        </div>
      </div>
    </div>
  );
};

export default SingleClassCard;
