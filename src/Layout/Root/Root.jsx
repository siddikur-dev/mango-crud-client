import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Component/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-[70vh]">
      <Navbar></Navbar>
      <Outlet className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
