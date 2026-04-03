'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck, Globe, ArrowRight, Activity, LifeBuoy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FloatingMedicalElements from '../Components/FloatingMedicalElements';

const testimonials = [
  {
    name: "Samuel Mensah",
    country: "Ghana",
    procedure: "Cardiac Bypass Surgery",
    hospital: "Apollo Hospital, India",
    image: "/african_patient_profile_1774726934268.png",
    rating: 5,
    text: "The medical coordination from NTL was flawless. From being picked up at the airport to the world-class surgery in India, I felt like I was in the safest hands possible. My recovery has been remarkably fast.",
    date: "March 2024"
  },
  {
    name: "Dr. Elena Petrova",
    country: "Kenya",
    procedure: "Lasik Eye Surgery",
    hospital: "Bumrungrad Hospital, Thailand",
    image: "/healthcare_scene.png",
    rating: 5,
    text: "As a doctor myself, I am very selective about healthcare. NTL's network of hospitals is truly elite. The technology and hospitality in Thailand were beyond my expectations. Five stars for their professionalism.",
    date: "February 2024"
  },
  {
    name: "Ahmed Ibrahim",
    country: "South Sudan",
    procedure: "Hip Replacement",
    hospital: "Medicana, Turkey",
    image: "/african_wellness_recovery_1774726781943.png",
    rating: 5,
    text: "Walking again without pain seemed impossible just a month ago. The team in Turkey treats you with such dignity. NTL handled all my visa paperwork and translation, making the process stress-free.",
    date: "January 2024"
  },
  {
    name: "Blessing Okoro",
    country: "Nigeria",
    procedure: "IVF Treatment",
    hospital: "Artemis Hospital, India",
    image: "/african_medical_scene_1774726766055.png",
    rating: 5,
    text: "I am now 4 months pregnant after trying for years. NTL guided me through every step of our IVF journey, matching us with the right doctor who specialized in our case. We are forever grateful.",
    date: "December 2023"
  },
  {
    name: "John Kamau",
    country: "Kenya",
    procedure: "Full Dental Restoration",
    hospital: "Dental Hub, Turkey",
    image: "/african_founder_doctor_1774726750288.png",
    rating: 5,
    text: "The savings were incredible. I got a Hollywood smile for a fraction of what it costs here, and the quality was even better. Turkish hospitality combined with NTL's planning is the perfect combination.",
    date: "November 2023"
  },
  {
    name: "Sarah Wambui",
    country: "Tanzania",
    procedure: "Neurosurgery (Spine)",
    hospital: "Max Hospital, India",
    image: "/hospital_images/max hospital image 1.jpeg",
    rating: 5,
    text: "The surgeons in India are brilliant. I was terrified of spine surgery, but NTL arranged a video call with the doctor before I even booked my flight. That peace of mind made all the difference.",
    date: "October 2023"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050914] transition-colors duration-500 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 bg-medical-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
           <FloatingMedicalElements density="medium" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-medical-accent font-bold text-[10px] tracking-widest uppercase backdrop-blur-md mb-8"
          >
            <ShieldCheck size={16} />
            <span>Voices of Recovery</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-8"
          >
            Stories that <span className="text-medical-primary italic">Heal.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the life-changing experiences of thousands of patients who crossed borders to find world-class medical excellence with NTL CareLink.
          </motion.p>
        </div>
      </section>

      {/* --- TESTIMONIALS GRID --- */}
      <section className="py-24 bg-slate-50/50 dark:bg-[#080d1a]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <div className="h-full bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-slate-100 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500 relative">
                  
                  {/* Quote Accent */}
                  <div className="absolute top-8 right-8 opacity-5 text-medical-primary">
                    <Quote size={80} />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-10 flex-1 relative z-10 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-medical-primary relative shadow-lg">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-medical-dark dark:text-white leading-none mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm font-bold text-medical-primary flex items-center gap-1">
                        <Globe size={12} />
                        {testimonial.country}
                      </p>
                    </div>
                  </div>

                  {/* Details Overlay */}
                  <div className="mt-6 pt-6 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Treatment</p>
                       <p className="text-sm font-bold text-medical-dark dark:text-slate-300">{testimonial.procedure}</p>
                    </div>
                    <div className="text-right space-y-1">
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Destination</p>
                       <p className="text-[10px] font-black text-medical-primary">{testimonial.hospital}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS ACCENT --- */}
      <section className="py-24 bg-white dark:bg-[#050914] border-t border-slate-50 dark:border-white/5">
        <div className="container mx-auto px-6">
           <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-900 dark:bg-slate-800 p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-medical-primary opacity-5 skew-x-[-15deg] translate-x-20" />
              
              <div className="relative z-10 space-y-10">
                 <h2 className="text-3xl md:text-5xl font-bold">10,000+ Journeys <br /><span className="text-medical-accent">100,000+ Happy Moments.</span></h2>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                      { val: "99%", label: "Patient Satisfaction" },
                      { val: "24/7", label: "Care Assistance" },
                      { val: "15+", label: "Target Countries" },
                      { val: "50+", label: "Specialized Hubs" }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-2">
                        <p className="text-3xl md:text-4xl font-black text-white">{stat.val}</p>
                        <p className="text-[10px] font-bold text-medical-accent uppercase tracking-widest">{stat.label}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-slate-50 dark:bg-[#080d1a]">
        <div className="container mx-auto px-6 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
             <h2 className="text-4xl md:text-6xl font-bold text-medical-dark dark:text-white leading-tight">Ready to be our next Success Story?</h2>
             <p className="text-lg text-gray-500 dark:text-slate-400 font-medium leading-relaxed">Join the NTL family today and find the path to your healing.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link href="/register" className="px-12 py-5 bg-medical-primary text-white rounded-[2rem] font-black text-xl shadow-xl hover:bg-medical-dark transition-all flex items-center gap-3">
               Start Your Journey
               <ArrowRight size={24} />
             </Link>
             <Link href="/contact-support" className="px-12 py-5 bg-white dark:bg-white/5 dark:text-white border-2 border-medical-dark dark:border-white/10 rounded-[2rem] font-bold text-xl hover:bg-medical-dark hover:text-white transition-all">
               Speak to Experts
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
