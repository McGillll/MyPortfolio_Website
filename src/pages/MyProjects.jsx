import React from 'react';
import Tasky from '../assets/tasky.png';
import Crumbs from '../assets/crumbs.png';
import Cacao from '../assets/cacao.png';
import { useNavigate } from "react-router-dom";

export const MyProjects = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='bg-black/50 px-4 lg:px-10 md:px-28 py-10 gap-10 flex flex-col'>
        <div className='text-center'>
          <span className='font-black text-5xl text-neutral-50'>My Projects</span>
        </div>
        <div className='flex flex-col text-neutral-50 gap-6'>
          {/* Tasky */}
          <div onClick={()=>{
            window.open('https://tasky-mc-gillll.nuxt.dev/')
          }} className='relative w-full flex flex-col lg:flex-row hover:bg-amber-700/40 rounded-lg transition-all duration-500 p-5'>
            <div className='inline lg:hidden w-full lg:w-2/5 h-fit py-5 bg-gray-200 rounded-lg'>
              <img className='w-full h-fit' src={Tasky} alt="Tasky Project" />
            </div>
            <div className='w-full lg:w-3/5 px-4 lg:px-28 text-center gap-4 flex flex-col'>
              <h1 className='text-2xl font-bold underline'>Tasky</h1>
              <p className='text-justify font-light'>A web app that helps managers organize and assign tasks to employees. It streamlines workflow by tracking task progress and improving team productivity with a simple, user-friendly interface.</p>
              <span className='underline opacity-50 mt-auto cursor-pointer'>Click to visit site.</span>
            </div>
            <div className='hidden lg:inline w-full lg:w-2/5 h-fit py-5 bg-gray-200 rounded-lg'>
              <img className='w-full h-fit' src={Tasky} alt="Tasky Project" />
            </div>
          </div>
          {/* Crumbs & Co */}
          <div onClick={()=>{
            window.open('https://crumbs-co.vercel.app/')
          }} className='w-full flex flex-col lg:flex-row hover:bg-amber-700/40 rounded-lg transition-all duration-500 p-5'>
            <div className='w-full lg:w-2/5 h-fit py-5 bg-gray-200 rounded-lg'>
              <img className='w-full h-fit' src={Crumbs} alt="Crumbs & Co Project" />
            </div>
            <div className='w-full lg:w-3/5 px-4 lg:px-28 text-center gap-4 flex flex-col'>
              <h1 className='text-2xl font-bold underline'>Crumbs&Co</h1>
              <p className='text-justify font-light'>A stylish and user-friendly website designed for a bakery or dessert shop. It showcases products, offers easy navigation, and helps customers discover delicious treats with an appealing and modern interface.</p>
              <span className='underline opacity-50 mt-auto cursor-pointer'>Click to visit site.</span>
            </div>
          </div>
          {/* Cacao Care */}
          <div onClick={()=>{
            window.open('https://cacao-care.nuxt.dev/')
          }} className='w-full flex flex-col lg:flex-row hover:bg-amber-700/40 rounded-lg transition-all duration-500 p-5'>
            <div className='w-full inline lg:hidden lg:w-2/5 h-fit py-5 bg-gray-200 rounded-lg'>
              <img className='w-full h-fit' src={Cacao} alt="Cacao Care Project" />
            </div>
            <div className='w-full lg:w-3/5 px-4 lg:px-28 text-center gap-4 flex flex-col'>
              <h1 className='text-2xl font-bold underline'>CacaoCare</h1>
              <p className='text-justify font-light'>A web platform dedicated to promoting sustainable cacao farming. It connects farmers with resources, tracks cultivation progress, and supports eco-friendly practices to enhance productivity and environmental care.</p>
              <span className='underline opacity-50 mt-auto cursor-pointer'>Click to visit site.</span>
            </div>
            <div className='hidden lg:inline w-full lg:w-2/5 h-fit py-5 bg-gray-200 rounded-lg'>
              <img className='w-full h-fit' src={Cacao} alt="Cacao Care Project" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
