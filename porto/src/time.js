import React from 'react';
import CountUp from 'react-countup';
import './App.css';

const Time = () => {
  return (
    <div className="flex items-center justify-center h-screen space-x-20">
      <div className="container text-4xl font-bold text-white-500 animate__animated animate__fadeIn">
        <CountUp end={1000} duration={5} />
      </div>
      <div className="container text-4xl font-bold text-white-500 animate__animated animate__fadeIn">
        <CountUp end={1000} duration={5} />
      </div>
      <div className="container text-4xl font-bold text-white-500 animate__animated animate__fadeIn">
        <CountUp end={1000} duration={5} />
      </div>
    </div>
      );
};

export default Time;
