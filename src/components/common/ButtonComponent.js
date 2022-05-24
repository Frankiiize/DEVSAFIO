import React from "react";

const primaryClass =
  "btn w-full md:w-1/2 lg:w-2/5 border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl";
const secondaryClass =
  "btn w-full md:w-1/2 lg:w-2/5 color: bg-white text-primary border-primary hover:bg-secondary hover:text-white hover:border-none hover:drop-shadow-xl";
const defaultBtnClass = "btn w-full md:w-1/2 lg:w-2/5 ";

const ButtonComponent = ({ type, style }) => {
  return (
    <div className="md:flex md:justify-end py-5">
      <button
        type={type}
        className={
          style === "primary"
            ? primaryClass
            : style === "secondary"
            ? secondaryClass
            : defaultBtnClass
        }
      >
        <span className="tracking-widest text-lg">Enviar</span>
      </button>
    </div>
  );
};

export { ButtonComponent };
