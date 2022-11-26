import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.data?.token);

  if (token == "" || token == undefined) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
