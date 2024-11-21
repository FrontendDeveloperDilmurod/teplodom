import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Contexts } from "../App";

function ProtectedRoute({ children }) {
  const { protect, setProtect } = useContext(Contexts);

  if (protect) {
    return <Navigate to={"/"} replace />;
  }
  return children;
}

export default ProtectedRoute;
