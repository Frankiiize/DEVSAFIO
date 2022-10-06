import React from 'react';

const SpinnerLoader = () => {
  return(
    <div
      className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full text-white"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export { SpinnerLoader };