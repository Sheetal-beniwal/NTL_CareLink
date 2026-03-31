'use client';

import React, { useState, useEffect } from 'react';
import FloatingMedicalElements from '../Components/FloatingMedicalElements';

const hospitals = [
  // ── India ──────────────────────────────────────
  {
    id: 1,
    name: 'Artemis Hospital',
    location: 'Gurugram, India',
    country: 'India',
    rating: 4.8,
    tags: ['CARDIOLOGY', 'NEUROLOGY'],
    desc: 'A NABH-accredited multi-specialty hospital known for advanced cardiac care, neurosciences, and robotic surgery in Gurugram.',
    img: '/hospital_images/Artemis hospital.jpeg',
  },
  {
    id: 2,
    name: 'Apollo Hospital',
    location: 'Chennai, India',
    country: 'India',
    rating: 4.9,
    tags: ['ONCOLOGY', 'TRANSPLANT'],
    desc: "Asia's foremost integrated healthcare provider with world-class cancer care, organ transplants, and cutting-edge diagnostics.",
    img: '/hospital_images/Apollo hospital.jpeg',
  },
  {
    id: 3,
    name: 'Medanta Hospital',
    location: 'Gurugram, India',
    country: 'India',
    rating: 4.8,
    tags: ['CARDIOLOGY', 'ORTHOPEDICS'],
    desc: 'Founded by the legendary Dr. Naresh Trehan, Medanta is a center of excellence for heart surgeries and orthopedic procedures.',
    img: '/hospital_images/medanta hospital.jpeg',
  },
  {
    id: 4,
    name: 'Max Hospital',
    location: 'New Delhi, India',
    country: 'India',
    rating: 4.7,
    tags: ['NEUROSURGERY', 'IVF'],
    desc: 'A leading super-specialty hospital offering advanced neurosurgery, fertility treatments, and comprehensive patient care.',
    img: '/hospital_images/max hospital image 1.jpeg',
  },
  {
    id: 5,
    name: 'Fortis Hospital',
    location: 'New Delhi, India',
    country: 'India',
    rating: 4.7,
    tags: ['ONCOLOGY', 'ROBOTIC SURGERY'],
    desc: 'A multi-super specialty quaternary care hospital with a pool of world-renowned clinicians and advanced medical technology.',
    img: '/hospital_images/Fortis hospital image 1.jpeg',
  },
  // ── Thailand ───────────────────────────────────
  {
    id: 6,
    name: 'Bumrungrad Hospital',
    location: 'Bangkok, Thailand',
    country: 'Thailand',
    rating: 4.9,
    tags: ['CARDIOLOGY', 'COSMETIC'],
    desc: "One of Asia's best international hospitals, treating over 1.1 million patients a year with JCI-accredited excellence.",
    img: '/hospital_images/Bumrungrad Hospital.jpeg',
  },
  {
    id: 7,
    name: 'Medpark Hospital',
    location: 'Bangkok, Thailand',
    country: 'Thailand',
    rating: 4.7,
    tags: ['ONCOLOGY', 'NEUROLOGY'],
    desc: 'A premium hospital in Bangkok known for complex cancer treatments, neurology, and patient-centric international care.',
    img: '/hospital_images/medpart hospital.jpeg',
  },
  // ── Turkey ─────────────────────────────────────
  {
    id: 8,
    name: 'Memorial Hospital',
    location: 'Istanbul, Turkey',
    country: 'Turkey',
    rating: 4.8,
    tags: ['TRANSPLANT', 'CARDIOLOGY'],
    desc: "Turkey's largest private hospital group offering organ transplants, cardiac surgery, and advanced oncology treatment.",
    img: '/hospital_images/memorial hospital .jpeg',
  },
  {
    id: 9,
    name: 'Medicana Hospital',
    location: 'Istanbul, Turkey',
    country: 'Turkey',
    rating: 4.6,
    tags: ['ORTHOPEDICS', 'COSMETIC'],
    desc: 'A leading hospital group in Turkey specializing in orthopedic restoration, cosmetic surgery, and dental implants.',
    img: '/hospital_images/medicana hospital images.jpeg',
  },
];

