import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Home/home/home";
import Course from "../Home/freeCource/Course";
import MainLayout from "../Home/MainLayout.jsx/MainLayout";
import Footer from "../Footer/Footer";

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
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

export default router;
