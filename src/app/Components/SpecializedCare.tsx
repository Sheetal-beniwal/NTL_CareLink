'use client';

import React from 'react';
import Link from 'next/link';
import TiltedCard from './TiltedCard';
import FloatingMedicalElements from './FloatingMedicalElements';

const careServices = [
  {
    title: "Heart & Vascular Care",
    description: "Heart disease, blood pressure, blocked arteries, cardiac surgery.",
    image: "/african_cardiology_scene_professional_1774726802908.png",
    className: "lg:col-span-8 lg:row-span-1",
    rotateAmplitude: 8,
  },
  {
    title: "Bones & Orthopedic Care",
    description: "Fractures, arthritis, spine issues, knee/hip replacement.",
    image: "/african_orthopedic_scene_professional_1774726816309.png",
    className: "lg:col-span-4 lg:row-span-2",
    rotateAmplitude: 12,
  },
  {
    title: "Cancer Care (Oncology)",
    description: "Diagnosis, chemotherapy, radiotherapy, cancer surgeries.",
    image: "/african_oncology_scene_professional_1774726833206.png",
    className: "lg:col-span-4 lg:row-span-1",
    rotateAmplitude: 10,
  },
  {
    title: "Brain & Nerve Care",
    description: "Stroke, brain tumors, spinal and neurological conditions.",
    image: "/african_neurology_scene_professional_1774726850805.png",
    className: "lg:col-span-4 lg:row-span-1",
    rotateAmplitude: 10,
  },
];

const SpecializedCare = () => {
  return (
    <section className="py-16 md:py-10 px-6 bg-white relative overflow-hidden">
      <FloatingMedicalElements density="low" />
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
            <Link key={index} href="/treatments" className={`${service.className} block active:scale-95 transition-all`}>
              <TiltedCard
                imageSrc={service.image}
                altText={service.title}
                captionText={service.title}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={service.rotateAmplitude}
                scaleOnHover={1.03}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute inset-0 p-6 flex flex-col justify-end w-full h-full">
                    {/* Gradient Overlay integrated into overlayContent for 3D effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/80 dark:from-slate-900/95 via-medical-blue/20 dark:via-slate-900/60 to-transparent rounded-[2rem]" />
                    
                    <div className="relative z-10 transition-transform duration-500 drop-shadow-md">
                      <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-100 text-xs leading-relaxed max-w-[90%] font-medium">
                        {service.description}
                      </p>
                      <div className="w-8 h-0.5 bg-light-green mt-3 rounded-full" />
                    </div>

                    {/* Excellence Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold text-white/90 border border-white/10 uppercase tracking-widest shadow-lg">
                      <div className="w-1.5 h-1.5 bg-light-green rounded-full shadow-[0_0_8px_#9AE6B4]" />
                      <span>Excellence</span>
                    </div>
                  </div>
                }
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedCare;
