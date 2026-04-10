'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, MapPin, ShieldCheck, Users, Target, Award,
  Globe, ArrowRight, Heart, Quote, Sparkles, Stethoscope,
  Activity, Briefcase, Star, BadgeCheck, Phone, MessageCircle,
  ChevronRight, ClipboardList, Zap, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingMedicalElements from '../Components/FloatingMedicalElements';
import TiltedCard from '../Components/TiltedCard';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.15 } } };

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">

        {/* ─── 1. HERO ─── */}
        <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-[#003B5C]">
          {/* Dot grid background from Treatments */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage:'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize:'28px 28px' }}/>
          
          {/* Gradient blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3AD]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"/>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00E0D2]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"/>

          <FloatingMedicalElements density="low" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A3AD]/20 border border-[#00A3AD]/30 text-[#00E0D2] text-xs font-bold uppercase tracking-widest mb-6 mx-auto">
              <Sparkles size={14} className="text-[#00E0D2]" /> Dedicated Since Day One
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8">
              Bridging Borders to <br />
              <span className="text-[#00E0D2]">Better Health</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 px-4">
              NTL CareLink connects patients across Africa and beyond with world-class healthcare. Every life deserves the best medical care, regardless of geography.
            </motion.p>
            
            {/* Buttons removed as requested */}
          </div>
        </section>

        {/* ─── QUICK STATS BAR ─── */}
        <section className="bg-[#003B5C] border-y border-[#00A3AD]/20 py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[['50+', 'Partner Hospitals'], ['10K+', 'Lives Touched'], ['15+', 'Countries'], ['98%', 'Success Rate']].map(([v, l], i) => (
                <div key={l} className={`text-center ${i !== 3 ? 'lg:border-r lg:border-white/10' : ''}`}>
                  <p className="text-3xl sm:text-4xl font-black text-[#00E0D2]">{v}</p>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2. WHO WE ARE ─── */}
        <section className="py-20 sm:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="w-full lg:w-3/5 space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00A3AD]/10 text-[#003B5C] text-[10px] font-bold uppercase tracking-widest">
                    <Activity size={12} className="text-[#00A3AD]" /> Our Identity
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#003B5C] leading-tight">
                    NTL CareLink: <br />
                    <span className="text-[#00A3AD] italic">Transformative Life-Care</span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p className="font-extrabold text-[#003B5C] text-xl sm:text-2xl leading-snug">
                    This is not just healthcare. This is a movement of hope, access, and transformation.
                  </p>
                  <p>
                    Established as a beacon of hope for patients seeking advanced medical treatments, NTL CareLink has evolved into one of the most trusted medical travel facilitators across Africa and beyond. At NTL, we exist to change the story for millions who suffer not because treatment doesn't exist, but because they lack the bridge to reach it.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    {[
                      { from: 'Confusion', to: 'Clarity' },
                      { from: 'Fear', to: 'Confidence' },
                      { from: 'Distance', to: 'Access' },
                      { from: 'Hope', to: 'Reality' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 group hover:border-[#00A3AD]/30 transition-all">
                        <span className="text-slate-400 line-through text-xs font-medium">{item.from}</span>
                        <ChevronRight className="text-[#00A3AD] opacity-50" size={14} />
                        <span className="font-bold text-[#003B5C]">{item.to}</span>
                      </div>
                    ))}
                  </div>

                  <p>
                    Through our digital health platform and community-led education programs, we ensure that every journey leads to healing and dignity. We are not just solving today's problems; we are building tomorrow's healthcare system.
                  </p>
                </div>

                {/* Statistics removed as requested */}
              </motion.div>

              <div className="w-full lg:w-2/5 relative order-1 lg:order-2">
                <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1 }}
                  className="relative z-10 aspect-[4/5] max-w-sm lg:max-w-full mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
                  <Image src="/african_medical_scene_1774726766055.png" alt="Our Vision" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/40 to-transparent" />
                </motion.div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#00A3AD]/10 rounded-full blur-[80px] -z-10" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#00E0D2]/10 rounded-full blur-[80px] -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. CORE PILLARS ─── */}
        <section className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage:'radial-gradient(circle, #003B5C 1px, transparent 1px)', backgroundSize:'40px 40px' }}/>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[10px] font-black text-[#00A3AD] uppercase tracking-[0.3em] mb-4">Our Foundation</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#003B5C]">What Drives Us</h2>
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { icon: <Target className="w-10 h-10" />, title: 'Our Mission', desc: 'To democratize world-class healthcare by making it accessible, affordable, and stress-free for every patient across borders.', color: 'bg-[#003B5C]' },
                { icon: <Activity className="w-10 h-10" />, title: 'Our Vision', desc: 'To be recognized as the global gold standard in medical facilitation, where every journey leads to a successful recovery.', color: 'bg-[#00A3AD]' },
                { icon: <Heart className="w-10 h-10" />, title: 'Our Values', desc: 'Integrity, Compassion, and Excellence. We do what is right for the patient, every single time, without exception.', color: 'bg-[#00E0D2]' },
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp}
                  className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#00A3AD]/10 transition-all duration-500 group border border-slate-100 flex flex-col items-center text-center">
                  <div className={`w-20 h-20 ${item.color} text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#003B5C] mb-6">{item.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 4. FOUNDER ─── */}
        <section id="founder" className="py-24 sm:py-36 bg-[#001D2E] relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{ backgroundImage:'radial-gradient(circle, #00A3AD 1px, transparent 1px)', backgroundSize:'32px 32px' }}/>
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00A3AD]/20 blur-[160px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#00E0D2]/10 blur-[160px] -translate-x-1/2 translate-y-1/2" />
          
          {/* Faded Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
            Visionary
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">

              {/* Photo Column */}
              <div className="w-full lg:w-[45%] group relative">
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1 }}
                    className="relative z-10 aspect-[4/5] max-w-sm mx-auto lg:max-w-full rounded-[3rem] sm:rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl ring-1 ring-white/10"
                  >
                    <Image 
                      src="/teamMembers/founder-main.jpeg" 
                      alt="Sultan Ngong" 
                      fill 
                      className="object-cover object-top transition-transform duration-[4000ms] group-hover:scale-105" 
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D2E]/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                  
                  {/* Decorative Frame */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#00A3AD]/30 rounded-tl-[3rem] pointer-events-none" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#00E0D2]/30 rounded-br-[3rem] pointer-events-none" />
                </div>

                {/* Overlapping Quote card */}
                <motion.div 
                  initial={{ y: 30, opacity: 0 }} 
                  whileInView={{ y: 0, opacity: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-10 -left-4 sm:left-10 lg:-left-12 bg-white p-8 rounded-3xl shadow-2xl max-w-[280px] sm:max-w-[340px] z-20 border-b-[6px] border-[#00A3AD]"
                >
                  <Quote size={36} className="text-[#00A3AD] mb-4 opacity-30" />
                  <p className="text-[#003B5C] font-black italic text-lg sm:text-xl leading-snug">
                    "Healthcare is NOT a privilege &mdash; it is a right for every human soul."
                  </p>
                </motion.div>
              </div>

              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[55%] space-y-10 mt-16 lg:mt-0"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00E0D2] font-black text-xs tracking-[0.2em] uppercase mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E0D2] animate-pulse" />
                    The Founder
                  </div>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[1.1] tracking-tight">
                    Sultan <span className="text-[#00A3AD] italic">Ngong</span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p className="text-white font-black text-2xl sm:text-3xl italic leading-tight border-l-4 border-[#00A3AD] pl-8">
                    "Distance should never decide who lives and who dies."
                  </p>
                  <p className="opacity-90">
                    Sultan Ngong is a visionary healthcare leader driven by a singular mission: to ensure that no life is limited by geography or lack of access to quality medical treatment. As the CEO of NTL CareLink, he stands at the forefront of a global movement to democratize healthcare across continents.
                  </p>
                  <p className="opacity-90">
                    Born from a deep awareness of the disparities in global healthcare, Sultan has personally overseen the medical journeys of thousands, transforming uncertainty into hope. His leadership integrates medical tourism, digital health, and health education into a borderless ecosystem that empowers communities worldwide.
                  </p>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-8 border-t border-white/10">
                  {[
                    { icon: <Stethoscope size={24} />, title: 'Healthcare Pioneer', sub: 'Innovating Global Access' },
                    { icon: <Briefcase size={24} />, title: '20+ Years Exp.', sub: 'International Logistics' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#00A3AD] shrink-0 group-hover:bg-[#00A3AD] group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-black text-lg">{item.title}</h4>
                        <p className="text-slate-400 text-sm font-medium italic">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 5. NTL TEAM ─── */}
        <section className="py-24 sm:py-32 bg-white selection:bg-[#00A3AD]/30 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
              <div className="space-y-6 max-w-2xl text-left">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003B5C]/5 text-[#003B5C] font-black text-xs tracking-widest uppercase">
                  <Users size={16} className="text-[#00A3AD]" /> The Experts Behind the Care
                </motion.div>
                <h2 className="text-4xl sm:text-6xl font-black text-[#003B5C] leading-none">
                  The <span className="text-[#00A3AD]">Powerhouse</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Our multidisciplinary leadership combines clinical excellence with logistical precision to ensure your health journey is flawless.
                </p>
              </div>
              {/* Specialists link removed as requested */}
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { name: "Executive Leader", role: "Chief Operation Officer", image: "/teamMembers/coo.jpeg", bio: "Driving excellence in operational efficiency and healthcare delivery across borders." },
                { name: "Technology Expert", role: "Chief Technology Officer", image: "/teamMembers/cto.jpeg", bio: "Innovating the digital landscape of global healthcare accessibility." },
                { name: "Strategic Lead", role: "Associate Director", image: "/teamMembers/associate-director-ops.jpeg", bio: "Ensuring seamless patient journeys and world-class care coordination." },
                { name: "Marketing Lead", role: "Director of Access", image: "/teamMembers/marketing-director.jpeg", bio: "Expanding the reach of transformative care to underserved communities." },
              ].map((member, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center">
                  <div className="w-full aspect-[4/5] mb-6">
                    <TiltedCard
                      imageSrc={member.image}
                      altText={member.name}
                      captionText={member.role}
                      containerHeight="100%"
                      imageHeight="100%"
                      imageWidth="100%"
                      objectPosition={member.role === "Director of Access" ? "top center" : "center"}
                      overlayContent={
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-[2rem]" />
                      }
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-[10px] font-black text-[#00A3AD] uppercase tracking-widest">{member.role}</p>
                    <h4 className="text-xl font-black text-[#003B5C]">{member.name}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed italic max-w-[200px] mx-auto opacity-70">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 6. GLOBAL HUB NETWORK ─── */}
        <section className="py-24 sm:py-32 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 text-center space-y-16 relative z-10">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-[10px] font-black text-[#00A3AD] uppercase tracking-[0.4em] mb-2">Network Expansion</p>
              <h2 className="text-4xl sm:text-6xl font-black text-[#003B5C]">
                Our <span className="text-[#00A3AD]">Global Reach</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-light">Connecting East & Central Africa to the World's Best Medical Hubs.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {[
                { name: 'South Sudan', flag: '🇸🇸', status: 'Headquarters' },
                { name: 'Kenya / Uganda', flag: '🇰🇪🇺🇬', status: 'Regional Offices' },
                { name: 'India Hub', flag: '🇮🇳', status: 'Primary Care Network' },
                { name: 'Thailand / Turkey', flag: '🇹🇭🇹🇷', status: 'Specialized Hubs' },
              ].map((hub, i) => (
                <motion.div key={i} whileHover={{ y: -10 }}
                  className="p-8 lg:p-12 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col items-center gap-6 group hover:border-[#00A3AD]/30 transition-all duration-500">
                  <div className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-500">{hub.flag}</div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#003B5C]">{hub.name}</h4>
                  <span className="px-5 py-1.5 rounded-full bg-[#EBF2F7] text-[#003B5C] font-bold text-[10px] uppercase tracking-widest">{hub.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. TRUST SIGNALS ─── */}
        <section className="py-24 sm:py-32 bg-white selection:bg-[#00A3AD]/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <p className="text-[10px] font-black text-[#00A3AD] uppercase tracking-[0.3em] mb-4">Patient Security</p>
              <h2 className="text-3xl sm:text-5xl font-black text-[#003B5C]">Why Patients <span className="text-[#00A3AD]">Trust Us</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <ShieldCheck className="w-8 h-8" />, title: 'Globally Accredited Partners', desc: 'Every hospital in our network holds JCI or equivalent international accreditation.' },
                { icon: <Globe className="w-8 h-8" />, title: 'Full Journey Management', desc: 'From first consultation to travel, treatment, and recovery—we walk with you every step.' },
                { icon: <Activity className="w-8 h-8" />, title: 'Digital Health Innovation', desc: 'Access specialists from anywhere through our proactive digital health ecosystem.' },
                { icon: <Award className="w-8 h-8" />, title: 'Health Education', desc: 'Equipping communities with the knowledge they need to protect their families and thrive.' },
                { icon: <BadgeCheck className="w-8 h-8" />, title: 'Mission-Driven Team', desc: 'A scalable, borderless network serving millions across Africa, Asia, and the Middle East.' },
                { icon: <Heart className="w-8 h-8" />, title: 'Compassionate Care', desc: 'Where lives are saved and hope is restored. We treat every patient with the dignity they deserve.' },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -5 }}
                  className="flex gap-6 p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 group">
                  <div className="w-16 h-16 bg-[#003B5C]/5 text-[#00A3AD] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#00A3AD] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-[#003B5C] text-lg leading-snug">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6.5 JOIN THE MOVEMENT ─── */}
        <section className="py-24 sm:py-36 bg-[#001D2E] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage:'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize:'40px 40px' }}/>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Join the <span className="text-[#00A3AD]">Movement</span></h2>
              <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-light">Connecting the world to healing, dignity, and life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* For Patients */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 lg:p-14 space-y-8 group hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-[#003B5C] text-[#00E0D2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white">For Patients</h3>
                  <p className="text-slate-300 text-lg leading-relaxed font-light">
                    If you&apos;ve been confused or unsure where to go—if you&apos;ve delayed treatment because of fear—NTL CareLink is your bridge to world-class healthcare. You are search for answers, for better treatment, for a second chance.
                  </p>
                </div>
                <Link href="/register" className="inline-flex items-center gap-3 text-[#00E0D2] font-black text-lg group/link">
                  Start Your Journey <ArrowRight size={22} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>

              {/* For Partners & Investors */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 lg:p-14 space-y-8 group hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-[#00A3AD] text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white">For Partners</h3>
                  <p className="text-slate-300 text-lg leading-relaxed font-light">
                    This is more than a business; it&apos;s a high-impact opportunity at the intersection of healthcare and global access. We are building a scalable, borderless network positioned to serve millions. Join us in building the future of healthcare.
                  </p>
                </div>
                <Link href="/contact-support" className="inline-flex items-center gap-3 text-[#00E0D2] font-black text-lg group/link">
                  Explore Partnership <ArrowRight size={22} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 7. CTA ─── */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-white">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-[#003B5C] to-[#001D2E] p-10 sm:p-16 lg:p-24 rounded-[3rem] lg:rounded-[5rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00A3AD]/5 skew-x-[-15deg] transform translate-x-20" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="space-y-8 max-w-2xl text-center lg:text-left text-white">
                  <h2 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">Ready to Begin Your Recovery Journey?</h2>
                  <p className="text-xl sm:text-2xl opacity-90 leading-relaxed font-light text-slate-300">Join over 10,000+ patients who found their healing path with NTL CareLink.</p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                  <Link href="/register" className="w-full sm:w-auto text-center px-10 py-6 bg-[#00A3AD] hover:bg-white hover:text-[#003B5C] text-white rounded-2xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                    Get Free Quote <ArrowRight size={24} />
                  </Link>
                  <Link href="/contact-support" className="w-full sm:w-auto text-center px-10 py-6 bg-transparent border-2 border-white/20 text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center">
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
