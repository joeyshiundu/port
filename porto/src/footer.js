import React from "react";
import './App.css';
import 'devicon/devicon.min.css';
import 'animate.css/animate.min.css'

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container text-5xl font-bold text-white-500 shadow-2xl">
        <p className=" space-x-4 font-mono"> 
          Joey Shiundu
        </p> 
        
        <div className="flex justify-center items-center space-x-4 font-serif text-xl">
            Designed by Joey Shiundu|Developed by Joey Shiundu
        </div>
      </div>
    </div>
  );
}

export default Footer;