import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Home/home/home";
import Course from "../Home/freeCource/Course";
import MainLayout from "../Home/MainLayout.jsx/MainLayout";
import Footer from "../Footer/Footer";
import Login from "../Social/Login";
import Register from "../Social/Register";
import Booking from "../Pages/BookingPage/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/booking/:id",
        element: <Booking />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
