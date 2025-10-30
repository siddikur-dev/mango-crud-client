import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../../Page/Home/Home";
import ErrorPage from "../../Page/Error/ErrorPage";
import Root from "../Root/Root";
import MangoDetails from "../../Component/Mangoes/MangoDetails/MangoDetails";
import MangoAddForm from "../../Component/Mangoes/MangoAddForm/MangoAddForm";
import UpdateMango from "../../Component/Mangoes/UpdateMango/UpdateMango";
import Login from "../../Page/Login/Login";
import Register from "../../Page/Register/Register";
import Users from "../../Component/Users/Users";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("https://mango-crud-server.vercel.app/all-mango"),
        Component: Home,
      },
      {
        path: "/all-mango/:id",
        loader: ({ params }) =>
          fetch(`https://mango-crud-server.vercel.app/all-mango/${params.id}`),
        Component: MangoDetails,
      },
      {
        path: "/mango-add",
        Component: MangoAddForm,
      },
      {
        path: "/updateMango/:id",
        loader: ({ params }) =>
          fetch(`https://mango-crud-server.vercel.app/all-mango/${params.id}`),
        Component: UpdateMango,
      },

      {
        path: "/users",
        loader: () => fetch("https://mango-crud-server.vercel.app/users"),
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
