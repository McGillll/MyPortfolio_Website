import React, { useState } from 'react';
import Logo from '../assets/My Logo.png';
import { NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/16/solid';

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkActive = ({ isActive }) =>
        isActive
            ? 'font-semibold text-neutral-50 border-b-2 bg-neutral-50/10 border-b-neutral-50 grow-1 text-center  py-2 px-4 rounded-t-md transition-all ease-in-out duration-300'
            : 'font-semibold text-neutral-50 grow-1 transition-all ease-in-out duration-300 py-2 px-4 hover:bg-amber-700/40 hover:rounded-md';

    return (
        <>
            <div className='flex items-center  px-5 pr-24 bg-gradient-to-r from-amber-700/40 via-neutral-50/10 to-amber-700/40 rounded-t-lg border-b-2  border-amber-900/50'>
                <div className='border-r-2 border-amber-900/50'>
                    <img className='size-9 m-3 mr-10 ' src={Logo} alt="Logo" />
                </div>

                <button
                    className="md:hidden text-orange-400 transition-transform duration-300 ease-in-out"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <XMarkIcon className={`absolute top-4 right-7 size-8 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
                    <Bars3Icon className={`absolute top-4 right-7 size-8 ${!menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}/>
                </button>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex w-full justify-between items-end px-2 space-x-4">
                    <NavLink to="/" className={linkActive}>Home</NavLink>
                    <NavLink to="/about" className={linkActive}>About</NavLink>
                    <NavLink to="/projects" className={linkActive}>Projects</NavLink>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`absolute top-15 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className='absolute inset-0 bg-black opacity-50 z-0'/>
                <div className={`absolute z-10 flex flex-col top-0 right-0 h-fit w-full bg-black/80 shadow-lg transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out `}>
                    <NavLink to="/" className={linkActive} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" className={linkActive} onClick={() => setMenuOpen(false)}>About</NavLink>
                    <NavLink to="/projects" className={linkActive} onClick={() => setMenuOpen(false)}>Projects</NavLink>
                </div>
            </div>
        </>
    );
};