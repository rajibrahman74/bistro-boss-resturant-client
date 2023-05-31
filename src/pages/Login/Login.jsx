import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginImage from "../../../src/assets/others/authentication2.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {

  const { singIn } = useContext(AuthContext);
  const capchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleValidateCapcha = () => {
    const user_capcha_value = capchaRef.current.value;
    if (validateCaptcha(user_capcha_value)) {
      setDisabled(false);
      alert("Captcha Validated");
    } else {
      alert("Please enter correct captcha");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Bistro - resturan</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row md:gap-44">
          <div className="w-full max-md:w-1/2 text-center lg:text-left">
            <img className="w-full" src={loginImage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
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
                  ref={capchaRef}
                  type="text"
                  name="capcha"
                  placeholder="Type above capcha"
                  className="input input-bordered"
                />
                <button
                  onClick={handleValidateCapcha}
                  className="btn btn-outline btn-xs mt-2 mx-auto"
                >
                  Validate
                </button>
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
