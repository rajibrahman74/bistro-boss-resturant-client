import React from "react";
import singinImage from "../../../src/assets/others/authentication2.png";

const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse md:gap-44">
        <div className="w-full max-md:w-1/2 text-center lg:text-left">
          <img className="w-full" src={singinImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full md:w-1/2">
          <form className="card-body w-full md:w-[436px] mx-auto shadow-2xl bg-base-100 h-full">
            <h2 className="text-center font-semibold text-2xl">Sign Up</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;