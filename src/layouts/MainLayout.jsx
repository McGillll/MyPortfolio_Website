import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'

export const MainLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden bg-bg">
      {/* Background layer (kept as an easily swappable image) */}
      <div
        className="absolute inset-0 h-full w-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515894977336-a5bff1d16c4b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-black focus:px-3 focus:py-2">
        Skip to main content
      </a>

      <div className="relative z-10 flex flex-col flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6">
        <header className="py-6">
          <NavBar />
        </header>

        <main id="main" className="flex-grow">
          <Outlet />
        </main>

        <footer className="mt-12">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

