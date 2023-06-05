import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRouts from "./PrivetRouts";
import Secret from "../Pages/Shared/Secret";
import Contact from "../Pages/Contact/Contact";
import DashBoard from "../Layout/DashBoard";
import MyCard from "../Pages/Dashboard/MyCard/MyCard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManegeItems from "../Pages/Dashboard/ManageItems/ManegeItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivetRouts>
            <Secret></Secret>
          </PrivetRouts>
        ),
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRouts>
        <DashBoard></DashBoard>
      </PrivetRouts>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "myCart",
        element: <MyCard></MyCard>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      {
        path: "adminhome",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoutes>
            <AddItem></AddItem>
          </AdminRoutes>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoutes>
            <ManegeItems></ManegeItems>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
