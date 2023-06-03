import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";

import loginImage from "../../../src/assets/others/authentication2.png";
import Swal from "sweetalert2";

const Login = () => {
  const { singIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: "Login successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    });
  };

  const handleValidateCaptcha = (e) => {
    const userCaptchaValue = e.target.value;
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
      alert("Captcha Validated");
    } else {
      alert("Please enter the correct captcha");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Bistro - Restaurant</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row md:gap-44">
          <div className="w-full max-md:w-1/2 text-center lg:text-left">
            <img className="w-full" src={loginImage} alt="Login" />
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2">
            <form
              onSubmit={handleLogin}
              className="card-body w-full md:w-[436px] mx-auto shadow-2xl bg-base-100 h-full"
            >
              <h2 className="text-center font-semibold text-2xl">Login</h2>
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
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type above captcha"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="text-white btn border-0 bg-[#d1a054b3]"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-sm text-center text-black">
                <span>
                  New here?
                  <Link className="underline text-[#0000ff] ml-1" to="/signup">
                    Create an account
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

export default Login;
