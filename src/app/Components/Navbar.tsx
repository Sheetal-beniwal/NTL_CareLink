'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const menuItems = ['Hospitals', 'Destinations', 'Countries', 'Treatments', 'About Us'];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 px-6 py-4 hidden md:block">
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
                href={item === 'About Us' ? '#about' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-medical-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side Tools */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4 mr-4 border-r border-gray-200 dark:border-slate-800 pr-4 text-medical-dark dark:text-gray-300">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">24/7 Support</span>
                <span className="text-sm font-bold">+91 81466 54185</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-medical-light dark:bg-slate-800 flex items-center justify-center text-medical-primary">
                <Phone size={18} />
              </div>
            </div>
            
            <ThemeToggle />

            <Link href="/register" className="hidden xs:flex px-4 py-2 bg-medical-primary text-white rounded-full font-semibold hover:bg-medical-dark transition-all shadow-lg hover:shadow-medical-primary/20 active:scale-95 items-center gap-2 text-sm">
              <Calendar size={16} />
              <span>Book Appointment</span>
            </Link>

            <button className="hidden sm:flex px-4 py-2 bg-medical-dark text-white rounded-full font-semibold hover:bg-medical-primary transition-all shadow-lg hover:shadow-medical-primary/20 active:scale-95 items-center gap-2 text-sm">
              <MessageSquare size={16} />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Staggered Menu for Mobile */}
      <StaggeredMenu 
        isFixed={true}
        items={menuItems.map(item => ({
          label: item,
          ariaLabel: item,
          link: item === 'About Us' ? '#about' : `/${item.toLowerCase().replace(' ', '-')}`
        }))}
        colors={[
          'rgba(0, 163, 173, 0.2)', // Translucent Teal
          'rgba(0, 59, 92, 0.4)',   // Translucent Navy
          'rgba(0, 163, 173, 0.3)'  // Secondary Teal
        ]}
        socialItems={[
          { label: 'WhatsApp', link: 'https://wa.me/918146654185' },
          { label: 'Instagram', link: '#' },
          { label: 'LinkedIn', link: '#' }
        ]}
      />
    </>
  );
};

export default Navbar;
