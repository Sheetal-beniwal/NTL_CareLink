'use client';

import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, ArrowUpRight, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rotate-45 transform flex items-center justify-center">
              <div className="w-4 h-4 bg-medical-blue transform -rotate-45" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">+</div>
          </div>
          <span className="text-2xl font-bold text-medical-blue tracking-tight">Mediox</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Pages', 'Shop', 'Blog', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="text-medical-blue/80 hover:text-medical-light-blue font-medium transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 text-medical-blue/80">
            <button className="hover:text-medical-light-blue transition-colors">
              <Search size={22} />
            </button>
            <button className="hover:text-medical-light-blue transition-colors relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-medical-light-blue text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>
          
          <Link 
            href="/appointment"
            className="flex items-center gap-2 bg-medical-light-blue text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 group"
          >
            <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
            <span>Make An Appointment</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-medical-blue">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
