import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Componentes/Home/Home";
import Services from "../Componentes/Services/Services";
import Login from "../Componentes/Shared/Login/Login";
import SignUp from "../Componentes/Shared/SignUp/SignUp";
import Main from "../Main/Main";

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
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {},
        {},
        {},
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
