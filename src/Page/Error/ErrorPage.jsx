import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar></Navbar>
      <h2>{error.message}</h2>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
