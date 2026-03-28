'use client';

import React from 'react';
import Image from 'next/image';
import BorderGlow from './BorderGlow';
import FloatingMedicalElements from './FloatingMedicalElements';

const Gallery = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <FloatingMedicalElements density="medium" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-light text-medical-primary font-bold text-xs uppercase tracking-widest">
               Our Medical Excellence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              World-Class <span className="text-medical-primary">Facilities</span> & Expert Care
            </h2>
          </div>
          <div className="flex-shrink-0">
            <p className="text-gray-500 max-w-sm text-lg italic border-l-4 border-medical-accent pl-6 py-2">
              "Bridging the gap between global medical standards and affordable treatment options."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BorderGlow 
            className="w-full h-80" 
            borderRadius={24} 
            glowColor="180 100% 40%" 
            glowRadius={70}
            glowIntensity={1.8}
            coneSpread={35}
            colors={['#00e0d2', '#00b4d8', '#caf0f8']}
          >
            <div className="group relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all bg-white">
              <Image 
                src="/african_cardiology_scene_professional_1774726802908.png" 
                alt="Cardiology" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-black via-transparent to-transparent opacity-60 dark:opacity-90 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white pointer-events-none drop-shadow-lg">
                <h3 className="text-2xl font-bold">Advanced Cardiology</h3>
              </div>
            </div>
          </BorderGlow>
          
          <BorderGlow 
            className="w-full h-80" 
            borderRadius={24} 
            glowColor="180 100% 40%" 
            glowRadius={70}
            glowIntensity={1.8}
            coneSpread={35}
            colors={['#00e0d2', '#00b4d8', '#caf0f8']}
          >
            <div className="group relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all bg-white">
              <Image 
                src="/african_orthopedic_scene_professional_1774726816309.png" 
                alt="Orthopedics" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-black via-transparent to-transparent opacity-60 dark:opacity-90 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white pointer-events-none drop-shadow-lg">
                <h3 className="text-2xl font-bold">Orthopedics</h3>
              </div>
            </div>
          </BorderGlow>
          
          <BorderGlow 
            className="w-full h-80" 
            borderRadius={24} 
            glowColor="180 100% 40%" 
            glowRadius={70}
            glowIntensity={1.8}
            coneSpread={35}
            colors={['#00e0d2', '#00b4d8', '#caf0f8']}
          >
            <div className="group relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all bg-white">
              <Image 
                src="/african_wellness_recovery_1774726781943.png" 
                alt="Wellness" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-black via-transparent to-transparent opacity-60 dark:opacity-90 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white pointer-events-none drop-shadow-lg">
                <h3 className="text-2xl font-bold">Wellness & Recovery</h3>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
