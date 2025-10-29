import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../../Page/Home/Home";
import ErrorPage from "../../Page/Error/ErrorPage";
import Root from "../Root/Root";
import MangoDetails from "../../Component/Mangoes/MangoDetails/MangoDetails";
import MangoAddForm from "../../Component/Mangoes/MangoAddForm/MangoAddForm";
import UpdateMango from "../../Component/Mangoes/UpdateMango/UpdateMango";

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
        loader: () => fetch("http://localhost:3000/all-mango"),
        Component: Home,
      },
      {
        path: "/all-mango/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-mango/${params.id}`),
        Component: MangoDetails,
      },
      {
        path: "/mango-add",
        Component: MangoAddForm,
      },
      {
        path: "/updateMango/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-mango/${params.id}`),
        Component: UpdateMango,
      },
    ],
  },
]);

export default router;
