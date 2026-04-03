'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Target, 
  Award, 
  Globe, 
  ArrowRight,
  Heart,
  Quote,
  Sparkles,
  Stethoscope,
  Activity,
  Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingMedicalElements from '../Components/FloatingMedicalElements';

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-28">
        {/* --- 1. HERO SECTION --- */}
        <section className="relative py-28 overflow-hidden bg-medical-dark">
          {/* Decorative backgrounds */}
          <div className="absolute inset-0 z-0">
             <Image 
               src="/hero-bg.png" 
               alt="Background" 
               fill 
               className="object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-medical-dark via-medical-dark/95 to-white" />
          </div>
          
          <FloatingMedicalElements density="low" />

          <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-medical-primary/20 border border-medical-primary/30 text-medical-accent font-bold text-sm tracking-[0.2em] uppercase"
            >
              <Sparkles size={18} />
              <span>Dedicated Since Day One</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-black text-white leading-tight"
            >
              Bridging Borders to <br />
              <span className="text-medical-accent">Better Health</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              NTL CareLink is a premier global medical facilitator dedicated to connecting patients with world-class healthcare across continents. We Believe every human life deserves the best medical care, regardless of geography.
            </motion.p>
          </div>
        </section>

        {/* --- 2. DETAILED NTL EXPLANATION --- */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="w-20 h-1 bg-medical-primary" />
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
                  Who We Are at <br />
                  <span className="text-medical-primary">NTL CareLink</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Established as a beacon of hope for patients seeking advanced medical treatments, **NTL CareLink** has evolved into one of the most trusted medical travel facilitators across the African continent and beyond. 
                  </p>
                  <p>
                    Our mission is built on three unbreakable pillars: **Trust, Transparency, and Total Care**. We recognize that traveling for medical treatment is a significant life event. That's why we don't just book appointments; we manage every heartbeat of your journey—from the initial medical opinion and travel logistics to post-operative recovery and safe return home.
                  </p>
                  <p>
                    With specialized operations in **South Sudan, Kenya, Uganda, and Tanzania**, we have built a seamless highway between localized patient needs and global medical wonders in countries like **India, Thailand, Turkey, and Germany**.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="space-y-2">
                    <p className="text-4xl font-black text-medical-dark">50+</p>
                    <p className="text-sm font-bold text-medical-primary uppercase tracking-widest">Partner Hospitals</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-black text-medical-dark">10K+</p>
                    <p className="text-sm font-bold text-medical-primary uppercase tracking-widest">Lives Touched</p>
                  </div>
                </div>
              </motion.div>

              <div className="lg:w-1/2 relative">
                 {/* Premium Floating Square Effect */}
                 <motion.div 
                   initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                   whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.2 }}
                   className="relative z-10 aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white"
                 >
                   <Image 
                     src="/african_medical_scene_1774726766055.png" 
                     alt="Our Vision" 
                     fill 
                     className="object-cover"
                   />
                 </motion.div>
                 {/* Decorative background shape */}
                 <div className="absolute -top-12 -right-12 w-64 h-64 bg-medical-primary/10 rounded-full blur-3xl -z-10" />
                 <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-medical-accent/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. CORE PILLARS --- */}
        <section className="py-32 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-10"
            >
              {[
                { 
                  icon: <Target className="w-10 h-10" />, 
                  title: "Our Mission", 
                  desc: "To democratize world-class healthcare by making it accessible, affordable, and stress-free for every patient across borders.",
                  color: "bg-medical-primary"
                },
                { 
                  icon: <Activity className="w-10 h-10" />, 
                  title: "Our Vision", 
                  desc: "To be recognized as the global gold standard in medical facilitation, where every journey leads to a successful recovery.",
                  color: "bg-medical-dark"
                },
                { 
                  icon: <Heart className="w-10 h-10" />, 
                  title: "Our Values", 
                  desc: "Integrity, Compassion, and Excellence. We do what's right for the patient, every single time, without exception.",
                  color: "bg-medical-accent"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                >
                  <div className={`w-20 h-20 ${item.color} text-white rounded-3xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- 4. FOUNDER SECTION: SULTAN NGONG --- */}
        <section id="founder" className="py-32 bg-medical-dark relative overflow-hidden">
           {/* Abstract medical patterns */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-medical-primary blur-[160px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-medical-accent blur-[160px] -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-2/5 group relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative aspect-[3/4] rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
                >
                  <Image 
                    src="/sultan_founder.png" 
                    alt="Sultan Ngong" 
                    fill 
                    className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-transparent opacity-60" />
                </motion.div>
                
                {/* Floating Bio Card */}
                <motion.div 
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-10 -right-10 bg-medical-accent p-8 rounded-3xl shadow-2xl max-w-[280px]"
                >
                  <Quote size={40} className="text-medical-dark mb-4 opacity-40" />
                  <p className="text-medical-dark font-black italic text-lg leading-tight">
                    "Healthcare is NOT a privilege, it is a right for every human soul."
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-3/5 space-y-10"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-accent/20 text-medical-accent font-bold text-xs tracking-widest uppercase">
                    Founder Spotlight
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    Meet <span className="text-medical-accent underline decoration-white/20 underline-offset-8">Sultan Ngong</span>
                  </h2>
                </div>

                <div className="space-y-8 text-xl text-gray-300 leading-relaxed font-light">
                  <p>
                    Sultan Ngong is a distinguished visionary leader who has dedicated his life to breaking the medical barriers hindering the African continent. With an unwavering belief in the sanctity of human life, Sultan founded NTL CareLink with a singular goal: **to provide an ethical bridge to world-class treatment.**
                  </p>
                  <p>
                    Starting with just a small group of medical consultants, Sultan’s leadership has transformed NTL into a multi-national powerhouse. He has personally overseen the cases of thousands of individuals, ensuring that from the moment they land in a foreign hospital, they are treated with the dignity and respect they deserve.
                  </p>
                  <p>
                    His philosophy is simple: **Patient Compassion First.** Under his guidance, NTL CareLink has established strict partnerships only with JCI-accredited institutions, ensuring that every patient receives the exact same standard of care he would want for his own family.
                  </p>
                </div>

                <div className="pt-8 flex flex-col md:flex-row gap-12 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-medical-accent">
                      <Stethoscope size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Healthcare Pioneer</h4>
                      <p className="text-gray-400 text-sm italic">Innovating Medical Tourism</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-medical-accent">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">20+ Years Exp.</h4>
                      <p className="text-gray-400 text-sm italic">Expert Facilitation</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 5. GLOBAL NETWORK SECTION --- */}
        <section className="py-32 relative overflow-hidden bg-gray-50">
           <div className="container mx-auto px-6 text-center space-y-16">
              <div className="max-w-3xl mx-auto space-y-6">
                 <h2 className="text-4xl md:text-6xl font-bold text-gray-900">Our <span className="text-medical-primary">Global Reach</span></h2>
                 <p className="text-xl text-gray-600">Connecting East & Central Africa to the World's Best Medical Hubs.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: "South Sudan", flag: "🇸🇸", status: "Headquarters" },
                  { name: "Kenya / Uganda", flag: "🇰🇪🇺🇬", status: "Regional Offices" },
                  { name: "India Hub", flag: "🇮🇳", status: "Primary Care Network" },
                  { name: "Thailand / Turkey", flag: "🇹🇭🇹🇷", status: "Specialized Hubs" },
                ].map((hub, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-10 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center gap-4"
                  >
                    <span className="text-5xl">{hub.flag}</span>
                    <h4 className="text-2xl font-bold text-medical-dark">{hub.name}</h4>
                    <span className="px-4 py-1.5 rounded-full bg-medical-light text-medical-primary font-bold text-xs uppercase">{hub.status}</span>
                  </motion.div>
                ))}
              </div>
           </div>
        </section>

        {/* --- 6. CTA --- */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-medical-primary to-medical-dark p-16 rounded-[4rem] relative overflow-hidden shadow-[0_30px_60px_rgba(0,163,173,0.3)]">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-15deg] transform translate-x-20" />
               <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="space-y-6 max-w-2xl text-center lg:text-left text-white">
                     <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Ready to Begin Your Recovery Journey?</h2>
                     <p className="text-xl opacity-90 leading-relaxed font-light">Join over 10,000+ patients who found their healing path with NTL CareLink.</p>
                  </div>
                  <div className="shrink-0 flex flex-col sm:flex-row items-center gap-6">
                    <Link href="/register" className="px-12 py-6 bg-white text-medical-primary rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                       Get Free Quote
                       <ArrowRight size={24} />
                    </Link>
                    <Link href="/contact-support" className="px-12 py-6 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center min-w-[200px]">
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
