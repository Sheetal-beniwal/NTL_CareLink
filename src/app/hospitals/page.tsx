'use client';

import React, { useState } from 'react';

const hospitals = [
  {
    id: 1,
    name: 'Florence Nightingale Hospital',
    location: 'Istanbul, Turkey',
    rating: 4.8,
    tags: ['ORTHOPEDICS', 'CARDIOLOGY'],
    desc: 'A pioneer in minimally invasive heart surgery and robotic orthopedic procedures with dedicated international patient suites.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHiBJGUztJCVC9spblNUJDNjRP9oiLHlkNxpo3w_gRrqjf98qaUQ7mqpoSB9mWaoIaiqxFmUxyuo0rrj3QJENWvwunu1j8DQZ8PBN_EPlvBzhnRnnJoYbD7su3cOpKkAbO_3x2PXoe9y_QxxHvgqY5GpY8ZvNQ0anUUmLUEJyI41KuitgPmxLGTR10Xc5b8qFst504YskxKf_17olUDLImzufYVTTCSDOTi3ipVpiqNMLFvPeY2EoEyZ7aF_KIHDi36tCTo-qDvw',
  },
  {
    id: 2,
    name: 'Samitivej Sukhumvit Hospital',
    location: 'Bangkok, Thailand',
    rating: 4.9,
    tags: ['PEDIATRICS', 'IVF'],
    desc: 'Recognized by UNICEF and WHO as a Mother and Baby Friendly Hospital, offering world-class fertility treatments.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlWkOmeB-Y5LgCf-MGLjoS8IVAylmxJYdmTIW6aBlMImDwom74Q309jL2TqCWR4mkJQ1CEAjYrYBuJtdPrCrgPs78WpamLfBpKTi_anhKeZAsiQyrXLlM9IIO_O7XGuyO4S4HFjpREBU9uJtslt3_gDnHNbGWNrUJ7n20uWh4qj9Az60NVpPgkrE-MiCVMmOClYMaqWBJjEAaklFf11VBLNt_eo9NSYmAChvU5hAELVuuzlwt-GhMNXrwq5Yz9fkBbMFig90uN-w',
  },
  {
    id: 3,
    name: 'Fortis Memorial Research Institute',
    location: 'New Delhi, India',
    rating: 4.7,
    tags: ['NEUROSURGERY', 'ONCOLOGY'],
    desc: 'A multi-super specialty, quaternary care hospital with a pool of world-renowned clinicians and advanced medical tech.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIpUFiAE0HOkPsfE2Cip4Ntm_9Iat0kLgjzYd_8DRyOfq9qFrsygAGBg69YL-Kg-XZhelY-JZdOe5-ApynaiVDWMOUoOzYnkc0CZ0EWkR6l3gdRJTGxmcaX21h5m0HB2fteeRRtXIJl-CI-DV7XwokhrrP8POT3ftvEUmQEn-TvBbd-TzYsL1dpj2UF8G-0V1v-KOg2E9-XSBhX1jfhr1JxfofujmWvodFPiHjSYFzg4kuSqZf8pitBCCFrPqvbbHrPdDh11O90g',
  },
  {
    id: 4,
    name: 'Galenia Hospital',
    location: 'Cancun, Mexico',
    rating: 4.6,
    tags: ['COSMETIC', 'BARIATRIC'],
    desc: 'Specializing in aesthetics and metabolic surgery, Galenia combines surgical precision with a recuperative resort experience.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA21ld3GWpsE5xUZYsK3qFVmPZfm4zh_r1UfV5vlz-xEqRQcYPVAu__8DH1xppGJz3cZlFAoRtR-T884Ci3NvrYYSjlwZLC21PCwWjfojeneV_F4rOvdALn5UqgaZ12bsLYzIHoL4WFDR3lSa3L2LJh2rM_vuB61jbmMVxOJYFD33N_Ho56PCVqDxg4GKaE9IMT5f-aTI22g0-W25jZ7Gk0U4J-Q-QQdClCOCJYvEZcHrIpOpJlz4JdGEL5FGc9JuvQvQFSoBcf6Q',
  },
  {
    id: 5,
    name: 'American Hospital Dubai',
    location: 'Dubai, UAE',
    rating: 4.9,
    tags: ['DIABETES', 'ROBOTIC SURGERY'],
    desc: 'Premier private healthcare provider in the Middle East, leading in complex robotic surgeries and precision medicine.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8A2oOd1RY0J0VBhHNWTUWN7BDhnsP4IBYR9cuCOL5sZdVrhbD0dzQ6N1B8v4CLlKGpTc6S_khMVrcqRt3bl4omBcs6AlBf8JhSJxhPsj2GsqoYKSS0gjn0ncSjHiMQ1nulCxMwYXumrdPBUt5n6GBW3JI_uLMU9f5s18n2dkm3ZfKfR7hRd-mQM5RCRVWxqWWIHeUDWaHaIGoVFpAuTjE-EPPK3qxq-7zgjnsniCmD-cqI4m2amS5sRQw7coAJP8xuZhMuLHh_Q',
  },
  {
    id: 6,
    name: 'Asan Medical Center',
    location: 'Seoul, South Korea',
    rating: 4.5,
    tags: ['LIVER TRANSPLANT', 'ONCOLOGY'],
    desc: 'Globally recognized for its organ transplant programs and high success rates in treating complex cancers.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-phU_K5cXQDvdN96kdfus91Btudth2E6-eDy2GuaY4vez40XRqZcnP4wrje660IL08vzsME-aRNkMTO6XYYTgKiEd38GPrT1cdsYk8U3N6TvDZfWn3-1IeXRa6Uh9VfoMYYpyL3UHuZQ04UsXjTKF4X3RxmGRtKXzJJVWJd9XcsMqJh8nV7earCrrE59BU7t9IcrIzhO3HRUgHH5JxwP_90-E7nRxjO1_0YLa0HfbHYwuJGPo98p9ObVlKjWRtqrXnNbO6SxgWA',
  },
];

