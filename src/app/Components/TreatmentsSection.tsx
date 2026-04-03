'use client';

import React from 'react';
import { HeartPulse, Brain, Dna, Bone, Baby, LifeBuoy, ArrowRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const treatments = [
  { 
    icon: HeartPulse, 
    title: "Cardiology", 
    color: "from-rose-500 to-red-600",
    shadow: "shadow-red-500/20",
    desc: "Heart Surgery & Care"
  },
  { 
    icon: Brain, 
    title: "Neurology", 
    color: "from-indigo-600 to-purple-700",
    shadow: "shadow-purple-500/20",
    desc: "Brain & Spine Treatment"
  },
  { 
    icon: Dna, 
    title: "Oncology", 
    color: "from-medical-primary to-[#00929b]",
    shadow: "shadow-medical-primary/20",
    desc: "Advanced Cancer Therapy"
  },
  { 
    icon: LifeBuoy, 
    title: "Transplants", 
    color: "from-medical-dark to-[#003B5C]",
    shadow: "shadow-medical-dark/20",
    desc: "Organ & BMT Programs"
  },
  { 
    icon: Bone, 
    title: "Orthopedics", 
    color: "from-medical-accent to-[#00c5b8]",
    shadow: "shadow-medical-accent/20",
    desc: "Robotic Joint Replacement"
  },
  { 
    icon: Baby, 
    title: "Fertility", 
    color: "from-pink-500 to-rose-400",
    shadow: "shadow-pink-500/20",
    desc: "IVF & Genetic Screening"
  },
];

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="py-24 bg-slate-50 dark:bg-[#050914] relative overflow-hidden transition-colors duration-500">
      {/* Decorative Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-medical-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-medical-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="space-y-4 max-w-2xl">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-primary/10 text-medical-primary font-bold text-[10px] uppercase tracking-widest shadow-sm"
            >
              <Activity size={12} />
              <span>Clinical Excellence Hub</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-medical-dark dark:text-white leading-tight">
              Specialized <span className="text-medical-primary">Clinical care</span>
            </h2>
            <p className="text-gray-500 dark:text-slate-400 text-base md:text-lg max-w-xl font-medium leading-relaxed">
              We coordinate with the world's most advanced medical institutions to deliver outcomes that redefine global standards.
            </p>
          </div>
          
          <Link 
            href="/treatments" 
            className="group px-8 py-4 bg-medical-dark dark:bg-medical-primary text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-medical-primary transition-all duration-300 shadow-lg flex items-center gap-2"
          >
             Explore Portfolios
             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {treatments.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group"
            >
               <Link href="/treatments" className="block">
                  <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden h-full flex flex-col items-center text-center gap-4">
                     {/* Icon */}
                     <div className={`w-16 h-16 bg-gradient-to-br ${t.color} text-white rounded-2xl flex items-center justify-center ${t.shadow} transition-transform group-hover:scale-110`}>
                        <t.icon size={32} strokeWidth={2.5} />
                     </div>
                     
                     {/* Title Only */}
                     <h4 className="text-lg font-bold text-medical-dark dark:text-white group-hover:text-medical-primary transition-colors">{t.title}</h4>
                  </div>
               </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
