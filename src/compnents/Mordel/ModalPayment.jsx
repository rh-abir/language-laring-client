import { useForm } from "react-hook-form";

const ModalPayment = ({ index, money, product }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.mony = money;
    data.product = product;
    
    console.log(data);
    fetch(`${import.meta.env.VITE_API_URL}/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(result => {
      window.location.replace(result.url)
      console.log(result)
    })
  };

  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor={`my_modal_${index}`}
        className=" btn btn-outline btn-primary btn-xs"
      >
        pay
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={`my_modal_${index}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Pay Now!</h3>
          <p className="py-4">
            {/* inputs */}

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Money</span>
                </label>
                <input
                  type={"number"}
                  placeholder="number"
                  defaultValue={money}
                  readOnly
                  {...register("number", { required: true })}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-outline hover:bg-[#362478]">
                  Pay
                </button>
              </div>
            </form>
          </p>
          <div className="modal-action">
            <label htmlFor={`my_modal_${index}`} className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPayment;
