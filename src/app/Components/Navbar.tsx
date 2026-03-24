'use client';

import React from 'react';
import Link from 'next/link';
import { Stethoscope, Menu, Phone, MessageSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-medical-dark flex items-center gap-2 group">
          <div className="w-10 h-10 bg-medical-primary rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Stethoscope size={24} />
          </div>
          <span>NTL <span className="text-medical-primary">CareLink</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          {['Hospitals', 'Countries', 'Treatments', 'About Us'].map((item) => (
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
          <div className="hidden lg:flex items-center gap-4 mr-4 border-r border-gray-200 pr-4">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">24/7 Support</span>
              <span className="text-sm font-bold text-medical-dark dark:text-medical-accent">+91 81466 54185</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-medical-light flex items-center justify-center text-medical-primary">
              <Phone size={18} />
            </div>
          </div>
          
          <ThemeToggle />

          <button className="hidden sm:flex px-6 py-2.5 bg-medical-dark text-white rounded-full font-semibold hover:bg-medical-primary transition-all shadow-lg hover:shadow-medical-primary/20 active:scale-95 items-center gap-2">
            <MessageSquare size={18} />
            <span>Contact Support</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-medical-blue p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
