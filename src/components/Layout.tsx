'use client';

import { ReactNode, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the preloader in this session
    const hasSeenPreloader = sessionStorage.getItem('preloaderShown');
    
    if (hasSeenPreloader) {
      // If already seen, don't show preloader
      setIsLoading(false);
    } else {
      // Show preloader for first visit
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Mark that preloader has been shown
        sessionStorage.setItem('preloaderShown', 'true');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
