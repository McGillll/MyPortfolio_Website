import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import Footer from '../components/Footer';

export const MainLayout = () => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1515894977336-a5bff1d16c4b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="w-full h-full object-cover brightness-50 sm:brightness-75"
          />
          {/* Optional Overlay for better readability */}
          <div className="absolute inset-0 bg-black opacity-30 sm:opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1 my-10 mx-4 sm:mx-10">
          <NavBar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

