
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-white/95 via-blue-50/90 to-teal-50/90 backdrop-blur-xl shadow-xl sticky top-0 z-50 border-b border-blue-200/30">
      {/* Gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-teal-600/5"></div>
      
      <nav className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 max-w-7xl mx-auto header-container">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center min-w-0">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative p-1 sm:p-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 group-hover:from-blue-500/20 group-hover:to-teal-500/20 transition-all duration-300">
                <Image
                  src="/logo.svg"
                  alt="Madhavi Enterprises"
                  width={48}
                  height={48}
                  className="h-8 w-auto sm:h-12 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden xs:block min-w-0">
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-teal-500 transition-all duration-300 truncate">
                  MADHVI ENTERPRISES
                </span>
                <div className="text-xs text-gray-600 font-medium group-hover:text-blue-600 transition-colors duration-300 truncate">
                  AC Sales & Electronics Store
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 group rounded-lg hover:bg-blue-50/50"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Call Button */}
            <a
              href="tel:+919876543210"
              className="relative flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:via-blue-800 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 border border-blue-500/20"
            >
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-2 flex-shrink-0 mobile-menu-container">
            <a
              href="tel:+919876543210"
              className="flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-2 sm:px-3 py-2 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-md"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300 border border-gray-200/50 hover:border-blue-300/50 min-w-[44px] min-h-[44px]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Bars3Icon className="block h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-6 space-y-2 bg-gradient-to-br from-white/95 to-teal-50/80 backdrop-blur-sm border-t border-blue-200/30 rounded-b-xl">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="pt-4"
                >
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold mx-4 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                  >
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Call Now: +91 98765 43210
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
