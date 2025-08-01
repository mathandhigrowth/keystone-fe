import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>

      <main className='flex-1 mt-0'>
        <Outlet />
      </main>

      <footer className='bg-inherit'>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
