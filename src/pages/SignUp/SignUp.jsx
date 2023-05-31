import React, { useContext } from "react";
import singinImage from "../../../src/assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const {createUser} = useContext(AuthContext)
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      reset()
    })
    .catch(error => {
      console.error(error.message);
    })
  };
  return (
    <>
      <Helmet>
        <title>Sign Up | Bistro - resturan</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse md:gap-44">
          <div className="w-full max-md:w-1/2 text-center lg:text-left">
            <img className="w-full" src={singinImage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full md:w-[436px] mx-auto shadow-2xl bg-base-100 h-full"
            >
              <h2 className="text-center font-semibold text-2xl">Sign Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true, minLength: 6 })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be at least 6 characters long
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="text-white btn border-0 bg-[#d1a054b3]"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-sm text-center text-black">
                <span>
                  Already have account?
                  <Link className="underline text-[#0000ff] ml-1" to="/login">
                    Login
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
