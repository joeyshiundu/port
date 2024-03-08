import './App.css';
import React from 'react';
import 'devicon/devicon.min.css';
import HamburgerMenu from './hamburger';

function Intro() {
    return (
        <div className='container w-1/2 space-y-10 px-auto text-5xl ml-auto pb-9 '>
            <HamburgerMenu  />
            <p className='px-10 '>Hi,I am Joey Shiundu<br/>
            A Frontend Developer from Nairobi.</p>
            <button className='bg-black text-white p-4 rounded-2xl'>Know More</button>
            <p className='font-serif'>Join me here:</p>
            <div className='flex space-x-5 justify-center'>
                <i class="devicon-github-original"></i>
                <i class="devicon-linkedin-plain"></i>
                <i class="devicon-twitter-original"></i>
            </div>
        </div>
    );
}

export default Intro;