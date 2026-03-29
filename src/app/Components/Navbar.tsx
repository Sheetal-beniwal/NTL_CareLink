'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Menu, Phone, MessageSquare, UserPlus, X, Calendar } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Hospitals', 'Destinations', 'Countries', 'Treatments', 'About Us'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-medical-dark flex items-center gap-2 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-medical-primary rounded-lg sm:rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform overflow-hidden">
            <img src="/ntl_logo.jpeg" alt="NTL Logo" className="w-full h-full object-cover" />
          </div>
          <span className="flex items-center">
            NTL <span className="text-medical-primary ml-1 hidden xs:inline">CareLink</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          {menuItems.map((item) => (
            <Link 
              key={item} 
              href={item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-medical-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 mr-4 border-r border-gray-200 pr-4 text-medical-dark dark:text-gray-300">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">24/7 Support</span>
              <span className="text-sm font-bold">+91 81466 54185</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-medical-light dark:bg-slate-800 flex items-center justify-center text-medical-primary">
              <Phone size={18} />
            </div>
          </div>
          
          <ThemeToggle />

          <Link href="/register" className="flex px-3 sm:px-6 py-2 sm:py-2.5 bg-medical-primary text-white rounded-full font-semibold hover:bg-medical-dark transition-all shadow-lg hover:shadow-medical-primary/20 active:scale-95 items-center gap-2 text-xs sm:text-base">
            <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden xs:inline">Book Appointment</span>
            <span className="xs:hidden">Book</span>
          </Link>

          <button className="hidden sm:flex px-6 py-2.5 bg-medical-dark text-white rounded-full font-semibold hover:bg-medical-primary transition-all shadow-lg hover:shadow-medical-primary/20 active:scale-95 items-center gap-2">
            <MessageSquare size={18} />
            <span>Contact Support</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-medical-blue p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-gray-100 dark:border-slate-800"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 py-6 px-6 shadow-2xl backdrop-blur-xl bg-white/95 dark:bg-slate-900/95"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link 
                  key={item} 
                  href={item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-medical-primary transition-colors flex items-center justify-between"
                >
                  {item}
                  <X size={14} className="opacity-0" /> {/* Just for spacing/balance */}
                </Link>
              ))}
              <hr className="border-gray-100 dark:border-slate-800 my-2" />
              <div className="flex flex-col gap-3">
                <Link 
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3 bg-medical-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-medical-primary/20"
                >
                  <Calendar size={18} />
                  Book Appointment
                </Link>
                <button className="w-full py-3 bg-medical-dark text-white rounded-xl font-semibold flex items-center justify-center gap-2">
                  <MessageSquare size={18} />
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
