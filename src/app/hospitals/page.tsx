import React from 'react';
import { hospitals } from '@/data/hospitals';
import CountrySection from '../Components/Hospitals/CountrySection';
import { HeartPulse } from 'lucide-react';

export default function HospitalsPage() {
  const indiaHospitals = hospitals.filter(h => h.country === 'INDIA');
  const thailandHospitals = hospitals.filter(h => h.country === 'THAILAND');
  const turkeyHospitals = hospitals.filter(h => h.country === 'TURKEY');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-24">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-medical-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-medical-dark pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-medical-accent font-bold text-xs uppercase tracking-widest mb-6 border border-white/20">
            <HeartPulse size={16} />
            Global Network
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Our Affiliated <span className="text-medical-accent">Hospitals</span>
          </h1>
          <p className="text-xl text-slate-100/80 max-w-3xl mx-auto leading-relaxed">
            We partner with the world's most accredited and advanced medical institutions across India, Thailand, and Turkey to bring you uncompromising healthcare excellence without boundaries.
          </p>
        </div>
      </section>

      {/* Listings */}
      <section className="container mx-auto px-6 pt-16 space-y-24">
        <CountrySection countryName="India" flag="🇮🇳" hospitals={indiaHospitals} />
        <CountrySection countryName="Thailand" flag="🇹🇭" hospitals={thailandHospitals} />
        <CountrySection countryName="Turkey" flag="🇹🇷" hospitals={turkeyHospitals} />
      </section>
    </div>
  );
}
