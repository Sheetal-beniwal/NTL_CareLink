'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowUpRight, Stethoscope, HeartPulse, Activity, Thermometer, PlusSquare } from 'lucide-react';
import FloatingMedicalElements from './FloatingMedicalElements';

const AboutUs = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 px-6 min-h-screen flex items-center bg-slate-100 dark:bg-slate-800 border-t border-gray-200 dark:border-white/10 transition-colors duration-500">

      <FloatingMedicalElements density="high" />

      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-celadon/40 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/6 h-1/6 bg-light-green/20 blur-[80px] -z-10 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side: Content */}
        <div className="flex flex-col items-end space-y-6 animate-in fade-in slide-in-from-left duration-1000 lg:order-1 order-2">
          <div className="flex items-center justify-end gap-3 text-medical-light-blue font-bold tracking-widest uppercase text-xs">
            <span>About Us</span>
            <div className="bg-medical-light-blue p-1 rounded-md text-white">
              <Plus size={12} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue leading-tight text-right w-full uppercase tracking-tight">
            Best Healthcare for You<br />
            <span className="text-[#508D4E] md:text-2xl mt-1 block">Nuture. Treat. Link</span>
          </h2>

          <div className="space-y-4 text-right w-full max-w-xl">
            <p className="text-ash-grey text-base leading-relaxed">
              NTL CareLink is a global healthcare access and medical support company dedicated to 
              connecting patients from South Sudan, Tanzania, Kenya, Uganda and Africa in general with 
              world-class medical care in India, Thailand, and beyond.
            </p>
            <p className="text-ash-grey text-base leading-relaxed">
              To us, NTL Carelink is more than a company, it is a bridge of hope, built to connect people 
              to the healthcare they deserve. We stand for trust, compassion, and absolute dedication to every patient’s journey. 
              We believe that healthcare should not be a privilege, it should be right to humanity. 
              It should be accessible, affordable, and guided with dignity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 border-y border-gray-200/50 dark:border-white/5 py-6 w-full text-right">
            <div className="flex flex-col">
              <span className="text-ash-grey font-semibold uppercase text-xs tracking-wider">Satisfied Patients</span>
              <span className="text-5xl font-light text-medical-light-blue tracking-widest anim-pulse">%100</span>
            </div>
            <div className="flex flex-col">
              <span className="text-ash-grey font-semibold uppercase text-xs tracking-wider">Top Medical Projects</span>
              <span className="text-5xl font-light text-medical-light-blue tracking-widest anim-pulse">%89</span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-6 pt-2 w-full">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-light-green group-hover:scale-110 transition-transform">
                <Image 
                  src="/sultan_founder.png" 
                  alt="Founder" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="text-right">
                <h4 className="font-bold text-medical-blue text-base group-hover:text-medical-light-blue transition-colors">Sultan Ngong</h4>
                <p className="text-ash-grey text-xs font-medium">Founder</p>
              </div>
            </div>

            <Link href="/about-us#founder" className="flex items-center gap-2 bg-medical-blue text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-medical-blue/20 transition-all hover:translate-y-[-2px] active:scale-95 group text-sm">
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={18} />
              <span>Know More</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Image Collage */}
        <div className="relative w-full aspect-square animate-in fade-in slide-in-from-right duration-1000 max-w-lg mx-auto lg:ml-auto lg:order-2 order-1">
          {/* Main Large Image */}
          <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
            <Image 
              src="/african_medical_scene_1774726766055.png" 
              alt="Medical Care" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Experience Badge Overlay */}
          <div className="absolute bottom-0 left-0 w-auto h-[40%] bg-medical-blue rounded-[2.5rem] overflow-hidden p-6 flex flex-col justify-center gap-1 border-4 border-white shadow-xl group cursor-default z-10">
            <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20">
              <Image 
                src="/medical_badge_bg.png" 
                alt="Background" 
                fill 
                className="object-cover" 
              />
            </div>
            <span className="text-white text-4xl font-black tracking-tighter relative">+25</span>
            <p className="text-white text-base font-bold leading-tight relative uppercase tracking-wide">
              Experience In <br />
              Medical <br />
              Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
