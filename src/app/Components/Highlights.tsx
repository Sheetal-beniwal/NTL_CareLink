'use client';

import React from 'react';
import { MapPin, Hospital, Users, ShieldCheck } from 'lucide-react';

const Highlights = () => {
  return (
    <section className="bg-medical-dark text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="p-3 bg-white/10 rounded-2xl text-medical-accent">
            <MapPin size={28} />
          </div>
          <span className="text-3xl font-bold">15+</span>
          <p className="text-slate-100/70 text-sm uppercase tracking-wider">Countries</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="p-3 bg-white/10 rounded-2xl text-medical-accent">
            <Hospital size={28} />
          </div>
          <span className="text-3xl font-bold">200+</span>
          <p className="text-slate-100/70 text-sm uppercase tracking-wider">Hospitals</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="p-3 bg-white/10 rounded-2xl text-medical-accent">
            <Users size={28} />
          </div>
          <span className="text-3xl font-bold">10k+</span>
          <p className="text-slate-100/70 text-sm uppercase tracking-wider">Patients Served</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="p-3 bg-white/10 rounded-2xl text-medical-accent">
            <ShieldCheck size={28} />
          </div>
          <span className="text-3xl font-bold">100%</span>
          <p className="text-slate-100/70 text-sm uppercase tracking-wider">Trust Score</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
