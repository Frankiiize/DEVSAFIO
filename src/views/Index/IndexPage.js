import React from "react";
import "animate.css";
const DefaultLayout = React.lazy(() => import("./../../layout/DefaultLayout"));

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-primary px-5 md:px-10">
      <div className="flex flex-col items-center pt-5 md:flex-row md:justify-center">
        <div className="animate__animated animate__jackInTheBox w-full ">
          <div className=" text-white text-center md:text-left space-y-4 ">
            <div>
              <h1 className="space-y-4 text-5xl flex justify-center flex-col  ">
                <p>Encuentra tu primer empleo en <span className="font-bold uppercase mt-1"> tecnología</span></p> 
              </h1>
            </div>
            <div>
              <p className="text-s">
                Realizamos el match perfecto entre perfiles TI y las áreas
                <br />
                tecnológicas de las empresas para potenciar, desarrollar y<br />
                crecer sus áreas
              </p>
            </div>
          </div>
        </div>
        <div className="object-contain w-full  max-w-md  animate__animated animate__fadeIn animate__delay-1s">
          <img className="w-full" src={require("../../images/referencia.png")} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
