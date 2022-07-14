import React from "react";
import { SpinnerLoader } from "./SpinnerLoader";

const SuspenseScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <SpinnerLoader />
    </div>
  );
};

export default SuspenseScreen;
