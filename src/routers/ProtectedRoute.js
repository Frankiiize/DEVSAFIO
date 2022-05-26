import React, { useState } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";


export const ProtectedRoute = () => {
  const [ user , setUser ] = useState(true);
  return (
    user 
      ? <>
          <DefaultLayout />
          <Outlet />
        </>
      : <Navigate to="/login" />
  );
};