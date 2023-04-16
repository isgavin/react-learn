import Home from "../views/Home";
import About from "../views/About";
import Message from "../views/Message";
import News from "../views/News";
import { Navigate, useRoutes } from "react-router-dom"; // 重定向
import React from "react";

import MyState from "../components/Base/MyState";
import MyParams from "../components/Base/MyParams";
import MyRefs from "../components/Base/MyRefs";
import MyLife from "../components/Base/MyLife";
export default function index() {
  let element = useRoutes([
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "msg",
          element: <Message />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "/home",
          element: <Navigate to="/home/msg" />,
        }
      ],
    },
    {
      path: "/about",
      element: <About />,
      children: [
        {
          path: "state",
          element: <MyState />,
        },
        {
          path: "rparams",
          element: <MyParams />,
        },
        {
          path: "refs",
          element: <MyRefs />,
        },
        {
          path: "life",
          element: <MyLife />,
        },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/about" />,
    },
  ]);

  return element;
}
