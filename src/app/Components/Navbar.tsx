'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const menuItems = ['Hospitals', 'Destinations', 'Doctors', 'Treatments', 'About Us'];

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
              NTL <span className="text-medical-primary ml-1 xs:inline">CareLink</span>
            </span>
            
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-gray-600">
            {menuItems.map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-medical-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link 
              href="/register" 
              className="flex px-6 py-2.5 bg-medical-primary text-white rounded-full font-bold hover:bg-medical-dark transition-all shadow-md hover:shadow-medical-primary/20 active:scale-95 items-center gap-2 text-sm whitespace-nowrap"
            >
              <Calendar size={18} />
              <span>Book</span>
            </Link>

            <Link 
              href="/contact-support" 
              className="hidden lg:flex px-6 py-2.5 bg-medical-dark text-white rounded-full font-bold hover:bg-medical-primary transition-all shadow-md hover:shadow-medical-primary/20 active:scale-95 items-center gap-2 text-sm whitespace-nowrap"
            >
              <MessageSquare size={18} />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Staggered Menu for Mobile */}
      <StaggeredMenu 
        isFixed={true}
        items={[
          ...menuItems.map(item => ({
            label: item,
            ariaLabel: item,
            link: `/${item.toLowerCase().replace(' ', '-')}`
          })),
          { label: 'Book Now', ariaLabel: 'Book Now', link: '/register' }
        ]}
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
