"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Calculator, Sparkles, Quote } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import TiltedCard from "./TiltedCard";
import FloatingMedicalElements from "./FloatingMedicalElements";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] py-20 w-full overflow-hidden bg-medical-dark flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 text-medical-dark">
        <Image
          src="/hero-bg.png"
          alt="Modern Hospital Interior"
          fill
          className="object-cover opacity-70"
          />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-dark/95 via-medical-dark/70 to-transparent z-10" />
        
        {/* New Floating Elements for Hero */}
        <FloatingMedicalElements density="low" />
      </div>

      <div className="container mx-auto px-6 relative z-30 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-white space-y-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-primary/20 border border-medical-primary/30 text-medical-accent font-medium text-sm backdrop-blur-md"
          >
            <Sparkles size={16} />
            <span>Trusted by 10,000+ Global Patients</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Affordable <span className="text-medical-accent">World-Class</span> Treatment Abroad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed"
          >
            Experience premium healthcare at a fraction of the cost. From Turkey to Thailand, we connect you with the world's best hospitals.
          </motion.p>

          <div className="space-y-6 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/register" className="px-8 py-4 bg-medical-primary hover:bg-medical-primary/90 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-medical-primary/20 group">
                <Calendar size={20} />
                Book Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all backdrop-blur-sm">
                <Calculator size={20} />
                Get Free
              </button>
            </motion.div>

            {/* Themed Quote Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 max-w-md italic text-gray-300 text-sm"
            >
              <Quote size={18} className="text-medical-accent flex-shrink-0" />
              <p>
                "At NTL CareLink, your health is our global priority. We believe world-class care shouldn't have boundaries."
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Card with Tilted Effect */}
        <div className="hidden lg:block flex-shrink-0 w-80">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <TiltedCard
              imageSrc="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              altText="Save up to 70%"
              captionText="Hover to Tilt"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.02}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 flex flex-col p-6 pointer-events-none rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] z-10">
                   
                   {/* Liquid Glass Background & Flowing Orbs */}
                   <div className="absolute inset-0 rounded-[2rem] bg-white/5 dark:bg-black/40 backdrop-blur-2xl border border-white/30 dark:border-white/10 overflow-hidden">
                     {/* Liquid Glowing Orbs */}
                     <div className="absolute -top-10 -left-10 w-48 h-48 bg-medical-accent/40 rounded-full mix-blend-screen filter blur-[50px] animate-[pulse_6s_ease-in-out_infinite]" />
                     <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-medical-primary/40 rounded-full mix-blend-screen filter blur-[50px] animate-[pulse_8s_ease-in-out_infinite_alternate]" />
                     
                     {/* Glossy Edge Reflection */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/30 dark:from-white/10 via-transparent to-black/10 dark:to-transparent opacity-50 pointer-events-none" />
                   </div>

                   {/* Badge */}
                   <div className="absolute -top-4 -right-4 w-12 h-12 bg-medical-accent rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,224,210,0.6)] animate-pulse z-20">
                     <Sparkles size={24} />
                   </div>

                    <div className="w-full h-40 bg-medical-primary/20 rounded-2xl overflow-hidden relative mb-4 group">
                      <Image 
                        src="/african_wellness_recovery_1774726781943.png" 
                        alt="Wellness" 
                        fill
                        className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                   {/* Content Area */}
                   <div className="space-y-3 relative z-10 flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white">Save up to 70%</h3>
                      <p className="text-sm text-gray-300 leading-relaxed max-w-[95%]">Compare costs across top destinations including Turkey, India, and Thailand.</p>
                      <div className="pt-2 flex items-center gap-2 text-medical-accent font-semibold text-sm">
                        Explore Costs <ArrowRight size={16} />
                      </div>
                   </div>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 z-20 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest font-medium group-hover:text-white transition-colors text-center w-full">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
