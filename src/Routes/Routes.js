import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Componentes/Blog/Blog";
import Home from "../Componentes/Home/Home";
import MyRiviews from "../Componentes/Riviews/MyRiviews/MyRiviews";
import UpdateRiview from "../Componentes/Riviews/UpdateRiview/UpdateRiview";
import AddService from "../Componentes/Services/AddService/AddService";
import MyServices from "../Componentes/Services/MyServices/MyServices";
import ServiceDetails from "../Componentes/Services/ServiceDetails/ServiceDetails";
import Services from "../Componentes/Services/Services";
import Login from "../Componentes/Shared/Login/Login";
import Profile from "../Componentes/Shared/Profile/Profile";
import SignUp from "../Componentes/Shared/SignUp/SignUp";
import Main from "../Main/Main";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
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
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/myservices",
          element: <MyServices></MyServices>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/allservices/:id",
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/allservices/${params.id}`);
          },
          element: <ServiceDetails></ServiceDetails>,
        },
        {
          path: "/addservice",
          element: (
            <PrivateRoutes>
              {" "}
              <AddService></AddService>
            </PrivateRoutes>
          ),
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
        {
          path: "/myriviews",
          element: (
            <PrivateRoutes>
              <MyRiviews></MyRiviews>
            </PrivateRoutes>
          ),
        },
        {
          path: "/updatedriview",
          element: (
            <PrivateRoutes>
              <UpdateRiview></UpdateRiview>
            </PrivateRoutes>
          ),
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        // {
        //   path: "/riviews/:id",
        //   loader: ({ params }) => {
        //     return fetch(`http://localhost:5000/riviews/${params.id}`);
        //   },
        //   element: <ServiceDetails></ServiceDetails>,
        // },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
