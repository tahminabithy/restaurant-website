import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Secret/Secret";
import Dcart from "../pages/Dashboard/Dcart/Dcart";
import Dashboard from "../Layout/Dasboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <OurMenu />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/protectedRoute",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "cart",
        element: <Dcart />
      },
      {
        path: "payment",
        element: <Payment />
      },
      {
        path: "userHome",
        element: <UserHome />
      },

      // ----- admin routes -----
      {
        path: "adminHome",
        element: <AdminRoutes> <AdminHome /></AdminRoutes>
      },
      {
        path: "allUsers",
        element: <AdminRoutes><AllUsers /></AdminRoutes>
      },
      {
        path: "addItems",
        element: <AdminRoutes><AddItems /></AdminRoutes>
      },

      {
        path: "manageItems",
        element: <AdminRoutes><ManageItems /></AdminRoutes>
      },
      {
        path: 'updateItems/:id',
        element: <AdminRoutes><UpdateItems /></AdminRoutes>,
        loader: ({ params }) => fetch(`https://street11-real-server-main.vercel.app/menu/${params.id}`)
      }
    ],
  }
]);
