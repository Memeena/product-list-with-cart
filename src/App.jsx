import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cart from "./Cart/Cart";
import Menu from "./Menu/Menu";
import { loader as menuLoader } from "./Menu/Menu";
import Order from "./Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    loader: menuLoader,
    children: [
      {
        path: "/",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/order",
    element: <Order />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
