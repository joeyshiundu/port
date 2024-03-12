import React from "react";
import './App.css';
import 'devicon/devicon.min.css';
import 'animate.css';

const Contacts = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:shiundujoey@gmail.com";
  };

  return (
    <div className="flex justify-center items-center mx-5 p-5">
      <div className="container text-5xl font-bold text-white-500 shadow-2xl p-5 pb-10">
        <p className="py-5">
          Let's talk about your product
        </p>
        <button onClick={handleContactClick} className=" rounded-2xl text-zinc-950 mx-auto max-w-30 mt-7 p-3 bg-white hover:animate-bounce hover:bg-blue-600 " >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Contacts;
