"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Calculator, Sparkles, Quote } from "lucide-react";
import Image from "next/image";

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
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-dark/95 via-medical-dark/70 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-30 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-white space-y-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-primary/20 border border-medical-primary/30 text-medical-accent font-medium text-sm backdrop-blur-md"
          >
            <Sparkles size={16} />
            <span>Trusted by 10,000+ Global Patients</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Affordable <span className="text-medical-accent">World-Class</span> Treatment Abroad
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed"
          >
            Experience premium healthcare at a fraction of the cost. From Turkey to Thailand, we connect you with the world's best hospitals.
          </motion.p>

          <div className="space-y-6 pt-4">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-medical-primary hover:bg-medical-primary/90 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-medical-primary/20 group">
                <Calendar size={20} />
                Book Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all backdrop-blur-sm">
                <Calculator size={20} />
                Get Free
              </button>
            </motion.div>

            {/* Themed Quote Section */}
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 max-w-md italic text-gray-300 text-sm"
            >
              <Quote size={18} className="text-medical-accent flex-shrink-0" />
              <p>
                "At NTL CareLink, your health is our global priority. We believe world-class care shouldn't have boundaries."
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Card */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block flex-shrink-0 w-80 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative"
        >
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-medical-accent rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
            <Sparkles size={24} />
          </div>
          <div className="space-y-4">
            <div className="w-full h-40 bg-medical-primary/20 rounded-2xl overflow-hidden relative">
               <Image 
                src="/gallery/wellness.png" 
                alt="Hospital" 
                fill
                className="object-cover opacity-80"
               />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Save up to 70%</h3>
              <p className="text-sm text-gray-300">Compare costs across top destinations including Turkey, India, and Thailand.</p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-medical-accent font-semibold text-sm cursor-pointer hover:underline">
              Explore Costs <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
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
