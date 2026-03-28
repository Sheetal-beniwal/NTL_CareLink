'use client';

import React from 'react';
import { ShieldCheck, Hospital, Stethoscope, Users, MapPin, MessageSquare } from 'lucide-react';

const HealthServices = () => {
  return (
    <section className="py-24 bg-medical-dark dark:bg-[#0b1120] border-b border-gray-100 dark:border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medical-light/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl -z-10" />

      <div className="container mx-auto px-6 space-y-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-medical-accent font-bold text-xs uppercase tracking-widest">
            Excellence in Care
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Our Comprehensive <span className="text-medical-accent">Health Services</span>
          </h2>
          <p className="text-slate-100/70 text-lg">
            We are always here to ensure your health is served better with world-class 
            medical assistance and end-to-end patient care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Medical Visa Assistance", 
              desc: "Facilitating smooth visa invitations and processing for international patients.",
              icon: <ShieldCheck className="w-8 h-8" /> 
            },
            { 
              title: "Hospital Coordination", 
              desc: "Strategic partner network to find the best hospitals and medical specialists in India.",
              icon: <Hospital className="w-8 h-8" /> 
            },
            { 
              title: "Full Journey Management", 
              desc: "Professional handling of appointments, diagnosis, surgical bookings, and discharge.",
              icon: <Stethoscope className="w-8 h-8" /> 
            },
            { 
              title: "Free Medical Opinion", 
              desc: "Online consultation with top doctors to plan your treatment before you fly.",
              icon: <Users className="w-8 h-8" /> 
            },
            { 
              title: "Patient Concierge", 
              desc: "Pick-up services, local SIM cards, currency exchange, and accommodation support.",
              icon: <MapPin className="w-8 h-8" /> 
            },
            { 
              title: "Translation & Support", 
              desc: "Language assistants and dedicated support staff to bridge any communication gaps.",
              icon: <MessageSquare className="w-8 h-8" /> 
            }
          ].map((service, i) => (
            <div key={i} className="group p-8 rounded-[32px] bg-white border border-transparent dark:border-white/5 shadow-xl hover:shadow-2xl hover:shadow-medical-primary/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-medical-light/50 rounded-bl-[64px] transition-transform group-hover:scale-110" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-medical-light flex items-center justify-center text-medical-primary transition-transform group-hover:scale-110 group-hover:bg-medical-primary group-hover:text-white group-hover:rotate-6">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-medical-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-base">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-medical-primary font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <div className="w-5 h-[2px] bg-medical-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthServices;
