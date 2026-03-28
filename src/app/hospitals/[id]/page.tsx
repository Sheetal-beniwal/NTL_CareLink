import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Calendar, HeartPulse } from 'lucide-react';
import { hospitals } from '@/data/hospitals';

export default function HospitalDetailsPage({ params }: { params: { id: string } }) {
  const hospital = hospitals.find(h => h.id === params.id);

  if (!hospital) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-24">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-medical-dark overflow-hidden">
        <Image 
          src={hospital.mainImage} 
          alt={hospital.name} 
          fill 
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="container mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-6 border border-white/30">
              {hospital.country}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              {hospital.name}
            </h1>
            <div className="flex items-center gap-2 text-xl text-slate-100/90 font-medium">
              <MapPin size={24} className="text-medical-accent" />
              <span>{hospital.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details & Details */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview */}
            <section className="space-y-6 bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[32px] shadow-sm border border-gray-100 dark:border-white/5">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Overview</h2>
              <div className="w-16 h-1 bg-medical-primary rounded-full" />
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {hospital.fullDescription}
              </p>
            </section>

            {/* Specialties */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 px-4">Centers of Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hospital.specialties.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="w-12 h-12 bg-medical-light/50 dark:bg-slate-700/50 text-medical-primary dark:text-medical-accent rounded-xl flex items-center justify-center shrink-0">
                      <HeartPulse size={24} />
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{spec}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            {hospital.gallery.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 px-4">Facility Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hospital.gallery.map((img, idx) => (
                    <div key={idx} className="relative h-64 w-full rounded-[32px] overflow-hidden shadow-lg group">
                      <Image 
                        src={img} 
                        alt={`${hospital.name} facility`} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column: Sticky Sidebar Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              
              <div className="bg-medical-dark text-white p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                
                <h3 className="text-2xl font-bold mb-2 relative z-10">Plan Your Medical Travel</h3>
                <p className="text-slate-100/70 mb-8 relative z-10">
                  Get a free medical opinion and cost estimate for {hospital.name}.
                </p>
                
                <div className="space-y-4 relative z-10">
                  <button className="w-full py-4 bg-medical-accent hover:bg-white text-medical-dark font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,224,210,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                    <Calendar size={20} />
                    <span>Book Consultation</span>
                  </button>
                  <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-2">
                    <Phone size={20} />
                    <span>Request Callback</span>
                  </button>
                </div>
              </div>

              {/* Trust badge */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-medical-light/50 dark:bg-slate-700/50 text-medical-primary dark:text-medical-accent rounded-full flex items-center justify-center mb-4">
                  <HeartPulse size={32} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Priority Admission</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  NTL CareLink guarantees expedited visa processing and priority admission for our international network.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
