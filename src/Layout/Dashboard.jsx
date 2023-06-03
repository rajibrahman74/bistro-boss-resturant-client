import {
  FaShoppingCart,
  FaWallet,
  FaCalendar,
  FaHome,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
        <ul className="menu p-4 w-80">
          <li>
            <Link>
              <FaHome />
              User Home
            </Link>
          </li>
          <li>
            <Link>
              <FaCalendar />
              Reservations
            </Link>
          </li>
          <li>
            <Link>
              <FaWallet />
              Payment history
            </Link>
          </li>
          <li>
            <Link>
              <FaShoppingCart />
              My cart
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              
              Menu
            </Link>
          </li>
          <li>
            <Link></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