export default function HospitalsPage() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [country, setCountry] = useState('All Countries');
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [locationLoading, setLocationLoading] = useState(true);

  // Detect user's country via our own API route (server-side, no CORS issues)
  useEffect(() => {
    // Support ?testCountry=Thailand in browser URL for dev testing
    const params = new URLSearchParams(window.location.search);
    const testCountry = params.get('testCountry');

    const apiUrl = testCountry
      ? `/api/location?country=${encodeURIComponent(testCountry)}`
      : '/api/location';

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data?.country) setUserCountry(data.country);
      })
      .catch(() => {/* silently fail */})
      .finally(() => setLocationLoading(false));
  }, []);

  // Countries that have partner hospitals
  const partnerCountries = ['India', 'Thailand', 'Turkey'];

  // Get recommended countries: everything EXCEPT the user's own country
  // (medical tourism — you travel AWAY from home for treatment)
  const recommendedCountries = userCountry
    ? partnerCountries.filter(
        (c) => c.toLowerCase() !== userCountry.toLowerCase()
      )
    : [];

  const isUserFromPartnerCountry = userCountry
    ? partnerCountries.some((c) => c.toLowerCase() === userCountry.toLowerCase())
    : false;

  const filtered = hospitals.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesSpecialty =
      specialty === 'All Specialties' ||
      h.tags.some((t) => t.toLowerCase().includes(specialty.toLowerCase()));
    const matchesCountry =
      country === 'All Countries' || h.country === country;
    return matchesSearch && matchesSpecialty && matchesCountry;
  });

  // Sort: if user country is detected, put recommended countries first
  const sorted = [...filtered].sort((a, b) => {
    if (recommendedCountries.length === 0) return 0;
    const aRecommended = recommendedCountries.includes(a.country);
    const bRecommended = recommendedCountries.includes(b.country);
    if (aRecommended && !bRecommended) return -1;
    if (!aRecommended && bRecommended) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen">

      {/* ── Hero & Featured ─────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#f0fbfc] via-white to-[#e8f4f8] px-8 pt-28 pb-16 overflow-hidden">
        <FloatingMedicalElements density="medium" />
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-primary/10 border border-medical-primary/20 text-medical-primary font-bold text-xs uppercase tracking-widest mb-6">
            🌍 Global Hospital Network
          </div>
          <header className="mb-12">
            <h1 className="text-5xl font-extrabold text-medical-dark tracking-tight mb-4 font-[Manrope,sans-serif]">
              World-Class <span className="text-medical-primary">Healthcare</span> Destinations
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              Discover internationally accredited hospitals vetted for surgical excellence, patient safety, and premium hospitality.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Featured Main Card */}
            <div className="md:col-span-8 relative group overflow-hidden rounded-2xl bg-slate-100 h-[450px]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/hospital_images/Artemis hospital.jpeg"
                alt="Artemis Hospital"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm border border-teal-400/30">
                  🇮🇳 Featured · India
                </span>
                <h2 className="text-4xl font-bold text-white mb-2 font-[Manrope,sans-serif]">Artemis Hospital</h2>
                <p className="text-white/80 text-lg mb-6 max-w-xl">
                  A NABH-accredited super-specialty hospital in Gurugram known for advanced cardiac care, neurosciences, and robotic surgery.
                </p>
                <div className="flex gap-4 items-center">
                  <button className="bg-white text-blue-800 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">Learn More</button>
                  <div className="flex items-center gap-2 text-white">
                    <svg className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="font-bold">4.8</span>
                    <span className="text-white/60">(1.8k Reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Secondary Cards */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Accreditation Card — dark navy */}
              <div className="bg-medical-dark p-8 rounded-2xl flex-1 flex flex-col justify-between border border-medical-primary/20">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-medical-primary/20 flex items-center justify-center text-medical-accent">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-medical-accent/70 uppercase tracking-tighter">Accreditation</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white font-[Manrope,sans-serif]">JCI Gold Standard</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    All hospitals in our network maintain JCI accreditation, ensuring global safety protocols and clinical outcomes.
                  </p>
                </div>
                <a href="#" className="text-medical-accent font-bold flex items-center gap-2 mt-4 hover:underline text-sm">View Standards →</a>
              </div>

              {/* Bumrungrad Card */}
              <div className="relative rounded-2xl overflow-hidden flex-1 group min-h-[180px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="/hospital_images/Bumrungrad Hospital.jpeg"
                  alt="Bumrungrad Hospital"
                />
                <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-1">🇹🇭 Thailand</p>
                  <h3 className="text-white font-bold text-2xl mb-1 font-[Manrope,sans-serif]">Bumrungrad Hospital</h3>
                  <p className="text-white/80 text-xs">Bangkok, Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Search & Filter ───────────────────────────────────── */}
      <section className="relative bg-[#f0fbfc] px-8 py-10 overflow-hidden">
        <FloatingMedicalElements density="low" />
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-4 flex flex-wrap lg:flex-nowrap items-center gap-4 border border-medical-primary/10">
            <div className="flex-1 min-w-[200px] relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medical-primary focus:border-transparent text-sm outline-none transition"
                placeholder="Search hospital name or specialty..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="hidden lg:block h-10 w-px bg-slate-200" />
            <div className="w-full lg:w-48 relative">
              <select
                className="w-full appearance-none pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medical-primary text-sm outline-none transition cursor-pointer"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <option>All Specialties</option>
                <option>Cardiology</option>
                <option>Oncology</option>
                <option>Orthopedics</option>
                <option>IVF</option>
                <option>Neurosurgery</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="w-full lg:w-48 relative">
              <select
                className="w-full appearance-none pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medical-primary text-sm outline-none transition cursor-pointer"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>All Countries</option>
                <option>India</option>
                <option>Thailand</option>
                <option>Turkey</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button
              className="w-full lg:w-auto px-8 py-3 bg-medical-primary text-white font-bold rounded-xl hover:bg-medical-dark transition-colors"
              onClick={() => {}}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </section>

      {/* ── Hospital Grid ─────────────────────────────────────── */}
      <section className="relative bg-white px-8 py-16 overflow-hidden">
        <FloatingMedicalElements density="high" />
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-medical-dark font-[Manrope,sans-serif]">Recommended Hospitals</h2>
              <p className="text-slate-500 text-sm">
                Showing {sorted.length} high-performing facilit{sorted.length === 1 ? 'y' : 'ies'} matching your criteria
              </p>
            </div>
          </div>

          {/* Geolocation recommendation banner */}
          {!locationLoading && userCountry && (
            <div className={`mb-8 p-4 rounded-2xl border flex items-start gap-4 ${
              isUserFromPartnerCountry
                ? 'bg-medical-primary/5 border-medical-primary/20'
                : 'bg-blue-50 border-blue-100'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-medical-primary flex items-center justify-center text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                {isUserFromPartnerCountry ? (
                  <>
                    <p className="font-bold text-medical-dark text-sm">
                      📍 We detected you&apos;re browsing from <span className="text-medical-primary">{userCountry}</span>
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Hospitals from <strong>{recommendedCountries.join(' & ')}</strong> are shown first — top destinations for patients from {userCountry} seeking specialized treatment abroad.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-medical-dark text-sm">
                      📍 You&apos;re browsing from <span className="text-medical-primary">{userCountry}</span>
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Explore our partner hospitals in India, Thailand &amp; Turkey — world-class care at affordable costs.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          {sorted.length === 0 ? (
            <div className="py-20 text-center text-slate-400 text-lg">No hospitals match your filters.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sorted.map((h) => (
                <div
                  key={h.id}
                  className="group bg-white rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-medical-primary/10 transition-all duration-300 border border-slate-100"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={h.img}
                      alt={h.name}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-xs font-bold text-slate-800">{h.rating}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-medical-dark/80 backdrop-blur px-2 py-1 rounded-full text-xs text-white font-bold">
                      {h.country === 'India' ? '🇮🇳' : h.country === 'Thailand' ? '🇹🇭' : '🇹🇷'} {h.country}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-1 text-medical-primary text-xs font-bold uppercase tracking-widest mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {h.location}
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-medical-primary transition-colors font-[Manrope,sans-serif]">
                      {h.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {h.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-medical-primary/10 text-[10px] font-bold text-medical-primary tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{h.desc}</p>
                    <button className="w-full py-3 bg-medical-light text-medical-primary font-bold rounded-xl hover:bg-medical-primary hover:text-white transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-2 px-10 py-4 bg-medical-dark text-white border border-medical-primary/20 rounded-xl font-bold shadow-sm hover:bg-medical-primary transition-colors">
              Load More Hospitals
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
