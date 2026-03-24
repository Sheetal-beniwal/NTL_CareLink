'use client';

import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
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
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Medical Travel Assistance",
                "Full Treatment Management",
                "Cost & Budget Planning",
                "Translation & Patient Support",
                "Hospital & Doctor Coordination"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-medical-primary/50 transition-colors group">
                  <div className="w-10 h-10 bg-medical-light text-medical-primary rounded-xl flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-medical-primary group-hover:text-white transition-colors">
                    0{i + 1}
                  </div>
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visuals & Contact */}
          <div className="lg:w-[450px] space-y-8">
            {/* Main Visual with Contact Overlay */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/why-choose-us/hospital.png" 
                alt="Professional Medical Care" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-transparent" />
              
              {/* Contact Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-medical-accent text-white rounded-full text-xs font-bold uppercase tracking-widest mb-2">
                   Get Information
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold">+91 8146654185</p>
                  <p className="text-xl font-bold">+91 7696579175</p>
                </div>
                <p className="text-sm border-t border-white/20 pt-4 opacity-80">
                  ntlcarelinkglobal@gmail.com
                </p>
              </div>
            </div>

            {/* Secondary Feature Card */}
            <div className="p-8 bg-medical-dark text-white rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-medical-primary/20 rounded-full -mr-12 -mt-12" />
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shrink-0">
                  <Image 
                    src="/why-choose-us/patient.png" 
                    alt="Patient Care" 
                    width={80} 
                    height={80} 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Best Treatment in India</h4>
                  <p className="text-gray-400 text-sm">Recognized hospitals & world-class expertise at your service.</p>
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
