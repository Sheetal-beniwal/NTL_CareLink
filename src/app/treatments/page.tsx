'use client';

import React from 'react';
import { 
  HeartPulse, 
  Brain, 
  Dna, 
  Bone, 
  Baby, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Stethoscope,
  Activity,
  Microscope,
  LifeBuoy,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import FloatingMedicalElements from '../Components/FloatingMedicalElements';

const treatments = [
  {
    icon: HeartPulse,
    title: "Cardiology & Cardiac Surgery",
    desc: "Advanced heart care including bypass surgery, valve replacement, and pediatric cardiology using minimally invasive techniques.",
    highlights: ["Bypass Surgery (CABG)", "Heart Valve Replacement", "Pediatric Cardiac Care", "TAVI/TAVR"],
    image: "/african_medical_scene_1774726766055.png",
    color: "from-rose-500 to-red-600",
    accent: "text-red-500"
  },
  {
    icon: Brain,
    title: "Neurology & Neurosurgery",
    desc: "Comprehensive treatment for complex brain and spine disorders, managed by world-renowned neurosurgeons and neurologists.",
    highlights: ["Brain Tumor Surgery", "Spinal Fusion", "Epilepsy Management", "Stroke Rehabilitation"],
    image: "/hospital_images/medanta hospital.jpeg",
    color: "from-indigo-600 to-purple-700",
    accent: "text-purple-600"
  },
  {
    icon: Dna,
    title: "Oncology (Cancer Treatment)",
    desc: "Personalized cancer care utilizing precision medicine, advanced radiation therapy, and robotic-assisted surgeries.",
    highlights: ["CyberKnife Radiation", "Bone Marrow Transplant", "Immunotherapy", "Surgical Oncology"],
    image: "/hospital_images/Apollo hospital.jpeg",
    color: "from-medical-primary to-[#00929b]",
    accent: "text-medical-primary"
  },
  {
    icon: LifeBuoy,
    title: "Organ Transplants",
    desc: "World-class transplant programs for kidney, liver, and bone marrow with exceptionally high success rates.",
    highlights: ["Kidney Transplant", "Liver Transplant", "Bone Marrow Transplant", "Post-Transplant Care"],
    image: "/hospital_images/Bumrungrad Hospital.jpeg",
    color: "from-medical-dark to-[#003B5C]",
    accent: "text-medical-dark"
  },
  {
    icon: Bone,
    title: "Orthopedics & Joint Replacement",
    desc: "Solutions for bone and joint health, specializing in total knee and hip replacements using robotic assistance.",
    highlights: ["Knee Replacement", "Hip Replacement", "Spine Surgery", "Sports Medicine"],
    image: "/hospital_images/max hospital image 1.jpeg",
    color: "from-medical-accent to-[#00c5b8]",
    accent: "text-medical-accent"
  },
  {
    icon: Baby,
    title: "Infertility & IVF",
    desc: "Advanced reproductive technologies and fertility treatments helping families achieve their dreams of parenthood.",
    highlights: ["IVF / ICSI", "Egg / Sperm Donation", "Laparoscopy", "Surrogacy Assistance"],
    image: "/hospital_images/Artemis hospital.jpeg",
    color: "from-pink-500 to-rose-400",
    accent: "text-pink-500"
  }
];

const TreatmentsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050914] transition-colors duration-500">
      
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section className="relative pt-32 pb-24 bg-medical-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
           <FloatingMedicalElements density="high" />
        </div>
        
        {/* Decorative Glows */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-medical-primary/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-medical-accent/10 blur-[100px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-medical-accent font-bold text-[10px] tracking-widest uppercase backdrop-blur-md"
          >
            <Microscope size={16} />
            <span>Advanced Clinical Protocols</span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Medical <span className="text-medical-primary">Excellence</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            NTL CareLink bridges the gap between complex diagnoses and world-class recoveries, connecting you to the global gold standard of medical care.
          </motion.p>
        </div>
      </section>

      {/* ── TREATMENTS GRID ────────────────────────────────── */}
      <section className="py-24 relative bg-slate-50/50 dark:bg-[#080d1a] transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {treatments.map((treatment, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative h-full"
              >
                <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/10 flex flex-col h-full hover:shadow-2xl transition-all duration-500">
                  {/* Visual Header */}
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className={`absolute top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${treatment.color} text-white shadow-xl flex items-center justify-center`}>
                      <treatment.icon size={28} />
                    </div>

                    <div className="absolute bottom-6 left-8">
                       <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                         {treatment.title}
                       </h3>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 flex flex-col flex-1 space-y-6">
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base font-medium">
                      {treatment.desc}
                    </p>
                    
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold text-medical-primary uppercase tracking-widest">Key Procedures</p>
                      <div className="flex flex-wrap gap-2">
                         {treatment.highlights.map((h, i) => (
                           <span key={i} className="px-3 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl text-[10px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors">
                             <Plus size={10} className={treatment.accent} />
                             {h}
                           </span>
                         ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/10">
                       <Link href="/register" className={`flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest ${treatment.accent} hover:gap-4 transition-all`}>
                         Get Specialist Quote
                         <ArrowRight size={14} />
                       </Link>
                       <span className="text-[9px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest">Global Standards</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATION BANNER ──────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#050914] flex items-center justify-center transition-colors duration-500 border-t border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-6">
           <div className="relative p-12 md:p-16 rounded-[3rem] bg-medical-dark text-white overflow-hidden shadow-xl border border-white/5">
              <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-medical-primary/10 rounded-full blur-[100px]" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                 <div className="space-y-6 max-w-xl text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-medical-accent font-bold text-[10px] uppercase tracking-widest">
                       <ShieldCheck size={16} />
                       <span>Patient Safety Gold Standard</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">Gold Standard Outcomes.</h2>
                    <p className="text-gray-400 text-lg font-medium leading-relaxed italic">
                       "Success in medical tourism is built on trust and clinical rigor. Every hospital undergoes a 200-point safety audit before our recommendation."
                    </p>
                 </div>

                 <div className="grid grid-cols-2 gap-6 shrink-0">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-md">
                       <p className="text-4xl font-bold text-white">98<span className="text-medical-primary">%</span></p>
                       <p className="text-[9px] text-medical-accent font-bold uppercase tracking-widest">Success Rate</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-md">
                       <p className="text-4xl font-bold text-white">15<span className="text-medical-primary">+</span></p>
                       <p className="text-[9px] text-medical-accent font-bold uppercase tracking-widest">Global Hubs</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 dark:bg-[#080d1a] relative overflow-hidden transition-colors duration-500">
         <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-medical-dark dark:text-white leading-tight">Your Journey Starts Here.</h2>
              <p className="text-lg text-gray-500 dark:text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">Upload your medical reports for a free confidential review by our specialists.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link href="/register" className="px-10 py-4 bg-medical-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-medical-dark transition-all flex items-center gap-3">
                 <Activity size={20} />
                 Free Case Review
               </Link>
               <Link href="/contact-support" className="px-10 py-4 bg-white dark:bg-white/5 dark:text-white border-2 border-medical-dark dark:border-white/10 rounded-xl font-bold text-lg hover:bg-medical-dark hover:text-white transition-all flex items-center gap-3 shadow-md">
                 <LifeBuoy size={20} />
                 Speak to Consultant
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;
