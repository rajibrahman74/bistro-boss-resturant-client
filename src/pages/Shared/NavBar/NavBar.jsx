import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const hangleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  const navOptins = (
    <>
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li tabIndex={0}>
          <Link to="/menu">Our Menu</Link>
        </li>
        <li>
          <Link to="/order/salad">Order Food</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
        <li>
          <Link to="/">
            <button className="btn flex justify-center items-center gap-3">
              <FaShoppingCart className="w-5 h-6" />
              <div className="badge badge-secondary">+99</div>
            </button>
          </Link>
        </li>
      </>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#15151580]  text-white max-w-screen-xl fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptins}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">bistroBoss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptins}</ul>
        </div>
        {user ? (
          <div onClick={hangleLogOut} className="navbar-end">
            <a className="btn">Logout</a>
          </div>
        ) : (
          <Link to="/login" className="navbar-end">
            <div>
              <a className="btn">Login</a>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
