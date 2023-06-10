import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthPorvider";

import { useForm } from "react-hook-form";
import { addClass } from "../../../api/class";
import { toast } from "react-toastify";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { displayName: name, email } = user;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    const className = data.className;
    const name = data.name;
    const email = data.email;
    const price = parseFloat(data.price);
    const seats = parseInt(data.seats);
    const title = data.className;

    // uploade image
    const image = data.image[0];

    // console.log(image);

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const classData = {
          imageUrl,
          price,
          seats,
          className,
          name,
          email,
          title,
          enroll: 0,
          status : "pending",

        };
        console.log(classData)

        addClass(classData)
        .then((data) => {
          console.log(data);
          if(data.insertedId){
            toast.success("Add Class successfullly")
            reset()
          }
        })
        .catch(err => {
          console.log(err)
        })

      });
  };

  return (
    <div className="mx-20 mt-20 ">
      <h2 className="text-center font-bold text-3xl">Add A Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}  className="mt-10">
        <div className="flex gap-5">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-bold">Instructor name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              {...register("name", { required: true })}
              value={name}
              readOnly
              className="input input-bordered input-primary w-full "
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-bold">Instructor email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              {...register("email", { required: true })}
              value={email}
              readOnly
              className="input input-bordered input-primary w-full "
            />
          </div>
        </div>

        <div className="flex gap-5 mt-5">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-bold">Class name</span>
            </label>
            <input
              type="text"
              placeholder="Type here Class name"
              {...register("className", { required: true })}
              className="input input-bordered input-primary w-full "
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-bold">Image</span>
            </label>

            <input
              type="file"
              accept="image/*"
                {...register("image", { required: true })}
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>

        <div className="flex gap-5 mt-5">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-bold">Available seats</span>
            </label>
            <input
              type="number"
              {...register("seats", { required: true })}
              placeholder="Type here Available seats"
              className="input input-bordered input-primary w-full "
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here Price"
              className="input input-bordered input-primary w-full "
            />
          </div>
        </div>

        <div className="mt-10">
          <input
            className="btn btn-outline btn-primary btn-block"
            type="submit"
            value="Add Class "
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
