import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthPorvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const SignIn = () => {
  const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);

  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;

    console.log(email, pass);

    signIn(email, pass)
      .then((result) => {
        console.log(result.user);
        toast.success("LogIn successfully");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Firebase: Error (auth/wrong-password).") {
          setError("Worng Password Tray Agen");
        } else {
          setError("Email Doesn't Match Tray Agen");
        }
      });
  };

  const hangleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUsaer = result.user;
        console.log(loggedUsaer);
        toast.success("LogIn successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // githubsingin

  const hangleGitHubSingIn = () => {
    gitHubSignIn()
      .then((result) => {
        const loggedUsaer = result.user;
        console.log(loggedUsaer);
        toast.success("LogIn successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // console.log(user);

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
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password")}
                className="input input-bordered"
              />
            </div>

            <p className="text-center text-orange-600 font-semibold">{error}</p>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          {/* sosical login */}
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={hangleGoogleSingIn}
              className="btn btn-circle btn-outline text-red-400"
            >
              <FaGoogle size="20"></FaGoogle>
            </button>
            {/* TODO */}
            <button className="btn btn-circle btn-outline text-red-400">
              <FaFacebookF size="20"></FaFacebookF>
            </button>

            <button
              onClick={hangleGitHubSingIn}
              className="btn btn-circle btn-outline text-red-400"
            >
              <FiGithub size="20"></FiGithub>
            </button>
          </div>
          <label className="label text-center">
            <p className="text-centers mx-auto">
              New Here ?
              <Link className="label-text-alt link link-hover" to="/signup">
                Sign up
              </Link>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
