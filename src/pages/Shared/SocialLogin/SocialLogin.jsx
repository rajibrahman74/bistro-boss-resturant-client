import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="section">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-auto border-0"
          style={{ backgroundColor: "#DB4437" }}
        >
          <FaGoogle className="mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
