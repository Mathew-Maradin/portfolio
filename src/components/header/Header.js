import React, { useState } from 'react';
import {Link} from 'react-scroll'
import resume from '../../resources/resume.jpg';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="header">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="hidden md:block md:w-auto ml-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              </li>
              <li>
                <button onClick={() => setShowModal(true)} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>    
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative w-auto max-w-3xl mx-auto my-6 bg-white rounded-lg shadow-lg">
            <img src={resume} alt="Resume" className="w-full" />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900"
            >
              X
            </button>
          </div>
        </div>
      )}  
    </header>
  );
};

export default Header;