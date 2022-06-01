import React from "react";

const SuspenseScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div
        className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full text-white"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SuspenseScreen;
