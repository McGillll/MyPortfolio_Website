import React from 'react';
import Me from '../assets/mcgil.png'

const AboutMe = () => {
  return (
    <>
    <div  className="flex flex-col items-center text-center justify-center px-6 sm:px-1 text-white py-12"
        >

    <div className='h-60 rounded-full border-8'>
        <img className='hover:scale-110 transition-all duration-500 ease-in-out h-full w-fit bg-gradient-to-r from-amber-700/20  via-neutral-50/10 to-amber-700/20 rounded-full' src={Me} alt="" />
    </div>
    <div>
      <h2 className="text-3xl sm:text-4xl text-center font-bold mb-4">About Me</h2>
      <p className="text-lg text-justify sm:text-xl max-w-2xl mx-auto mb-6">
        I am a passionate Fullstack Developer with experience in building dynamic web applications. 
        My expertise lies in both frontend and backend technologies, allowing me to create seamless user experiences and robust server-side solutions.
      </p>
    </div>
    </div>
    </>
  );
};

export default AboutMe;
