'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingMedicalElements from './FloatingMedicalElements';

const hospitalImages = [
  "/hospital_images/max hospital image 1.jpeg",
  "/hospital_images/Apollo hospital.jpeg",
  "/hospital_images/Artemis hospital.jpeg",
  "/hospital_images/medanta hospital.jpeg",
  "/hospital_images/Bumrungrad Hospital.jpeg",
  "/hospital_images/Fortis hospital image 1.jpeg"
];

const WhyChooseUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hospitalImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <FloatingMedicalElements density="medium" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Text & Benefits */}
          <div className="flex-1 space-y-12">
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-primary/10 text-medical-primary font-bold text-xs uppercase tracking-widest">
                Your Trusted Medical Partner
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Patients Trust <span className="text-medical-primary">NTL CareLink</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl border-l-4 border-medical-accent pl-6">
                We collaborate with India's most recognized medical institutions, including 
                <span className="font-bold text-medical-dark"> Apollo Hospital, Artemis Hospital, and Max Hospital</span>, 
                to ensure our patients receive the highest standard of treatment.
              </p>
            </div>

            {/* Benefit Cards Grid */}
            {/* Benefit Cards Grid: 2-Column for Mobile and Desktop */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {[
                "Medical Travel Assistance",
                "Full Treatment Management",
                "Cost & Budget Planning",
                "Translation & Patient Support",
                "Hospital & Doctor Coordination"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 p-4 md:p-6 bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 hover:border-medical-primary/50 transition-all duration-300 group/card"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-medical-primary/10 text-medical-primary rounded-xl md:rounded-2xl flex items-center justify-center font-black text-[10px] md:text-sm shrink-0 group-hover/card:bg-medical-primary group-hover/card:text-white transition-all duration-500 shadow-inner">
                    0{i + 1}
                  </div>
                  <span className="font-bold text-gray-800 dark:text-white text-[10px] md:text-base leading-tight text-center md:text-left">{item}</span>
                </div>
              ))}
            </div>

            {/* View Hospitals Button */}
            <div className="pt-4">
              <Link 
                href="/hospitals"
                className="inline-flex items-center gap-3 px-8 py-4 bg-medical-dark text-white font-bold rounded-2xl hover:bg-medical-primary transition-all duration-300 shadow-xl shadow-medical-dark/20 group"
              >
                View our Collaborated hospitals
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Visuals & Contact */}
          <div className="lg:w-[450px] space-y-8">
            {/* Main Visual with Contact Overlay: SLIDESHOW */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white dark:border-slate-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={hospitalImages[currentImageIndex]} 
                    alt="World-Class Hospital" 
                    fill 
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-medical-dark/20 to-transparent" />
              
              {/* Slideshow Progress Bar */}
              <div className="absolute top-4 left-4 right-4 flex gap-1.5 z-20">
                {hospitalImages.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${idx === currentImageIndex ? 'bg-medical-accent w-4' : 'bg-white/30'}`} 
                  />
                ))}
              </div>

              {/* Contact Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white space-y-4 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-medical-accent text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 shadow-lg shadow-medical-accent/20">
                   Trusted Partners
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-black tracking-tight">+91 81466 54185</p>
                  <p className="text-lg font-bold opacity-80">+91 76965 79175</p>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-xs font-medium opacity-70 mb-1 uppercase tracking-widest">Inquiry Support</p>
                  <p className="text-sm font-bold">ntlcarelinkglobal@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Secondary Feature Card */}
            <div className="p-8 bg-medical-dark text-white rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-medical-primary/20 rounded-full -mr-12 -mt-12" />
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shrink-0">
                  <Image 
                    src="/african_patient_profile_1774726934268.png" 
                    alt="Patient Care" 
                    width={80} 
                    height={80} 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Best Treatment in India</h4>
                  <p className="text-slate-100/70 text-sm">Recognized hospitals & world-class expertise at your service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
