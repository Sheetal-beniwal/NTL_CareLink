'use client';

import React from 'react';
import { Globe, Hospital, Users, ShieldCheck } from 'lucide-react';

const Highlights = () => {
  return (
    <section className="bg-medical-dark dark:bg-[#ffffff] text-white dark:text-[#111827] py-8 md:py-16 border-y border-transparent dark:border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-4 gap-2 md:gap-8">
          {/* Countries */}
          <div className="flex flex-col items-center text-center space-y-2 group">
            <div className="p-2 md:p-3 bg-white/10 dark:bg-medical-primary/10 rounded-xl md:rounded-2xl text-medical-accent dark:text-medical-primary group-hover:scale-110 transition-transform">
              <Globe size={20} className="md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-3xl font-black">10+</span>
              <p className="text-white/50 dark:text-[#6b7280] text-[8px] md:text-xs font-bold uppercase tracking-widest">Countries</p>
            </div>
          </div>

          {/* Hospitals */}
          <div className="flex flex-col items-center text-center space-y-2 group">
            <div className="p-2 md:p-3 bg-white/10 dark:bg-medical-primary/10 rounded-xl md:rounded-2xl text-medical-accent dark:text-medical-primary group-hover:scale-110 transition-transform">
              <Hospital size={20} className="md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-3xl font-black">20+</span>
              <p className="text-white/50 dark:text-[#6b7280] text-[8px] md:text-xs font-bold uppercase tracking-widest">Hospitals</p>
            </div>
          </div>

          {/* Patients */}
          <div className="flex flex-col items-center text-center space-y-2 group">
            <div className="p-2 md:p-3 bg-white/10 dark:bg-medical-primary/10 rounded-xl md:rounded-2xl text-medical-accent dark:text-medical-primary group-hover:scale-110 transition-transform">
              <Users size={20} className="md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-3xl font-black">300+</span>
              <p className="text-white/50 dark:text-[#6b7280] text-[8px] md:text-xs font-bold uppercase tracking-widest">Patients</p>
            </div>
          </div>

          {/* Trust Score */}
          <div className="flex flex-col items-center text-center space-y-2 group">
            <div className="p-2 md:p-3 bg-white/10 dark:bg-medical-primary/10 rounded-xl md:rounded-2xl text-medical-accent dark:text-medical-primary group-hover:scale-110 transition-transform">
              <ShieldCheck size={20} className="md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-3xl font-black">100%</span>
              <p className="text-white/50 dark:text-[#6b7280] text-[8px] md:text-xs font-bold uppercase tracking-widest">Trust Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
