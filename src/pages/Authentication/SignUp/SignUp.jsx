import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthPorvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const { user, createUser, updateUSerProfile } = useContext(AuthContext);

  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setError("");

    const email = data.email;
    const pass = data.password;
    const name = data.name;
    const confirmPass = data.ConfirmPassword;

    if (pass !== confirmPass) {
      return setError("Dose not mathc password");
    }

    if (!/(?=.*?[A-Z])/.test(pass)) {
      return setError("Don't have a capital letter");
    }

    if (!/(?=.*?[#?!@$%^&*-])/.test(pass)) {
      return setError("Don't have a special character");
    }

    // uploade image
    const image = data.image[0];

    console.log(image);

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

        createUser(email, pass)
          .then((result) => {
            console.log(result.user);
            updateUSerProfile(name, imageUrl)
            .then(() => {
              toast.success('Done !')
            })
            .catch(err => {
              console.log(err.message)
            })
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name *</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="type your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email *</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="type your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password *</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="type your Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password *</span>
              </label>
              <input
                type="password"
                {...register("ConfirmPassword", { required: true })}
                placeholder="type your Confirm Password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="file"
                accept="image/*"
                placeholder="image"
                {...register("image", { required: true })}
                className="input input-bordered"
              />
            </div>

            <p className="text-center text-orange-600 font-semibold">{error}</p>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Log In" />
            </div>
          </form>

          <div className="divider">OR</div>

          <label className="label">
            <p className="text-centers mx-auto">
              Already a User?
              <Link className="label-text-alt link link-hover" to="/signin">
                LOGIN
              </Link>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
