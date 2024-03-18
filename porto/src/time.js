import React from 'react';
import CountUp from 'react-countup';
import './App.css';

const Time = () => {
  return (
    <div className="flex items-center justify-center space-x-10 mx-10 my-10  max-md:flex-col max-md:space-x-0 py-5">
      <div className="container text-5xl font-bold text-white-500 shadow-2xl  justify-center py-3 max-md:text-3xl max-md:mx-4" >
        <p className='p-4'>
          Years of Experience:
        </p>
        <CountUp end={4} duration={2} />
      </div>
      <div className="container text-5xl font-bold text-white-500  shadow-2xl  justify-center py-3 max-md:text-3xl ">
        <p className='p-4'>
          Happy Clients:
        </p>
        <CountUp end={20} duration={2} />
      </div>
      <div className="container text-5xl font-bold text-white-500  shadow-2xl  justify-center py-3 max-md:text-3xl" >
        <p className='p-4'>
          Projects Completed:
        </p>
        <CountUp end={30} duration={2} />
      </div>
    </div>
      );
};

export default Time;
