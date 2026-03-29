'use client';

import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Image from 'next/image';
import { 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Target, 
  Award, 
  Globe, 
  ArrowRight,
  Stethoscope,
  HeartPlus,
  Activity,
  CalendarCheck,
  Phone
} from 'lucide-react';
import FloatingMedicalElements from '../Components/FloatingMedicalElements';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* --- 1. HERO SECTION --- */}
        <section className="relative py-20 overflow-hidden">
          <FloatingMedicalElements density="medium" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                <div className="inline-flex items-center gap-2 bg-medical-light/50 dark:bg-medical-primary/10 border border-medical-primary/20 px-4 py-2 rounded-full text-medical-primary font-bold text-sm tracking-wide">
                  <Globe size={16} />
                  <span>EMPOWERING GLOBAL HEALTHCARE</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-medical-blue dark:text-white leading-[1.1] tracking-tight">
                  Bridging the World to <br />
                  <span className="text-medical-primary italic">Better Health</span>
                </h1>
                <p className="text-lg text-ash-grey dark:text-slate-300 leading-relaxed max-w-xl">
                  NTL CareLink is more than a medical facilitator; we are your dedicated companion in the journey towards recovery. We connect patients with the world's leading medical institutions, ensuring quality care is never out of reach.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                    <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center text-medical-primary">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-medical-blue dark:text-white">25+</p>
                      <p className="text-xs text-ash-grey uppercase font-semibold">Years Exp</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                    <div className="w-12 h-12 bg-medical-light-blue/10 rounded-full flex items-center justify-center text-medical-light-blue">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-medical-blue dark:text-white">10K+</p>
                      <p className="text-xs text-ash-grey uppercase font-semibold">Patients</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right duration-1000">
                <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                  <Image 
                    src="/african_medical_scene_1774726766055.png" 
                    alt="Our Impact" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/40 to-transparent" />
                </div>
                {/* Trust Badge */}
                <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/5 max-w-[200px] animate-float">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white mb-3">
                    <ShieldCheck size={28} />
                  </div>
                  <p className="font-bold text-medical-blue dark:text-white text-sm">Certified Healthcare Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. VISION & MISSION --- */}
        <section className="py-24 bg-white dark:bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-12 rounded-[2.5rem] border border-slate-100 dark:border-white/5 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-medical-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="w-16 h-16 bg-medical-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(0,163,173,0.3)]">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold text-medical-blue dark:text-white mb-6">Our Mission</h3>
                <p className="text-ash-grey dark:text-slate-300 text-lg leading-relaxed">
                  To democratize access to world-class medical treatment by providing a seamless, compassionate, and transparent bridge between patients and global healthcare leaders. We strive to reduce medical costs while maintaining the highest standards of care.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 p-12 rounded-[2.5rem] border border-slate-100 dark:border-white/5 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-medical-light-blue/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="w-16 h-16 bg-medical-light-blue text-white rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(59,130,246,0.3)]">
                  <Activity size={32} />
                </div>
                <h3 className="text-3xl font-bold text-medical-blue dark:text-white mb-6">Our Vision</h3>
                <p className="text-ash-grey dark:text-slate-300 text-lg leading-relaxed">
                  To become the world's most trusted and accessible medical travel partner, recognized for our absolute dedication to patient outcomes and our ability to heal across borders through innovation and human empathy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. THE PROCESS (DIAGRAM) --- */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-medical-blue dark:text-white mb-6">How It Works</h2>
              <p className="text-ash-grey dark:text-slate-300 text-lg">Your journey to recovery is structured and professional. We handle everything from the first call to your safe return home.</p>
            </div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-200 dark:bg-white/10 -z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  { icon: <Phone size={24} />, title: "Contact Us", desc: "Consult for free with our medical advisors." },
                  { icon: <CalendarCheck size={24} />, title: "Coordination", desc: "Choosing the best hospital & doctor for you." },
                  { icon: <MapPin size={24} />, title: "Travel & Visa", desc: "Full assistance with documentation & arrival." },
                  { icon: <Stethoscope size={24} />, title: "Treatment", desc: "Premium care at our partner medical centers." },
                  { icon: <HeartPlus size={24} />, title: "Recovery", desc: "Post-op care and safe return journey home." },
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-medical-primary border-4 border-slate-50 dark:border-slate-900 shadow-lg group-hover:scale-110 transition-transform group-hover:bg-medical-primary group-hover:text-white duration-300">
                      {step.icon}
                    </div>
                    <div className="mt-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 w-full">
                      <h4 className="font-bold text-medical-blue dark:text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-ash-grey dark:text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. CORE VALUES --- */}
        <section className="py-24 bg-medical-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-primary opacity-5 skew-x-[-20deg] translate-x-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Values That Drive Us</h2>
                <div className="space-y-6">
                  {[
                    { title: "Patient-First Approach", desc: "Every decision we make starts and ends with the patient's well-being in mind." },
                    { title: "Transparency & Integrity", desc: "No hidden costs, no false promises. Just honest medical facilitation." },
                    { title: "Global Excellence", desc: "We only partner with JCI-accredited hospitals that maintain world-class standards." },
                    { title: "Compassion Always", desc: "Medical journeys are emotional. We provide the support you need at every step." }
                  ].map((val, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="w-6 h-6 rounded-full bg-medical-accent/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-medical-accent transition-colors">
                        <CheckCircle2 size={14} className="text-medical-accent group-hover:text-medical-dark shadow-sm" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{val.title}</h4>
                        <p className="text-slate-300 leading-relaxed">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-64 relative rounded-[2rem] overflow-hidden border-2 border-white/10 group">
                      <Image src="/african_founder_doctor_1774726750288.png" alt="Care" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="h-48 bg-medical-primary/20 rounded-[2rem] border border-white/10 p-8 flex flex-col justify-center">
                      <span className="text-4xl font-bold text-medical-accent">100%</span>
                      <span className="text-sm uppercase tracking-widest font-semibold mt-2">Diligence</span>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-48 bg-medical-accent/20 rounded-[2rem] border border-white/10 p-8 flex flex-col justify-center">
                      <span className="text-4xl font-bold text-medical-primary">50+</span>
                      <span className="text-sm uppercase tracking-widest font-semibold mt-2">Institutions</span>
                    </div>
                    <div className="h-64 relative rounded-[2rem] overflow-hidden border-2 border-white/10 group">
                      <Image src="/african_medical_scene_1774726766055.png" alt="Service" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. LEADERSHIP --- */}
        <section className="py-24 bg-white dark:bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/3">
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <Image src="/african_founder_doctor_1774726750288.png" alt="Sultan Ngong" fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-medical-blue to-transparent text-white">
                    <p className="font-bold text-xl">Sultan Ngong</p>
                    <p className="text-sm opacity-80">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 space-y-6">
                <div className="inline-block px-4 py-1.5 bg-medical-primary/10 text-medical-primary rounded-full text-sm font-bold tracking-widest uppercase">Leadership</div>
                <h2 className="text-3xl md:text-5xl font-bold text-medical-blue dark:text-white">A Vision of Hope</h2>
                <p className="text-lg text-ash-grey dark:text-slate-300 italic">
                  "To us, NTL Carelink is more than a company, it is a bridge of hope, built to connect people 
                  to the healthcare they deserve. We believe that healthcare should not be a privilege, it should be a right to humanity."
                </p>
                <p className="text-ash-grey dark:text-slate-300 leading-relaxed">
                  Under Sultan Ngong's leadership, NTL CareLink has grown from a local initiative into a global facilitator, bridging the gap between quality medical care and the patients who need it most. Our dedication is absolute, and our compassion is the foundation of everything we do.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center text-white font-serif text-2xl italic">S.N</div>
                    <div>
                      <p className="font-bold text-medical-blue dark:text-white">Sultan Ngong</p>
                      <p className="text-xs text-ash-grey uppercase font-semibold">Founder, NTL CareLink</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. TRUST BUILDING & CTA --- */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-8 md:p-16 rounded-[3rem] border border-slate-100 dark:border-white/5 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-medical-primary via-medical-light-blue to-medical-accent" />
              
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 text-left">
                  <h2 className="text-3xl md:text-5xl font-bold text-medical-blue dark:text-white mb-6">Trusted Across Africa & Beyond</h2>
                  <p className="text-ash-grey dark:text-slate-300 text-lg max-w-2xl mb-8">
                    We have successfully facilitated thousands of treatments for patients from South Sudan, Tanzania, Kenya, Uganda, and across the African continent. Our network is built on years of trust and successful medical outcomes.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {['South Sudan', 'Kenya', 'Tanzania', 'Uganda', 'Ethiopia', 'Zambia'].map((country) => (
                      <div key={country} className="flex items-center gap-2 text-medical-blue dark:text-slate-300 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-medical-primary" />
                        {country}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button className="px-10 py-5 bg-medical-blue dark:bg-medical-primary text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-medical-blue/30 transition-all hover:translate-y-[-4px] active:scale-95 flex items-center gap-3 group">
                      Start Your Consultation
                      <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <div className="flex items-center gap-4 text-ash-grey dark:text-slate-400 font-medium">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                            <Image src={`/african_founder_doctor_1774726750288.png`} alt="User" width={40} height={40} className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="text-sm">10k+ Happy Patients</span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 relative">
                  <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden grayscale-[30%] hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src="/global_healthcare_network_visualization_1774771936355.png" 
                      alt="Global Network" 
                      fill 
                      className="object-contain scale-110" 
                    />
                  </div>
                  {/* Floating Stat Card */}
                  <div className="absolute -bottom-6 -right-6 bg-medical-dark text-white p-6 rounded-2xl shadow-2xl border border-white/10 animate-float-slow">
                    <p className="text-3xl font-bold text-medical-accent">50+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold">Partner Hospitals Globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
