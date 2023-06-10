import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthPorvider";

import { useForm } from "react-hook-form";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { displayName: name, email } = user;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-20 mt-20 ">
      <h2 className="text-center font-bold text-3xl">Add A Class</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
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
              //   {...register("example", { required: true })}
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
