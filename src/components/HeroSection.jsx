import React from 'react'
import { Link } from 'react-router-dom'
import NameLogo from '../assets/Name Logo.png'

export const HeroSection = () => {
  return (
    <>
        <section
        className="flex flex-col justify-center items-center text-center px-6 sm:px-12  text-white min-h-[600px] max-h-[600px] select-none"
        style={{ minHeight: '600px', maxHeight: '600px' }}
        aria-label="Hero section"
        >
            <div>
                <h1 className="flex justify-center  text-4xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    Hi, I'm  <img className='h-14 ml-3'src={NameLogo} alt="" />
                </h1>
                <h1 className="  text-4xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    A Fullstack Developer
                </h1>
                <p className="text-lg sm:text-xl max-w-xl mx-auto mb-8 drop-shadow-md">
                    Crafting modern web applications with passion and precision. Expert in both frontend & backend technologies.
                </p>
                <Link
                    to="/projects"
                    className="inline-block bg-gradient-to-r from-amber-700/40 via-neutral-50/10 to-amber-700/40 text-neutral-50 hover:bg-amber-700/80 hover:text-neutral-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out drop-shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-300"
                    >
                    View My Work
                </Link>
            </div>
        </section>
    </>
  )
}
