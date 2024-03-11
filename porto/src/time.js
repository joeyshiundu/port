import React from 'react';
import CountUp from 'react-countup';
import './App.css';

const Time = () => {
  return (
    <div className="flex items-center justify-center h-screen space-x-20">
      <div className="container text-5xl font-bold text-white-500 animate__animated animate__fadeIn shadow-2xl py-5">
        <p>
          Years of Experience:
        </p>
        <CountUp end={4} duration={2} />
      </div>
      <div className="container text-5xl font-bold text-white-500 animate__animated animate__fadeIn shadow-2xl py-5">
        <p>
          Happy Clients:
        </p>
        <CountUp end={20} duration={2} />
      </div>
      <div className="container text-5xl font-bold text-white-500 animate__animated animate__fadeIn shadow-2xl py-2 " >
        <p>
          Projects Completed:
        </p>
        <CountUp end={30} duration={2} />
      </div>
    </div>
      );
};

export default Time;
