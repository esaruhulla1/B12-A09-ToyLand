import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import Registetion from "../Pages/Registetion";
import PrivetRoute from "../Provider/PrivetRoute";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

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
            <Product></Product>
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
        path: 'about-us',
        Component: About
      },
      {
        path: 'contact-us',
        Component: Contact
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