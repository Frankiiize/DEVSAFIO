import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../context/authContext";
import JobBoardLayout from "../layout/JobBoardLayout";

const Wellcome = (user) => {
  return (
    <div className="alert alert-info shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>bienvenido {user.user.name}{user.user.lastname}</span>
      </div>
    </div>
  )
}

const Dashboard = () => {
  const { user } = useContext(authContext);
  const [showWellcome, setShowWellcome] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowWellcome(false);
    }, 3000)
  }, [])
  return (
    <>
      {
        (showWellcome) &&
        Wellcome(user)
      }
      <h1>bienvenido</h1>
      <JobBoardLayout />
    </>
  );
};

export default Dashboard;