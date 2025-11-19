import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllProduct from "../Pages/AllProduct";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import Registetion from "../Pages/Registetion";
import PrivetRoute from "../Provider/PrivetRoute";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/allproduct',
        element: (
          <PrivetRoute>
             <AllProduct></AllProduct>
          </PrivetRoute>
        )
      },
      {
        path: '/productDetails/:id',
        element: (
          <PrivetRoute>
            <ProductDetails></ProductDetails>
          </PrivetRoute>
        )
      },
      {
        path: '/profile',
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        )
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registetion></Registetion>
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>
      },
    
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router