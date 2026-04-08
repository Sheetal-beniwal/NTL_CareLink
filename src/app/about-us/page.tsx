'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2, MapPin, ShieldCheck, Users, Target, Award,
  Globe, ArrowRight, Heart, Quote, Sparkles, Stethoscope,
  Activity, Briefcase, Star, BadgeCheck, Phone, MessageCircle,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingMedicalElements from '../Components/FloatingMedicalElements';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.15 } } };

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">

        {/* ─── 1. HERO ─── */}
        <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-medical-dark">
          <div className="absolute inset-0 z-0">
            <Image src="/hero-bg.png" alt="Background" fill className="object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-dark/95 to-white" />
          </div>
          <FloatingMedicalElements density="low" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center space-y-5 sm:space-y-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-medical-primary/20 border border-medical-primary/30 text-medical-accent font-bold text-xs sm:text-sm tracking-[0.15em] uppercase">
              <Sparkles size={16} /> Dedicated Since Day One
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight px-2">
              Bridging Borders to <br />
              <span className="text-medical-accent">Better Health</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              NTL CareLink connects patients across Africa and beyond with world-class healthcare. Every life deserves the best medical care, regardless of geography.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2 px-4">
              <Link href="/register" className="px-6 sm:px-8 py-3 sm:py-4 bg-medical-primary hover:bg-white hover:text-medical-dark text-white font-extrabold rounded-xl transition-all shadow-2xl text-sm sm:text-base flex items-center justify-center gap-2">
                Get Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="#founder" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm sm:text-base flex items-center justify-center">
                Meet Our Founder
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── QUICK STATS BAR ─── */}
        <section className="bg-[#003B5C] py-6 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[['50+', 'Partner Hospitals'], ['10K+', 'Lives Touched'], ['15+', 'Countries'], ['98%', 'Success Rate']].map(([v, l]) => (
                <div key={l}>
                  <p className="text-2xl sm:text-3xl font-black text-white">{v}</p>
                  <p className="text-[10px] sm:text-xs font-bold text-[#00E0D2] uppercase tracking-widest mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2. WHO WE ARE ─── */}
        <section className="py-16 sm:py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-24">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="w-full lg:w-3/5 space-y-6 sm:space-y-10 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="w-16 h-1.5 bg-medical-primary rounded-full" />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    NTL CareLink: <br />
                    <span className="text-medical-primary italic">Transformative Life-Care</span>
                  </h2>
                </div>
                
                <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-600 leading-relaxed">
                  <p className="font-semibold text-gray-900 text-lg sm:text-xl">
                    This is not just healthcare. This is a movement of hope, access, and transformation.
                  </p>
                  <p>
                    Established as a beacon of hope for patients seeking advanced medical treatments, NTL CareLink has evolved into one of the most trusted medical travel facilitators across Africa and beyond. At NTL, we exist to change the story for millions who suffer not because treatment doesn't exist, but because they lack the bridge to reach it.
                  </p>
                  <p>
                    We are building a powerful global healthcare ecosystem designed to connect patients—especially from underserved regions in Africa, Asia, and the Middle East—to world-class care and trusted guidance. Because for us, healthcare is not a transaction; it is a responsibility.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-4">
                    {[
                      { from: 'Confusion', to: 'Clarity' },
                      { from: 'Fear', to: 'Confidence' },
                      { from: 'Distance', to: 'Access' },
                      { from: 'Hope', to: 'Reality' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <span className="text-gray-400 line-through text-xs">{item.from}</span>
                        <ChevronRight className="text-medical-primary" size={16} />
                        <span className="font-bold text-medical-dark">{item.to}</span>
                      </div>
                    ))}
                  </div>

                  <p>
                    Through our digital health platform and community-led education programs, we ensure that every journey leads to healing and dignity. We are not just solving today's problems; we are building tomorrow's healthcare system.
                  </p>
                </div>

                <div className="flex flex-wrap gap-8 pt-4">
                  <div className="space-y-1">
                    <p className="text-3xl sm:text-4xl font-black text-medical-dark">50+</p>
                    <p className="text-xs font-bold text-medical-primary uppercase tracking-widest">Accredited Hospitals</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl sm:text-4xl font-black text-medical-dark">15+</p>
                    <p className="text-xs font-bold text-medical-primary uppercase tracking-widest">Target Markets</p>
                  </div>
                </div>
              </motion.div>

              <div className="w-full lg:w-2/5 relative order-1 lg:order-2">
                <motion.div initial={{ scale: 0.85, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1.2 }}
                  className="relative z-10 aspect-[4/5] max-w-sm sm:max-w-md lg:max-w-full mx-auto rounded-[3rem] sm:rounded-[5rem] overflow-hidden shadow-2xl border-[6px] sm:border-[12px] border-white">
                  <Image src="/african_medical_scene_1774726766055.png" alt="Our Vision" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/40 to-transparent" />
                </motion.div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-medical-primary/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-medical-accent/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. CORE PILLARS ─── */}
        <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <p className="text-xs font-bold text-medical-primary uppercase tracking-widest mb-3">Our Foundation</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">What Drives Us</h2>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
              {[
                { icon: <Target className="w-8 h-8 sm:w-10 sm:h-10" />, title: 'Our Mission', desc: 'To democratize world-class healthcare by making it accessible, affordable, and stress-free for every patient across borders.', color: 'bg-medical-primary' },
                { icon: <Activity className="w-8 h-8 sm:w-10 sm:h-10" />, title: 'Our Vision', desc: 'To be recognized as the global gold standard in medical facilitation, where every journey leads to a successful recovery.', color: 'bg-medical-dark' },
                { icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10" />, title: 'Our Values', desc: 'Integrity, Compassion, and Excellence. We do what is right for the patient, every single time, without exception.', color: 'bg-medical-accent' },
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp}
                  className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${item.color} text-white rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{item.title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 4. FOUNDER ─── */}
        <section id="founder" className="py-20 sm:py-28 bg-medical-dark relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-medical-primary blur-[160px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-medical-accent blur-[160px] -translate-x-1/2 translate-y-1/2" />
          </div>
          
          {/* Faded Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
            Visionary
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

              {/* Photo Column */}
              <div className="w-full lg:w-[45%] group relative">
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1 }}
                    className="relative z-10 aspect-[4/5] max-w-sm mx-auto lg:max-w-full rounded-[3rem] sm:rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl"
                  >
                    <Image 
                      src="/sultan_founder.png" 
                      alt="Sultan Ngong" 
                      fill 
                      className="object-cover object-top transition-transform duration-[3000ms] group-hover:scale-105" 
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-transparent opacity-40" />
                  </motion.div>
                  
                  {/* Decorative Frame */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-medical-accent opacity-30 rounded-tl-[3rem] pointer-events-none" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-medical-primary opacity-30 rounded-br-[3rem] pointer-events-none" />
                </div>

                {/* Overlapping Quote card */}
                <motion.div 
                  initial={{ y: 30, opacity: 0 }} 
                  whileInView={{ y: 0, opacity: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-10 -left-4 sm:left-10 lg:-left-12 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl max-w-[260px] sm:max-w-[320px] z-20 border-b-4 border-medical-accent"
                >
                  <Quote size={32} className="text-medical-primary mb-4 opacity-20" />
                  <p className="text-medical-dark font-black italic text-base sm:text-lg leading-tight">
                    "Healthcare is NOT a privilege — it is a right for every human soul."
                  </p>
                </motion.div>
              </div>

              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[55%] space-y-8 mt-12 lg:mt-0"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-medical-accent font-bold text-xs tracking-widest uppercase mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-medical-accent animate-pulse" />
                    Founder Spotlight
                  </div>
                  <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
                    Meet <span className="text-medical-accent italic">Sultan Ngong</span>
                  </h2>
                </div>

                <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                  <p className="text-white font-medium text-xl sm:text-2xl italic leading-tight">"When access to healthcare becomes a privilege, leadership must rise to make it a right."</p>
                  <p className="opacity-90">Sultan Ngong is not simply a founder or a CEO; he is a visionary force, a bridge between continents, and a leader driven by one powerful mission: to ensure that no life is limited by lack of access to quality healthcare. A visionary healthcare entrepreneur, an innovator, and relentless problem solver, Sultan stands at the forefront of a new era in global healthcare access.</p>
                  <p className="opacity-90">As the Founder and CEO of <strong className="text-white font-bold">NTL CareLink (Network for Transformative Life-Care)</strong>, he is redefining what it means to deliver care across borders, transforming uncertainty into hope, and barriers into bridges. Born from a deep awareness of the healthcare challenges facing Africa, Central Asia, and the Middle East, Sultan’s journey began with a simple but powerful conviction: no human life should be limited by geography, access, or information.</p>
                  <p className="opacity-90">What started as a bold idea with a small team of medical consultants has evolved into a fast-growing multinational healthcare ecosystem connecting patients to world-class treatment across continents. But beyond strategy and scale lies something deeper—his humanity. Sultan has personally guided and overseen the journeys of thousands of patients, ensuring that every individual is treated not just as a case, but as a life that matters.</p>
                  <p className="opacity-90">His leadership is anchored in one unwavering principle: <strong className="text-medical-accent font-bold">Distance should never decide who lives and who dies.</strong> This principle is not just spoken, it is lived. It defines every partnership, every decision, and every patient experience within NTL CareLink. Today, he is shaping a global healthcare ecosystem—integrating medical tourism, digital health, and health education to empower communities and save lives.</p>
                  <p className="text-white font-bold text-lg sm:text-xl border-l-4 border-medical-accent pl-6 py-2">Sultan Ngong is not just building a company. He is building access. He is building trust. He is building hope. And in doing so, he is building the future of healthcare.</p>
                </div>

                <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-6 sm:gap-12 border-t border-white/10">
                  {[
                    { icon: <Stethoscope size={22} />, title: 'Healthcare Pioneer', sub: 'Innovating Medical Tourism' },
                    { icon: <Briefcase size={22} />, title: '20+ Years Exp.', sub: 'Expert Facilitation' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center text-medical-accent shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base sm:text-lg">{item.title}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm italic">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 5. NTL TEAM ─── */}
        <section className="py-16 sm:py-24 md:py-32 bg-white selection:bg-medical-primary/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-6">
              <div className="space-y-4 max-w-2xl">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-primary/10 text-medical-primary font-bold text-[10px] sm:text-xs tracking-widest uppercase">
                  <Users size={14} /> The Experts Behind the Care
                </motion.div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-medical-dark leading-tight">
                  Meet the <span className="text-medical-primary">NTL Powerhouse</span>
                </h2>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-light">
                  Our multidisciplinary team combines clinical excellence with logistical precision to ensure your health journey is flawless.
                </p>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <Link href="/doctors" className="flex items-center gap-2 text-medical-primary font-bold hover:underline group text-sm sm:text-base">
                  View Medical Specialists <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {[
                { name: "Dr. Evelyn Reed", role: "Medical Director", image: "/team/medical_director.png", bio: "25+ years expertise in clinical standards and JCI accreditation." },
                { name: "Kofi Mensah", role: "Head of Logistics", image: "/team/logistics_head.png", bio: "Master of cross-border medical travel and patient coordination." },
                { name: "Abimbola Adebayo", role: "Patient Care Manager", image: "/team/patient_care.png", bio: "Leading our 24/7 compassionate support network for every patient." },
                { name: "Sarah Mwangi", role: "Regional Manager (East Africa)", image: "/team/regional_manager.png", bio: "Connecting East African patients to global healthcare pathways." },
              ].map((member, i) => (
                <motion.div key={i} variants={fadeInUp}
                  className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/90 via-medical-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-black text-xl mb-1">{member.name}</p>
                      <p className="text-medical-accent font-bold text-xs uppercase tracking-widest">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-4 bg-white relative z-10 transition-colors duration-500">
                    <p className="text-gray-600 text-sm leading-relaxed italic line-clamp-3">"{member.bio}"</p>
                    <div className="pt-4 flex items-center justify-between border-t border-gray-100 group-hover:border-medical-primary/20 transition-colors">
                      <div className="flex gap-3">
                        <Link href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-medical-primary hover:text-white transition-all">
                          <Target size={14} />
                        </Link>
                        <Link href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-medical-primary hover:text-white transition-all">
                          <Globe size={14} />
                        </Link>
                      </div>
                      <ChevronRight size={20} className="text-medical-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 6. GLOBAL HUB NETWORK ─── */}
        <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 text-center space-y-10 sm:space-y-16">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Our <span className="text-medical-primary">Global Reach</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600">Connecting East & Central Africa to the World's Best Medical Hubs.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {[
                { name: 'South Sudan', flag: '🇸🇸', status: 'Headquarters' },
                { name: 'Kenya / Uganda', flag: '🇰🇪🇺🇬', status: 'Regional Offices' },
                { name: 'India Hub', flag: '🇮🇳', status: 'Primary Care Network' },
                { name: 'Thailand / Turkey', flag: '🇹🇭🇹🇷', status: 'Specialized Hubs' },
              ].map((hub, i) => (
                <motion.div key={i} whileHover={{ y: -8 }}
                  className="p-5 sm:p-10 bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center gap-2 sm:gap-4">
                  <span className="text-3xl sm:text-5xl">{hub.flag}</span>
                  <h4 className="text-base sm:text-2xl font-bold text-medical-dark">{hub.name}</h4>
                  <span className="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full bg-medical-light text-medical-primary font-bold text-[9px] sm:text-xs uppercase text-center">{hub.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. TRUST SIGNALS ─── */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Why Patients <span className="text-medical-primary">Trust Us</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {[
                { icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Globally Accredited Partners', desc: 'Every hospital in our network holds JCI or equivalent international accreditation.' },
                { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Full Journey Management', desc: 'From first consultation to travel, treatment, and recovery—we walk with you every step.' },
                { icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Digital Health Innovation', desc: 'Access specialists from anywhere through our proactive digital health ecosystem.' },
                { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Health Education', desc: 'Equipping communities with the knowledge they need to protect their families and thrive.' },
                { icon: <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Mission-Driven Team', desc: 'A scalable, borderless network serving millions across Africa, Asia, and the Middle East.' },
                { icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Compassionate Care', desc: 'Where lives are saved and hope is restored. We treat every patient with the dignity they deserve.' },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -4 }}
                  className="flex gap-4 sm:gap-5 p-5 sm:p-7 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-medical-primary/10 text-medical-primary rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6.5 JOIN THE MOVEMENT ─── */}
        <section className="py-16 sm:py-24 bg-medical-dark relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image src="/hero-bg.png" alt="Background" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Join the Movement</h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Connecting the world to healing, dignity, and life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {/* For Patients */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 sm:p-12 space-y-6">
                <div className="w-14 h-14 bg-medical-primary text-white rounded-2xl flex items-center justify-center">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">For Patients</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  If you&apos;ve been confused or unsure where to go—if you&apos;ve delayed treatment because of fear or lack of guidance—NTL CareLink is your bridge to world-class healthcare. You are search for answers, for better treatment, for a second chance.
                </p>
                <Link href="/register" className="inline-flex items-center gap-2 text-medical-accent font-bold group">
                  Start Your Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* For Partners & Investors */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 sm:p-12 space-y-6">
                <div className="w-14 h-14 bg-medical-accent text-medical-dark rounded-2xl flex items-center justify-center">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">For Partners & Investors</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  This is more than a business; it&apos;s a high-impact opportunity at the intersection of healthcare and global access. We are building a scalable, borderless network positioned to serve millions. Join us in building the future of healthcare.
                </p>
                <Link href="/contact-support" className="inline-flex items-center gap-2 text-medical-accent font-bold group">
                  Explore Partnership <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 7. CTA ─── */}
        <section className="py-14 sm:py-24 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-medical-primary to-medical-dark p-8 sm:p-12 lg:p-16 rounded-3xl lg:rounded-[4rem] relative overflow-hidden shadow-[0_30px_60px_rgba(0,163,173,0.25)]">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-15deg] transform translate-x-20" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
                <div className="space-y-4 sm:space-y-6 max-w-2xl text-center lg:text-left text-white">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Ready to Begin Your Recovery Journey?</h2>
                  <p className="text-base sm:text-xl opacity-90 leading-relaxed font-light">Join over 10,000+ patients who found their healing path with NTL CareLink.</p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                  <Link href="/register" className="w-full sm:w-auto text-center px-8 sm:px-12 py-4 sm:py-6 bg-white text-medical-primary rounded-2xl font-black text-base sm:text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                    Get Free Quote <ArrowRight size={22} />
                  </Link>
                  <Link href="/contact-support" className="w-full sm:w-auto text-center px-8 sm:px-12 py-4 sm:py-6 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-base sm:text-xl hover:bg-white/10 transition-all flex items-center justify-center">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AboutPage;
