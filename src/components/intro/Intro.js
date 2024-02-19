import React from 'react'; 

const Intro = () => {
  return (
    <intro >
        <div className="bg-white text-gray-900 py-20 px-8 md:px-24 lg:px-32 xl:px-40 2xl:px-60 flex flex-col items-center justify-center">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi There I'm Mathew</h1>
                <p className="text-lg md:text-xl mb-8">SWE intern @ Pienso | 4th year Engineering student at the University of Waterloo</p>
                <p className="text-lg md:text-xl mb-8">Check out some of my work below!</p>
            </div>
        </div>
    </intro>
  );
};

export default Intro;