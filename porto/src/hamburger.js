import React, { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="top-0 right-0 mt-2 mr-5 rounded-lg shadow-lg absolute">
          <ul className='flex animated-menu space-x-4 bg-transparent '>
            <li>
              <a href="/contacts" className="block  px-4 py-2 hover:text-gray-800 text-white">Contacts</a>
            </li>
            <li>
              <a href="/about" className="block px-4 py-2  hover:text-gray-800 text-white bg-transparent">About</a>
            </li>
            <li>
              <a href="/projects" className="block px-4 py-2  hover:text-gray-800 text-white bg-transparent">Projects</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
