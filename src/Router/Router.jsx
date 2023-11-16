import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Shop from "../Pages/Shop/Shop";
import ErrorPage from "../Pages/Error/ErrorPage";
import MyMenu from "../Pages/MyMenu/MyMenu";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import UserHome from "../dashboardcomponent/UserHome/UserHome";
import Reservation from "../dashboardcomponent/Reservation/Reservation";
import PaymentHistory from "../dashboardcomponent/PaymentHistory/PaymentHistory";
import MyCart from "../dashboardcomponent/MyCart/MyCart";
import AddReview from "../dashboardcomponent/AddReview/AddReview";
import Mybooking from "../dashboardcomponent/Mybooking/Mybooking";
import AllUsers from "../dashboardcomponent/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element:<PrivateRoute> <Shop /></PrivateRoute>
      },
      
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart /></PrivateRoute>
      },
      {
        path: '/myMenu',
        element: <PrivateRoute><MyMenu /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <Signup />
      },
    ]
  },
  {
        path: '/dashboard',
    element: <DashboardLayouts />,
    children: [
       {
        path: '/dashboard',
        element:<MyCart />
          },
    
      {
        path: 'userHome',
        element:<UserHome />
          },
      {
        path: 'reservation',
        element:<Reservation />
          },
      {
        path: 'payment',
        element:<PaymentHistory />
          },
     
      {
        path: 'addReview',
        element:<AddReview />
          },
      {
        path: 'myBooking',
        element:<PrivateRoute><Mybooking /></PrivateRoute>
          },
      {
        path: 'allUsers',
        element:<PrivateRoute><AllUsers /></PrivateRoute>
          },
        ]
      },
])