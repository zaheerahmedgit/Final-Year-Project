import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2  hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  
  <div className="flex w-full justify-center items-center gradient-bg-services">
       <div className="side-pic">
        
       <img src="images/crypto 1.png" alt="" style={{ width: '600px', height: '650px' , marginLeft:'250px'}} />
 
  </div>
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
   
 
   
      <div className="flex-1 flex flex-col justify-start items-center">
        
      </div>
    </div>
  </div>
);

export default Services;
