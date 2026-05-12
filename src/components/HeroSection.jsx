import React from 'react'
import { Link } from 'react-router-dom'
import NameLogo from '../assets/Name Logo.png'

export const HeroSection = () => {
  return (
        <>
            <section
                className="flex flex-col justify-center items-center text-center px-6 sm:px-12 text-neutral-50 min-h-[60vh] select-none"
                aria-label="Hero section"
            >
                <div className="max-w-3xl">
                    <h1
                        className="flex justify-center items-center text-4xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg motion-safe:animate-slide-up"
                        style={{ animationDelay: '80ms' }}
                    >
                        Hi, I'm
                        <img className="h-12 ml-3" src={NameLogo} alt="Name logo" />
                    </h1>

                    <h2
                        className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight drop-shadow-lg motion-safe:animate-slide-up"
                        style={{ animationDelay: '160ms' }}
                    >
                        A Website Developer & Designer
                    </h2>

                    <p
                        className="text-lg sm:text-xl max-w-xl mx-auto mb-8 drop-shadow-md motion-safe:animate-slide-up"
                        style={{ animationDelay: '240ms' }}
                    >
                        I build fast and clean websites, design clear layouts, and focus on usability, structure, and performance.
                    </p>

                    <Link
                        to="/projects"
                        className="btn btn-primary motion-safe:animate-slide-up"
                        style={{ animationDelay: '320ms' }}
                    >
                        View My Work
                    </Link>
                </div>
            </section>
        </>
  )
}
