import {
  FaShoppingCart,
  FaWallet,
  FaCalendar,
  FaHome,
  FaHamburger,
  FaUtensils,
  FaRegMinusSquare,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  const isAmin = true;
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054]">
          {isAmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendar />
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet />
                  Payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart />
                  My cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaRegMinusSquare /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <FaHamburger /> Order food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
