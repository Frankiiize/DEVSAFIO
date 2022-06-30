import React, { useState,useContext } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { authContext } from "../context/authContext";
import DefaultLayout from "../layout/DefaultLayout";


export const ProtectedRoute = () => {
  const { user , setUser } = useContext(authContext);
  debugger
  return (
    user.logged 
      ? <>
          <Outlet />
        </>
      : <Navigate to="/login" />
  );
};