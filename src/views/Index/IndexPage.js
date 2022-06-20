import React from "react";
import "animate.css";
import hero from '../../assets/images/referencia.png'
import reloj from '../../assets/images/timemachine.png'
import vineta from '../../assets/images/Diseño-sin-título-4-e1644350328646.png'
import bandera from '../../assets/images/accurate.png'
const DefaultLayout = React.lazy(() => import("./../../layout/DefaultLayout"));

const IndexPage = () => {
  return (
    <div className="divide-y-[3px] divide-black divide-solid divide-slate-400/75">
      <div className="flex-col">
        <div className="containerWithHeader-min-height flex justify-center  bg-primary px-5 md:px-10">
          <div className="flex flex-col items-center justify-center pb-64 md:flex-row md:justify-center">
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
              <img className="w-full" src={hero} />
            </div>
          </div>
          
        </div>
      </div>  
     <div className="bg-[#fafafa] relative box-border border-b-[#dddddd] border-b-[1px] border-solid">   
        <div className="text-justify p-3">
          <h1 className="text-[#2c3142] text-center text-[26px] font-[700]  mb-[9.5px] leading-[1.1] mt-[20px]">Sin Juniors no hay Seniors</h1>
          <p className="text-center text-[#858a99] text-[16px] leading-[26px] relative mt-0 mx-0 mb-[9.5px] box-border p-2">En este programa unimos la rapidez, eficiencia y visión de un desarrollador junior junto con la experiencia y liderazgo de un senior TI, quien acompañará al talento junior contratado para potenciar tu área digital, acá te explicamos cómo:</p>
        </div>
        <div className='flex flex-row place-content-center justify-around content-center'>
          <div className="flex flex-col items-center box-border px-[15px] w-full">
            <img src={reloj} className='max-w-[64px] w-[128] h-[128]'/>
            <h2 className="font-[700] text-[26px] mt-[20px] text-[#2c3142] mb-[9.5px]">
              Aceleramos
            </h2>
            <p className='text-[#858a99] text-[16px] leading-[26px] mt-0 mx-0 mb-[9.5px] text-center'>
            Aceleramos el proceso de contratación. Una vez que nos envíes tu necesidad de talento digital recibirás un listado con los mejores candidatos en 5 días.
            </p>
          </div>
          <div className="flex flex-col items-center box-border px-[15px] w-full">
            <img src={vineta} className='max-w-[64px] w-[128] h-[128]'/>
            <h2 className="font-[700] text-[26px] mt-[20px] text-[#2c3142] mb-[9.5px] ">
              Acompañamos
            </h2>
            <p className='text-[#858a99] text-[16px] leading-[26px] mt-0 mx-0 mb-[9.5px] text-center'>
            Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores que contrates serán guiados y apoyados a nivel técnico por un mentor senior TI experto en tu área sin ningún costo ($0).
            </p>
            
          </div>
        
          <div className="flex flex-col items-center box-border px-[15px] w-full">
            <img src={bandera} className='max-w-[64px] w-[128] h-[128] '/>
            <h2 className="font-[700] text-[26px] mt-[20px] text-[#2c3142] mb-[9.5px]">
              Potenciamos
            </h2>
            <p className='text-[#858a99] text-[16px] leading-[26px] mt-0 mx-0 mb-[9.5px] text-center'>
            Potenciamos y retenemos el talento. Realizamos un seguimiento de alta calidad para potenciar el crecimiento y desarrollo técnico de todos los desarrolladores contratados.
            </p>
          </div>

      
        </div>
      </div> 
    </div>  
     
  );
};

export default IndexPage;
