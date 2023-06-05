import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendarAlt,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { RiMessage2Fill } from "react-icons/ri";
import useCart from "../Hooks/useCart";
import { useAdmin } from "../Hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin] = useAdmin();

  const [cart] = useCart();
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-[#d1a054] ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#d1a054] text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to={"/dashboard/adminhome"}>
                    <FaHome></FaHome>Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/additem"}>
                    <FaUtensils></FaUtensils>Add items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageitems"}>
                    <FaHamburger></FaHamburger>Manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/reservations"}>
                    <FaBook></FaBook>Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/allUsers"}>
                    <FaUser></FaUser>Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/dashboard/userhome"}>
                    <FaHome></FaHome>User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/reservations"}>
                    <FaCalendarAlt></FaCalendarAlt>Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/myCart"}>
                    <FaShoppingCart></FaShoppingCart>MyCart
                    <div className="badge badge-secondary bg-transparent">
                      +{cart?.length || 0}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/history"}>
                    <FaWallet></FaWallet>Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to={"/"}>
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                {" "}
                <GiHamburgerMenu></GiHamburgerMenu> Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                {" "}
                <GiShoppingBag></GiShoppingBag> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                {" "}
                <RiMessage2Fill></RiMessage2Fill> CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
