'use client';

import React, { useState, useEffect } from 'react';
import FloatingMedicalElements from '../Components/FloatingMedicalElements';

import doctorsDataRaw from '@/../doctors.json';

const doctors = doctorsDataRaw.map(d => ({
  name: d.name,
  specialty: d.specialization,
  hospital: d.doctor_info,
  image_url: d.image
}));

const specialties = [
  "All Specialties",
  ...Array.from(new Set(doctors.flatMap(d => d.specialty.split(',').map(s => s.trim())))).sort()
];

const hospitalsOptions = [
  "All Hospitals",
  ...Array.from(new Set(doctors.map(d => d.hospital))).sort()
];

export default function DoctorsPage() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [hospital, setHospital] = useState('All Hospitals');

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) || 
                          doc.specialty.toLowerCase().includes(search.toLowerCase());
    const matchesSpecialty = specialty === 'All Specialties' || doc.specialty.includes(specialty);
    const matchesHospital = hospital === 'All Hospitals' || doc.hospital === hospital;
    return matchesSearch && matchesSpecialty && matchesHospital;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* --- Hero Section --- */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 px-8 pt-32 pb-20 overflow-hidden">
        <FloatingMedicalElements density="medium" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-primary/10 border border-medical-primary/20 text-medical-primary font-bold text-xs uppercase tracking-widest mb-6">
            👨‍⚕️ Expert Medical Team
          </div>
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-medical-dark dark:text-white tracking-tight mb-6 font-[Manrope,sans-serif]">
              Meet Our <span className="text-medical-primary">World-Class</span> Doctors
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
              Our network features internationally recognized specialists committed to providing exceptional care across more than 50 medical disciplines.
            </p>
          </header>

          {/* --- Search & Filter Bar --- */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-medical-primary/5 p-6 flex flex-wrap lg:flex-nowrap items-center gap-4 border border-medical-primary/10 transition-all">
            <div className="flex-[2] min-w-[280px] relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-medical-primary focus:border-transparent text-sm outline-none transition dark:text-white"
                placeholder="Search by name, specialty..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex-1 min-w-[200px] relative">
              <select
                className="w-full appearance-none pl-4 pr-10 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-medical-primary text-sm outline-none transition cursor-pointer dark:text-white"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                {specialties.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex-1 min-w-[200px] relative">
              <select
                className="w-full appearance-none pl-4 pr-10 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-medical-primary text-sm outline-none transition cursor-pointer dark:text-white"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
              >
                {hospitalsOptions.map(h => <option key={h} value={h}>{h}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* --- Doctors Gallery --- */}
      <section className="px-8 py-16 max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-medical-dark dark:text-white font-[Manrope,sans-serif]">
            Found {filteredDoctors.length} Specialists
          </h2>
          <div className="h-px flex-1 mx-8 bg-slate-200 dark:bg-slate-800 hidden md:block" />
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="py-20 text-center">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No doctors found</h3>
            <p className="text-slate-500">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doc, idx) => (
              <div 
                key={idx}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-100 dark:border-slate-800 hover:border-medical-primary/30 hover:shadow-2xl hover:shadow-medical-primary/10 transition-all duration-500 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={doc.image_url} 
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://www.medicanainternational.com/assets/img/doctors/default-doctor.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full text-[10px] font-bold text-medical-primary uppercase tracking-wider shadow-sm">
                    Verified Expert
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 flex-1 flex flex-col">
                  <p className="text-medical-primary text-[11px] font-bold uppercase tracking-widest mb-1.5 line-clamp-1">
                    {doc.specialty}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-medical-primary transition-colors leading-tight font-[Manrope,sans-serif]">
                    {doc.name}
                  </h3>
                  <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6">
                    <svg className="w-4 h-4 mt-0.5 text-medical-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="line-clamp-2">{doc.hospital}</span>
                  </div>

                  <button className="w-full py-3.5 bg-slate-50 dark:bg-slate-800 text-medical-dark dark:text-white font-bold rounded-2xl hover:bg-medical-primary hover:text-white group-hover:shadow-lg group-hover:shadow-medical-primary/20 transition-all duration-300 text-sm flex items-center justify-center gap-2">
                    Book Appointment
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- Pagination / Load More --- */}
        {filteredDoctors.length > 0 && (
          <div className="mt-20 flex flex-col items-center">
            <p className="text-slate-400 text-sm mb-6">Showing {filteredDoctors.length} out of {doctors.length} doctors</p>
            <button className="px-10 py-4 bg-medical-dark dark:bg-white dark:text-medical-dark text-white rounded-full font-bold shadow-xl hover:bg-medical-primary dark:hover:bg-medical-primary dark:hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
              Load More Specialists
            </button>
          </div>
        )}
      </section>

      {/* --- Trust Markers --- */}
      <section className="bg-medical-dark py-16 px-8 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'JCI Accredited', value: '100%', sub: 'Safety Standard' },
            { label: 'Expert Doctors', value: '1200+', sub: 'Global Network' },
            { label: 'Specialties', value: '50+', sub: 'Medical Fields' },
            { label: 'Happy Patients', value: '50k+', sub: 'Treated Yearly' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-medical-primary font-bold text-xs uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-slate-400 text-[10px]">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
