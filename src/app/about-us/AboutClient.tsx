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
import TiltedCard from '../Components/TiltedCard';
import HeroSection from '../Components/HeroSection';
import * as Icons from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const staggerContainer = { visible: { transition: { staggerChildren: 0.15 } } };

const getIcon = (iconName: string, defaultIconName: string = 'Activity') => {
  const IconComponent = (Icons as any)[iconName] || (Icons as any)[defaultIconName];
  if (!IconComponent) return null;
  return <IconComponent className="w-full h-full" />;
};

const AboutClient = ({ data }: { data: any }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <main className="flex-grow">

        {/* ─── 1. HERO ─── */}
        <HeroSection
          pillText={data.hero.pillText}
          pillIcon={<Sparkles size={14} />}
          heading={
            <>
              {data.hero.headingLine1} <br />
              <span className="text-[#00E0D2]">{data.hero.headingLine2}</span>
            </>
          }
          subtitle={data.hero.subtitle}
          backgroundImage={data.hero.backgroundImage}
          cards={data.hero.cards.map((card: any) => ({
            icon: <div className="w-[26px] h-[26px]">{getIcon(card.icon, 'Globe')}</div>,
            title: card.title,
            description: card.description,
          }))}
        />

        {/* ─── 2. WHO WE ARE ─── */}
        <section className="py-20 sm:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="w-full lg:w-3/5 space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00A3AD]/10 text-[#003B5C] text-[10px] font-bold uppercase tracking-widest">
                    <Activity size={12} className="text-[#00A3AD]" /> {data.whoWeAre.pillText}
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#003B5C] leading-tight">
                    {data.whoWeAre.headingLine1} <br />
                    <span className="text-[#00A3AD] italic">{data.whoWeAre.headingLine2}</span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p className="font-extrabold text-[#003B5C] text-xl sm:text-2xl leading-snug">
                    {data.whoWeAre.subtitle}
                  </p>
                  <p>
                    {data.whoWeAre.paragraph1}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    {data.whoWeAre.transformations.map((item: any, i: number) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 group hover:border-[#00A3AD]/30 transition-all">
                        <span className="text-slate-400 line-through text-xs font-medium">{item.from}</span>
                        <ChevronRight className="text-[#00A3AD] opacity-50" size={14} />
                        <span className="font-bold text-[#003B5C]">{item.to}</span>
                      </div>
                    ))}
                  </div>

                  <p>
                    {data.whoWeAre.paragraph2}
                  </p>
                </div>
              </motion.div>

              <div className="w-full lg:w-2/5 relative order-1 lg:order-2">
                <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1 }}
                  className="relative z-10 aspect-[4/5] max-w-sm lg:max-w-full mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
                  <Image src={data.whoWeAre.image} alt="Our Vision" fill className="object-cover" />
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
              <p className="text-[10px] font-black text-[#00A3AD] uppercase tracking-[0.3em] mb-4">{data.pillars.badge}</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#003B5C]">{data.pillars.title}</h2>
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {data.pillars.items.map((item: any, idx: number) => (
                <motion.div key={idx} variants={fadeInUp}
                  className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#00A3AD]/10 transition-all duration-500 group border border-slate-100 flex flex-col items-center text-center">
                  <div className={`w-20 h-20 ${item.color} text-white rounded-[2rem] flex items-center justify-center p-5 mb-8 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {getIcon(item.icon)}
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
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{ backgroundImage:'radial-gradient(circle, #00A3AD 1px, transparent 1px)', backgroundSize:'32px 32px' }}/>
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00A3AD]/20 blur-[160px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#00E0D2]/10 blur-[160px] -translate-x-1/2 translate-y-1/2" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
            Visionary
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
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
                      src={data.founder.image} 
                      alt={data.founder.nameLine1} 
                      fill 
                      className="object-cover object-top transition-transform duration-[4000ms] group-hover:scale-105" 
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D2E]/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                  
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#00A3AD]/30 rounded-tl-[3rem] pointer-events-none" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#00E0D2]/30 rounded-br-[3rem] pointer-events-none" />
                </div>

                <motion.div 
                  initial={{ y: 30, opacity: 0 }} 
                  whileInView={{ y: 0, opacity: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.6 }}
                  className="relative lg:absolute lg:-bottom-10 lg:-left-12 bg-white p-8 rounded-3xl shadow-2xl w-full lg:max-w-[280px] z-20 border-b-[6px] border-[#00A3AD] mb-8 lg:mb-0"
                >
                  <Quote size={36} className="text-[#00A3AD] mb-4 opacity-30" />
                  <p className="text-[#003B5C] font-black italic text-lg sm:text-xl leading-snug">
                    {data.founder.quote1}
                  </p>
                </motion.div>
              </div>

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
                    {data.founder.nameLine1} <span className="text-[#00A3AD] italic">{data.founder.nameLine2}</span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p className="text-white font-black text-2xl sm:text-3xl italic leading-tight border-l-4 border-[#00A3AD] pl-8">
                    {data.founder.quote2}
                  </p>
                  <p className="opacity-90">
                    {data.founder.paragraph1}
                  </p>
                  <p className="opacity-90">
                    {data.founder.paragraph2}
                  </p>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-8 border-t border-white/10">
                  {data.founder.badges.map((item: any, i: number) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center p-3 text-[#00A3AD] shrink-0 group-hover:bg-[#00A3AD] group-hover:text-white transition-all duration-300">
                        {getIcon(item.icon)}
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
                  <Users size={16} className="text-[#00A3AD]" /> {data.team.badge}
                </motion.div>
                <h2 className="text-4xl sm:text-6xl font-black text-[#003B5C] leading-none">
                  {data.team.titleLine1} <span className="text-[#00A3AD]">{data.team.titleLine2}</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  {data.team.subtitle}
                </p>
              </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {data.team.members.map((member: any, i: number) => (
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
              <p className="text-[10px] font-black text-[#00A3AD] uppercase tracking-[0.4em] mb-2">{data.globalHubs.badge}</p>
              <h2 className="text-4xl sm:text-6xl font-black text-[#003B5C]">
                {data.globalHubs.titleLine1} <span className="text-[#00A3AD]">{data.globalHubs.titleLine2}</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-light">{data.globalHubs.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {data.globalHubs.hubs.map((hub: any, i: number) => (
                <motion.div key={i} whileHover={{ y: -10 }}
                  className="p-8 lg:p-12 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col items-center gap-6 group hover:border-[#00A3AD]/30 transition-all duration-500">
                  <div className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-500">{hub.flag}</div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#003B5C]">{hub.name}</h4>
                  <span className="px-5 py-1.5 rounded-full bg-[#EBF2F7] text-[#003B5C] font-bold text-[10px] uppercase tracking-widest text-center">{hub.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. TRUST SIGNALS ─── */}
        <section className="py-24 sm:py-32 bg-white selection:bg-[#00A3AD]/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <p className="text-[10px] font-black text-[#00A3AD] uppercase tracking-[0.3em] mb-4">{data.trustSignals.badge}</p>
              <h2 className="text-3xl sm:text-5xl font-black text-[#003B5C]">{data.trustSignals.titleLine1} <span className="text-[#00A3AD]">{data.trustSignals.titleLine2}</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.trustSignals.items.map((item: any, i: number) => (
                <motion.div key={i} whileHover={{ y: -5 }}
                  className="flex gap-6 p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 group">
                  <div className="w-16 h-16 bg-[#003B5C]/5 text-[#00A3AD] rounded-2xl flex items-center justify-center p-4 shrink-0 group-hover:bg-[#00A3AD] group-hover:text-white transition-colors">
                    {getIcon(item.icon)}
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

        {/* ─── 8. JOIN THE MOVEMENT ─── */}
        <section className="py-24 sm:py-36 bg-[#001D2E] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage:'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize:'40px 40px' }}/>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">{data.joinMovement.titleLine1} <span className="text-[#00A3AD]">{data.joinMovement.titleLine2}</span></h2>
              <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-light">{data.joinMovement.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 lg:p-14 space-y-8 group hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-[#003B5C] text-[#00E0D2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white">{data.joinMovement.forPatients.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed font-light">
                    {data.joinMovement.forPatients.desc}
                  </p>
                </div>
                <Link href="/register" className="inline-flex items-center gap-3 text-[#00E0D2] font-black text-lg group/link">
                  Start Your Journey <ArrowRight size={22} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 lg:p-14 space-y-8 group hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-[#00A3AD] text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white">{data.joinMovement.forPartners.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed font-light">
                    {data.joinMovement.forPartners.desc}
                  </p>
                </div>
                <Link href="/contact-support" className="inline-flex items-center gap-3 text-[#00E0D2] font-black text-lg group/link">
                  Explore Partnership <ArrowRight size={22} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 9. CTA ─── */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-white">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-[#003B5C] to-[#001D2E] p-10 sm:p-16 lg:p-24 rounded-[3rem] lg:rounded-[5rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00A3AD]/5 skew-x-[-15deg] transform translate-x-20" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="space-y-8 max-w-2xl text-center lg:text-left text-white">
                  <h2 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">{data.cta.title}</h2>
                  <p className="text-xl sm:text-2xl opacity-90 leading-relaxed font-light text-slate-300">{data.cta.subtitle}</p>
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

export default AboutClient;
