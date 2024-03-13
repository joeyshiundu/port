import React from "react";
import './App.css';
import 'devicon/devicon.min.css';
import 'animate.css/animate.min.css'

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-20">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-1/2">
            <h4 className="text-2xl font-bold font-mono text-cyan-500/70">Joey</h4>
            <h5 className="text-2xl font-bold text-white font-sans">Shiundu</h5>
            <p className="text-white text-sm italic pt-4">"Where creativity meets Innovation"</p>
          </div>
        </div>
      </div>
     </footer> 
          

  );
}

export default Footer;