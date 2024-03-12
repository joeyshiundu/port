import React from 'react';
import CountUp from 'react-countup';
import './App.css';

const Time = () => {
  return (
    <div className="flex items-center justify-center h-screen space-x-10">
      <div className="container text-5xl font-bold text-white-500 shadow-2xl  justify-center py-3" >
        <p className='p-4'>
          Years of Experience:
        </p>
        <CountUp end={4} duration={2} />
      </div>
      <div className="container text-5xl font-bold text-white-500  shadow-2xl  justify-center py-3">
        <p className='p-4'>
          Happy Clients:
        </p>
        <CountUp end={20} duration={2} />
      </div>
      <div className="container text-5xl font-bold text-white-500  shadow-2xl  justify-center py-3" >
        <p className='p-4'>
          Projects Completed:
        </p>
        <CountUp end={30} duration={2} />
      </div>
    </div>
      );
};

export default Time;
