import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../context/authContext";


export const ProtectedRoute = () => {
  const { user } = useContext(authContext);
  return (
    user.logged 
      ? <>
          <Outlet />
        </>
      : <Navigate to="/login" />
  );
};