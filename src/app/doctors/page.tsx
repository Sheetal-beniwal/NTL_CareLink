'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, Building2, Filter, Calendar, Star, BadgeCheck, X, User, Activity, ShieldCheck } from 'lucide-react';
import doctorsDataRaw from '@/../doctors.json';

/* ─────────────────── TYPE & DATA ─────────────────── */

type Doctor = {
  name: string;
  specialty: string;
  hospital: string;
  image_url: string;
  detail_url: string;
};

const doctors: Doctor[] = doctorsDataRaw.map(d => ({
  name: d.name,
  specialty: d.specialization,
  hospital: d.doctor_info,
  image_url: d.image,
  detail_url: d.detail_url,
}));

const allSpecialties = ['All Specialties', ...Array.from(new Set(
  doctors.flatMap(d => d.specialty.split(',').map(s => s.trim()))
)).sort()];

const DOCTORS_PER_HOSPITAL = 10;

/* ─────────────────── SUB COMPONENTS ─────────────────── */

function DoctorCard({ doc }: { doc: Doctor }) {
  const firstSpecialty = doc.specialty.split(',')[0].trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#00A3AD]/50 transition-all duration-300 flex flex-col"
    >
      {/* Photo Container */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={doc.image_url}
          alt={doc.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://www.medicanainternational.com/assets/img/doctors/default-doctor.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
           <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
             <User size={14} className="text-[#00E0D2]" /> View Specialist Profile
           </span>
        </div>
        
        {/* badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-100">
            <BadgeCheck size={14} className="text-[#00A3AD]" />
            <span className="text-[10px] font-black text-[#003B5C] uppercase tracking-wider">Top Expert</span>
          </div>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-[10px] font-black text-[#00A3AD] uppercase tracking-[0.15em] py-0.5 px-2 bg-[#00A3AD]/5 rounded border border-[#00A3AD]/10">
              {firstSpecialty}
            </p>
          </div>
          <h3 className="font-extrabold text-[#003B5C] text-lg mb-2 leading-tight group-hover:text-[#00A3AD] transition-colors line-clamp-2">
            {doc.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#f6ad55" stroke="none" />
              ))}
            </div>
            <span className="text-[10px] font-bold text-slate-400 mt-0.5">(280+ Reviews)</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={doc.detail_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-slate-50 hover:bg-[#003B5C] hover:text-white text-[#003B5C] font-black rounded-xl text-xs uppercase tracking-widest transition-all duration-300 text-center border border-slate-200 hover:border-[#003B5C] shadow-sm hover:shadow-lg"
        >
          Book Consultation
        </a>
      </div>
    </motion.div>
  );
}

function HospitalSection({ hospital, doctors }: { hospital: string; doctors: Doctor[] }) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? doctors : doctors.slice(0, DOCTORS_PER_HOSPITAL);
  const hasMore = doctors.length > DOCTORS_PER_HOSPITAL;

  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8 border-b-2 border-slate-200 pb-5">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#003B5C] flex items-center justify-center text-white shadow-xl rotate-3">
            <Building2 size={26} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#003B5C] tracking-tight mb-1">{hospital}</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded-full">{doctors.length} Verified Specialists</span>
              <div className="flex items-center gap-1.5 text-xs text-[#00A3AD] font-black uppercase tracking-widest">
                <BadgeCheck size={14} /> JCI Accredited
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Grid - Optimized to 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence>
          {visible.map((doc, i) => (
            <DoctorCard key={`${doc.name}-${i}`} doc={doc} />
          ))}
        </AnimatePresence>
      </div>

      {/* Expand/Collapse with optimized UX */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setExpanded(prev => !prev)}
            className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-white border-2 border-[#003B5C] text-[#003B5C] font-black text-sm uppercase tracking-widest hover:bg-[#003B5C] hover:text-white transition-all shadow-xl hover:shadow-[#003B5C]/20 active:scale-95"
          >
            {expanded ? (
              <><ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" /> Show Fewer Specialists</>
            ) : (
              <><ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" /> View {doctors.length - DOCTORS_PER_HOSPITAL} More Experts</>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

/* ─────────────────── MAIN PAGE ─────────────────── */

export default function DoctorsPage() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
      const q = search.toLowerCase();
      const matchSearch = !q || doc.name.toLowerCase().includes(q) || doc.specialty.toLowerCase().includes(q) || doc.hospital.toLowerCase().includes(q);
      const matchSpec = specialty === 'All Specialties' || doc.specialty.toLowerCase().includes(specialty.toLowerCase());
      return matchSearch && matchSpec;
    });
  }, [search, specialty]);

  const grouped = useMemo(() => {
    const map = new Map<string, Doctor[]>();
    filteredDoctors.forEach(doc => {
      const hospitalName = doc.hospital.trim() || 'Other Partner Centers';
      if (!map.has(hospitalName)) map.set(hospitalName, []);
      map.get(hospitalName)!.push(doc);
    });
    return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length);
  }, [filteredDoctors]);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      
      {/* ── CLEAN TOP BAR ── */}
      <div className="h-20 bg-white border-b border-slate-100" />

      {/* ── REFINED SEARCH & HERO ── */}
      <section className="bg-white border-b border-slate-200 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A3AD]/10 border border-[#00A3AD]/20 text-[#00A3AD] font-black text-[10px] tracking-widest uppercase mb-6">
              👨‍⚕️ Expert Clinical Network
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#003B5C] tracking-tight leading-[1.1] mb-6">
              Connect with <span className="text-[#00A3AD]">Global Leaders</span> in Specialized Medicine
            </h1>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mb-10 leading-relaxed">
              Our network features internationally recognized specialists committed to providing exceptional care across more than 50 medical disciplines.
            </p>

            {/* Optimized Search & Filter Suite */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00A3AD] transition-colors" size={20} />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search by Doctor Name, Hospital or Speciality..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-14 pr-6 py-5 text-base font-medium outline-none focus:ring-4 focus:ring-[#00A3AD]/10 focus:border-[#00A3AD] transition-all placeholder-slate-400"
                />
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border-2 transition-all flex items-center justify-center gap-3 ${
                  showFilters ? 'bg-[#003B5C] border-[#003B5C] text-white shadow-xl shadow-[#003B5C]/20' : 'bg-white border-slate-200 text-[#003B5C] hover:border-[#003B5C]'
                }`}
              >
                <Filter size={20} /> Advanced Filters
              </button>
            </div>
          </div>
          
          {/* Collapsible Filter Set */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-8 pt-8 border-t border-slate-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Speciality</label>
                     <select 
                       value={specialty}
                       onChange={e => setSpecialty(e.target.value)}
                       className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-bold text-[#003B5C] outline-none focus:border-[#00A3AD] transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%23003B5C%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1.25rem_center] bg-no-repeat"
                     >
                       {allSpecialties.map(s => <option key={s} value={s}>{s}</option>)}
                     </select>
                   </div>
                   <div className="flex items-end">
                      <button 
                        onClick={() => { setSearch(''); setSpecialty('All Specialties'); }}
                        className="px-8 py-4 text-xs font-black text-slate-400 hover:text-red-500 uppercase tracking-widest transition-all flex items-center gap-2"
                      >
                        <X size={16} /> Reset All Parameters
                      </button>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── DOCTORS DIRECTORY ── */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        {grouped.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
             <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-300" />
             </div>
             <h3 className="text-2xl font-black text-[#003B5C] mb-2">No Specialists Found</h3>
             <p className="text-slate-400 font-medium">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          grouped.map(([hospital, docs]) => (
            <HospitalSection key={hospital} hospital={hospital} doctors={docs} />
          ))
        )}
      </main>

      {/* ── TRUST SECTION ── */}
      <section className="bg-[#003B5C] py-20">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: 'Verified Experts', value: '1,200+', icon: BadgeCheck },
                { label: 'Medical Specialities', value: '50+', icon: Activity },
                { label: 'Patient Success Rate', value: '98%', icon: ShieldCheck },
                { label: 'Worldwide Partners', value: '150+', icon: Building2 }
              ].map((stat, i) => (
                <div key={i} className="space-y-4">
                   <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                      <stat.icon size={28} className="text-[#00E0D2]" />
                   </div>
                   <div>
                     <p className="text-3xl font-black text-white mb-1 uppercase tracking-tight">{stat.value}</p>
                     <p className="text-xs font-bold text-[#00A3AD] uppercase tracking-widest">{stat.label}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── FINAL BOOKING CTA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
           <div className="w-20 h-20 bg-[#00A3AD] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#00A3AD]/30 rotate-12">
              <Calendar size={36} className="text-white" />
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-6 tracking-tight">Ready to Start Your Journey?</h2>
           <p className="text-slate-500 text-lg font-medium mb-10 leading-relaxed">
             Join thousands of patients who have found world-class care through NTL CareLink. Our specialists are waiting to guide you.
           </p>
           <div className="flex flex-wrap justify-center gap-6">
             <Link href="/register" className="px-12 py-5 bg-[#003B5C] text-white font-black rounded-2xl hover:bg-[#00A3AD] transition-all shadow-2xl hover:-translate-y-1 active:scale-95 text-base uppercase tracking-widest">
               Begin Free Assessment
             </Link>
             <Link href="/contact-support" className="px-12 py-5 bg-white border-2 border-slate-200 text-[#003B5C] font-black rounded-2xl hover:border-[#003B5C] transition-all text-base uppercase tracking-widest">
               Speak to Coordinator
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
