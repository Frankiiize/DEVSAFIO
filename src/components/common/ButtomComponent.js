import React from "react";

const ButtomComponent = ({type}) => {
  return (
    <div className="flex justify-end pt-5 pb-10" >
        <button 
          type={type} 
          className="btn w-full md:w-1/2 lg:w-2/5 color: bg-primary text-white "
          >
            <span className="tracking-widest text-lg">
              Enviar
            </span>
        </button>
    </div>
  );
};


export { ButtomComponent };