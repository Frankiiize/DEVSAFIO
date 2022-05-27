
import React from "react";
import 'animate.css'
const DefaultLayout = React.lazy(() => import('./../../layout/DefaultLayout'));





const IndexPage = () => {
    return(
       
       <div className="min-h-screen bg-primary"> 
        <div>
        <DefaultLayout />
        </div>
        <div className="flex flex-row place-items-center ">
         <div className='animate__animated animate__jackInTheBox'> 
            <div className="mt-[100px] mx-[150px] text-white space-y-4 ">   
               <div>
                  <h1 className="space-y-4 text-5xl ">
                     <div> Encuentra tu primer<br/> </div>
                     <div> empleo en tecnología</div>
                  </h1>
               </div>
               <div>
                  <p className="text-s">
                     Realizamos el match perfecto entre perfiles TI y las áreas<br/>
                     tecnológicas de las empresas para potenciar, desarrollar y<br/>
                     crecer sus áreas
                  </p>
               </div>
         </div> 
             
         </div>
         <div className="object-contain h-48 w-96 animate__animated animate__fadeIn animate__delay-1s">
         <img src={require("../../images/referencia.png")}  /> 
         </div>
        </div>
       </div>
        
    )
};

export default IndexPage;