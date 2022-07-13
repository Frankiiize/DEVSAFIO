import React from 'react'

const FormsCardContainer = ({children}) => {
  return(
    <div className="w-full md:w-4/5 mx-auto lg:w-3/5  rounded   bg-white py-5 md:py-10 px-4  ">
      {children}
    </div>
  );
};

export { FormsCardContainer };