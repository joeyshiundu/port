import React from 'react';
import Intro from './intro';
import Slideshow from './slideshow';
import Time from './time';
import Contacts from './contacts';




function App() {
  return (
    <div className='text-right scroll-smooth'>
      <header className='flex justify-between items-center p-4'>
        <div className='flex items-center'>
          <img src='logo.png' alt='Logo' className='w-10 h-10' />
          <h1 className='text-2xl text-white ml-2 p-4'>My Portfolio Webpage</h1>
        </div>
        <nav className='flex space-x-4'>
          <a href='#' className='text-white'>Contacts</a>
          <a href='#' className='text-white'>About</a>
          <a href='#' className='text-white'>Projects</a>
        </nav>
      </header>
      <div className='text-7xl text-center text-white font-sans tracking-wide'>
        < Intro />
        <Slideshow />
        <Time/>
        <Contacts/>
      </div>

    </div>
  );
}

export default App;
