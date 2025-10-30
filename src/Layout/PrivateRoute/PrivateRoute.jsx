import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" flex justify-center my-20 ">
        Loading... "PR" 
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return <div>{children};</div>;
};

export default PrivateRoute;
