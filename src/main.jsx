import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./Providers/AuthProvider";
import Order from "./components/Orders/Order";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
