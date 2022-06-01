import React from "react";
import { Outlet } from "react-router-dom";
import { Nav  } from "../components/nav/Nav";

const DefaultLayout = () => {
  return (
    <>
      <Nav />
      <Outlet/>
    </>

  );
};

export default DefaultLayout; 