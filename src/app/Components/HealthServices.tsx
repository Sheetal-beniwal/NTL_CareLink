'use client';

import * as Icons from 'lucide-react';
import FloatingMedicalElements from './FloatingMedicalElements';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HealthServices = ({ data }: { data?: any }) => {
  const content = data || {
    badge: 'Excellence in Care',
    title: 'Our Comprehensive Health Services',
    subtitle: 'We are always here to ensure your health is served better with world-class medical assistance and end-to-end patient care.',
    services: [
      { title: 'Medical Visa Assistance', desc: 'Facilitating smooth visa invitations and processing for international patients.', icon: 'ShieldCheck', image: '/african_medical_scene_1774726766055.png' },
      { title: 'Hospital Coordination', desc: 'Strategic partner network to find the best hospitals and medical specialists in India.', icon: 'Hospital', image: '/hero-bg.png' },
      { title: 'Full Journey Management', desc: 'Professional handling of appointments, diagnosis, surgical bookings, and discharge.', icon: 'Stethoscope', image: '/african_wellness_recovery_1774726781943.png' },
      { title: 'Free Medical Opinion', desc: 'Online consultation with top doctors to plan your treatment before you fly.', icon: 'Users', image: '/doctor_founder.png' },
      { title: 'Patient Concierge', desc: 'Pick-up services, local SIM cards, currency exchange, and accommodation support.', icon: 'MapPin', image: '/african_patient_profile_1774726934268.png' },
      { title: 'Translation & Support', desc: 'Language assistants and dedicated support staff to bridge any communication gaps.', icon: 'MessageSquare', image: '/healthcare_scene.png' }
    ]
  };

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.Activity;
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <section className="py-24 bg-medical-dark dark:bg-[#0b1120] border-b border-gray-100 dark:border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medical-light/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl -z-10" />
      
      <FloatingMedicalElements density="medium" />

      <div className="container mx-auto px-6 space-y-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-medical-accent font-bold text-xs uppercase tracking-widest">
            {content.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {content.title.replace('Health Services', '')} <span className="text-medical-accent">Health Services</span>
          </h2>
          <p className="text-slate-100/70 text-lg">
            {content.subtitle}
          </p>
        </div>
        
        <motion.div 
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {(content.services || []).map((service: any, i: number) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="shrink-0 w-[85%] sm:w-auto md:w-full group p-8 rounded-[32px] bg-white border border-gray-100 shadow-xl snap-center relative overflow-hidden"
            >
              {/* Premium Floating Image Accent */}
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-[0.1] group-hover:opacity-[0.25] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-1000 select-none pointer-events-none">
                <div className="w-full h-full rounded-[60px] overflow-hidden border-4 border-medical-primary/20 shadow-2xl">
                  <Image 
                    src={service.image || service.bgImage || '/hero-bg.png'} 
                    alt="" 
                    fill 
                    className="object-cover grayscale brightness-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-medical-light/40 rounded-bl-[64px] z-10" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-medical-light flex items-center justify-center text-medical-primary group-hover:bg-medical-primary group-hover:text-white transition-all duration-500">
                  {getIcon(service.icon)}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-medical-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </div>
                <Link href="/contact-support" className="pt-4 flex items-center gap-2 text-medical-primary font-bold text-sm tracking-wide uppercase group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <div className="w-5 h-[2px] bg-medical-primary" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HealthServices;
