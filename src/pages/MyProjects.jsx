import React from 'react';
import Atlas from '../assets/atlas.png';
import Crumbs from '../assets/crumbs.png';
import Cacao from '../assets/cacao.png';
import design1 from '../assets/design (1).png';
import design2 from '../assets/design (2).png';
import design3 from '../assets/design (3).png';
import design4 from '../assets/design (4).png';
import design5 from '../assets/design (5).png';
import { useNavigate } from "react-router-dom";
import { ImageCarousel } from '../components/ImageCarousel';

export const MyProjects = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='bg-black/50 px-4 lg:px-10 md:px-28 py-10 gap-10 flex flex-col'>
        <div className='text-center'>
          <span className='font-black text-5xl text-neutral-50'>My Projects</span>
        </div>
        <div className='flex flex-col text-neutral-50 gap-6'>

          {/* Atlas University */}
          <div onClick={()=>{
            window.open('https://atlas-university.vercel.app/')
          }} className='relative w-full flex flex-col lg:flex-row hover:bg-amber-700/40 rounded-lg transition-all duration-500 p-5'>
            <div className='inline lg:hidden w-full lg:w-2/5 h-fit py-5 bg-gray-200 rounded-lg'>
              <img className='w-full h-fit' src={Atlas} alt="Atlas Project" />
            </div>
            <div className='w-full lg:w-3/5 px-4 lg:px-28 text-center gap-4 flex flex-col'>
              <h1 className='text-2xl font-bold underline'>Atlas University</h1>
              <p className='text-justify font-light'>A modern university website that enhances the student and faculty experience by providing clear navigation, accessible information, and an engaging interface. It streamlines access to academic programs, admissions details, and campus resources while showcasing the institution’s identity with a professional, user-friendly design.</p>
              <span className='underline opacity-50 mt-auto cursor-pointer'>Click to visit site.</span>
            </div>
            <div className='hidden lg:inline w-full lg:w-2/5 h-fit py-5 bg-gray-200 rounded-lg'>
              <img className='w-full h-fit' src={Atlas} alt="Atlas Project" />
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
          
          {/* Power Post Design */}
          <div className='w-full flex flex-col lg:flex-row hover:bg-amber-700/40 rounded-lg transition-all duration-500 p-5'>
            <div className='w-full lg:w-2/5'>
              <ImageCarousel images={[design1, design2, design3, design4, design5]} altText="Graphics Design Project" />
            </div>
            <div className='w-full lg:w-3/5 px-4 lg:px-28 text-center gap-4 flex flex-col'>
              <h1 className='text-2xl font-bold underline'>Poster Design</h1>
              <p className='text-justify font-light'>A social media design project focused on creating eye-catching carousel edits optimized for Instagram. The visuals combine bold typography, cohesive color schemes, and engaging layouts to boost audience interaction and brand presence. Each design was crafted to be both aesthetically appealing and strategically aligned with digital storytelling, ensuring maximum impact in a fast-scrolling environment.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
