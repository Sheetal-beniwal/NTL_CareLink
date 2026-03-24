'use client';

import React from 'react';
import Image from 'next/image';

const careServices = [
  {
    title: "Heart & Vascular Care",
    description: "Heart disease, blood pressure, blocked arteries, cardiac surgery.",
    image: "/cardiology.png",
    className: "lg:col-span-8 lg:row-span-1",
  },
  {
    title: "Bones & Orthopedic Care",
    description: "Fractures, arthritis, spine issues, knee/hip replacement.",
    image: "/orthopedic.png",
    className: "lg:col-span-4 lg:row-span-2 h-full",
  },
  {
    title: "Cancer Care (Oncology)",
    description: "Diagnosis, chemotherapy, radiotherapy, cancer surgeries.",
    image: "/oncology.png",
    className: "lg:col-span-4 lg:row-span-1",
  },
  {
    title: "Brain & Nerve Care",
    description: "Stroke, brain tumors, spinal and neurological conditions.",
    image: "/neurology.png",
    className: "lg:col-span-4 lg:row-span-1",
  },
];

const SpecializedCare = () => {
  return (
    <section className="py-16 md:py-10 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue tracking-tight uppercase">
            Specialized Medical Care
          </h2>
          <p className="text-ash-grey max-w-xl mx-auto text-base">
            Major medical conditions we handle at NTL. Leading procedures across our global network of excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-[230px]">
          {careServices.map((service, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-700 cursor-pointer border border-gray-100 ${service.className}`}
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              {/* Refined Overlay - Gradient from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/80 via-medical-blue/10 to-transparent group-hover:from-medical-blue/90 transition-all duration-500" />
              
              {/* Always Visible Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end h-full">
                <div className="transition-transform duration-500 group-hover:translate-y-[-5px]">
                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-light-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-100 text-xs leading-relaxed max-w-[90%] font-medium">
                    {service.description}
                  </p>
                  <div className="w-8 h-0.5 bg-light-green mt-3 rounded-full group-hover:w-16 transition-all duration-500" />
                </div>
              </div>

              {/* Minimalist Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/20 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold text-white/90 border border-white/10 uppercase tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-1.5 h-1.5 bg-light-green rounded-full shadow-[0_0_8px_#9AE6B4]" />
                <span>Excellence</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedCare;