export default function HospitalsPage() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [country, setCountry] = useState('All Countries');

  const filtered = hospitals.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesSpecialty =
      specialty === 'All Specialties' ||
      h.tags.some((t) => t.toLowerCase().includes(specialty.toLowerCase()));
    const matchesCountry =
      country === 'All Countries' || h.location.toLowerCase().includes(country.toLowerCase());
    return matchesSearch && matchesSpecialty && matchesCountry;
  });

  return (
    <div className="bg-[#f7f9fb] dark:bg-slate-900 min-h-screen">
      {/* ── Hero & Featured ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 pt-28 pb-16">
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-[Manrope,sans-serif]">
            World-Class Healthcare Destinations
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            Discover internationally accredited hospitals vetted for surgical excellence, patient
            safety, and premium hospitality.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Featured Main Card */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 h-[450px]">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxABccvhbwHc77t2f27zK3Qp54WC2stlz97oXW2RmcjvEjcjDtDMGAmN5iDbgLsADwByVfGLwJWBkkpFeQzMIuX49LfuBYij9aYp7ImSk3gmI_xNvdcf58WABNqmaBoOMZa27uiRIohmNCOWt8dYnvQNJ8WJz9geUzcVvSapLuuN54IdQhNdeFcPtkFq5RyRP6gmHQw8fH3BTc06z-l4r6_B_g89HJ8RpEusDTtLY4u0WrsTOGxSP31bcdnTc3EvY8_A_KVK2RaQ"
              alt="Modern luxury hospital lobby"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm border border-teal-400/30">
                Featured Excellence
              </span>
              <h2 className="text-4xl font-bold text-white mb-2 font-[Manrope,sans-serif]">
                Anadolu Medical Center
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-xl">
                Affiliated with Johns Hopkins Medicine, Anadolu offers premier oncology and
                cardiovascular care in Kocaeli, Turkey.
              </p>
              <div className="flex gap-4 items-center">
                <button className="bg-white text-blue-800 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                  Learn More
                </button>
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-bold">4.9</span>
                  <span className="text-white/60">(2.4k Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Secondary Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Accreditation Card */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl flex-1 border border-slate-200/60 dark:border-slate-700 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                    Accreditation
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white font-[Manrope,sans-serif]">
                  JCI Gold Standard
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  All hospitals in our network maintain JCI accreditation, ensuring global safety
                  protocols and clinical outcomes.
                </p>
              </div>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2 mt-4 hover:underline text-sm"
              >
                View Standards →
              </a>
            </div>

            {/* Bumrungrad Card */}
            <div className="relative rounded-2xl overflow-hidden flex-1 group min-h-[180px]">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO5zl_PFYBdhPGpRJTsmHdKQHLHh6o0q565OFMl0jy91i1WCTOjN2P4dkskR2u3IJFQ-SAgZDWvTuhEjwGxoxBMXgy_-L7NvDMbV8w9dsh2KtJVMc0XRT9udMIqe_AyA-oEAbiju1-AiRSBtl-PEDtNYrPqTeGcLuDpBrjZYOxXPO32LLz4R9QwoKNcjunr1anP4iRFf1fJmeoL6QCOAsdJzssvcnU3ECUTuSkQcze22U1n7HbbJEKKqMzi54j5UiPRuJmM0XFdw"
                alt="Bumrungrad International Hospital"
              />
              <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white font-bold text-2xl mb-1 font-[Manrope,sans-serif]">
                  Bumrungrad International
                </h3>
                <p className="text-white/80 text-xs">Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search & Filter ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-4 flex flex-wrap lg:flex-nowrap items-center gap-4 border border-slate-200/60 dark:border-slate-700">
          {/* Search */}
          <div className="flex-1 min-w-[200px] relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm dark:text-white dark:placeholder-slate-400 outline-none transition"
              placeholder="Search hospital name or specialty..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="hidden lg:block h-10 w-px bg-slate-200 dark:bg-slate-600" />

          {/* Specialty */}
          <div className="w-full lg:w-48 relative">
            <select
              className="w-full appearance-none pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm dark:text-white outline-none transition cursor-pointer"
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
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Country */}
          <div className="w-full lg:w-48 relative">
            <select
              className="w-full appearance-none pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm dark:text-white outline-none transition cursor-pointer"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>All Countries</option>
              <option>Turkey</option>
              <option>Thailand</option>
              <option>India</option>
              <option>Mexico</option>
              <option>UAE</option>
              <option>South Korea</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <button
            className="w-full lg:w-auto px-8 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors"
            onClick={() => {}}
          >
            Apply Filters
          </button>
        </div>
      </section>

      {/* ── Hospital Grid ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-[Manrope,sans-serif]">
              Recommended Hospitals
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Showing {filtered.length} high-performing facilit{filtered.length === 1 ? 'y' : 'ies'} matching your criteria
            </p>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center text-slate-400 dark:text-slate-500 text-lg">
            No hospitals match your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((h) => (
              <div
                key={h.id}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
              >
                {/* Image */}
                <div className="h-56 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={h.img}
                    alt={h.name}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <svg
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-xs font-bold text-slate-800 dark:text-white">
                      {h.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {h.location}
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-[Manrope,sans-serif]">
                    {h.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {h.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-[10px] font-bold text-slate-500 dark:text-slate-300 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {h.desc}
                  </p>

                  <button className="w-full py-3 bg-slate-100 dark:bg-slate-700 text-blue-700 dark:text-blue-400 font-bold rounded-xl hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 px-10 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl font-bold text-blue-700 dark:text-blue-400 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Load More Hospitals
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
