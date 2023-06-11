
const ClassCard = ({cls, handleSelect}) => {



  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img 
          src={cls.imageUrl}
          alt="image"
          className="w-full h-[250px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cls?.title ? cls?.title : 'no title'}</h2>
        <h2 className="card-title">Instro Name {cls.name}</h2>
        <h2 className="card-title">$ {cls.price}</h2>
        <p>{}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleSelect(cls)} className="btn btn-outline btn-xs ">book</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
