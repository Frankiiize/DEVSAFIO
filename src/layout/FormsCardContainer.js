import React from 'react'

const FormsCardContainer = ({children}) => {
  return(
    <div className="w-full md:w-4/5 mx-auto lg:w-2/4  rounded   bg-white pt-5 md:pt-10 px-4 md:pb-0 ">
      {children}
    </div>
  );
};

export { FormsCardContainer };