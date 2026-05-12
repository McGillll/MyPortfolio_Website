import React, { useState } from 'react'
import Logo from '../assets/My Logo.png'
import { NavLink } from 'react-router-dom'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/16/solid'

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkActive = ({ isActive }) =>
        isActive
            ? 'font-semibold text-neutral-50 border-b-2 bg-neutral-50/10 border-b-neutral-50 flex-1 text-center py-2 px-4 rounded-t-md transition-all ease-in-out duration-300'
            : 'font-semibold text-neutral-50 flex-1 transition-all ease-in-out duration-300 py-2 px-4 hover:bg-amber-700/40 hover:rounded-md'

    return (
        <>
            <div className='flex items-center justify-between gap-4 px-4 sm:px-5 py-2 sm:pr-8 bg-gradient-to-r from-amber-700/40 via-neutral-50/10 to-amber-700/40 rounded-t-lg border-b-2 border-amber-900/50 min-h-16'>
                <div className='flex items-center gap-3 border-r-2 border-amber-900/50 pr-4 sm:pr-6'>
                    <img className='h-9 w-9 sm:h-10 sm:w-10' src={Logo} alt="Logo" />
                </div>

                <button
                    type='button'
                    className="md:hidden flex h-11 w-11 items-center justify-center rounded-md text-orange-400 transition-transform duration-300 ease-in-out hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls='mobile-menu'
                >
                    <XMarkIcon className={`h-7 w-7 transition-all duration-200 ${menuOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none absolute'}`} />
                    <Bars3Icon className={`h-7 w-7 transition-all duration-200 ${!menuOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none absolute'}`} />
                </button>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex flex-1 justify-between items-end px-2 space-x-4">
                    <NavLink to="/" className={linkActive}>Home</NavLink>
                    <NavLink to="/about" className={linkActive}>About</NavLink>
                    <NavLink to="/projects" className={linkActive}>Projects</NavLink>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className='absolute inset-0 bg-black/50 z-0' />
                <div id='mobile-menu' className={`absolute z-10 top-0 right-0 w-full bg-black/80 shadow-lg transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
                    <nav className='flex flex-col py-6' aria-label='Mobile navigation'>
                        <NavLink to="/" className={linkActive} onClick={() => setMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/about" className={linkActive} onClick={() => setMenuOpen(false)}>About</NavLink>
                        <NavLink to="/projects" className={linkActive} onClick={() => setMenuOpen(false)}>Projects</NavLink>
                    </nav>
                </div>
            </div>
        </>
    );
};