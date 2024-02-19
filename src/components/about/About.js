import React, { useState, useRef } from 'react'; 
import resume from '../../resources/resume.jpg';
import skate from '../../resources/skateboard.png';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const aboutRef = useRef(null);

  return (
    <div ref={aboutRef}>
      <div className="bg-white text-gray-900 py-20 px-8 md:px-24 lg:px-32 xl:px-40 2xl:px-60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-xl mb-8">I am currently a fourth-year student studying Nanotechnology Engineering with a minor in computing at the University of Waterloo. I've completed 5 software engineering interships and currently work at Pienso where I am an AI fullstack engineer. Pienso is an AI firm that helps turn data into insights, I work across the stack on fullstack software and industry-leading applications of machine learning.</p>
          <p className="text-lg md:text-xl mb-8">I'm driven by projects that focus on the consumer and bring something new to the table. I'm open to new grad roles in 2025.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block mt-4"
        >
          View Resume
        </button>
      </div>
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
    </div>
  );
};

export default About;