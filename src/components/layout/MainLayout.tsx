'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNavigationWrapper from '../navigation/BottomNavigationWrapper';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {children}
      </main>
      <div className="my-32">
      <Footer />
       <BottomNavigationWrapper />
      </div>
    </div>
  );
};

export default MainLayout;