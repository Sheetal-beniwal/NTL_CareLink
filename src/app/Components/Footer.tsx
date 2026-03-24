'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl font-bold">Ready to start your journey?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-10 py-4 bg-medical-primary rounded-full font-bold shadow-lg hover:shadow-medical-primary/20 transition-all active:scale-95">Book Free Consultation</button>
          <button className="px-10 py-4 bg-white/10 rounded-full font-bold border border-white/10 hover:bg-white/20 transition-all active:scale-95">WhatsApp Us</button>
        </div>
        <p className="text-gray-500 pt-12 border-t border-white/5">© {new Date().getFullYear()} NTL CareLink. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
