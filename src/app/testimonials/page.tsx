'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, Quote, ShieldCheck, Globe, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FloatingMedicalElements from '../Components/FloatingMedicalElements';

const testimonials = [
  {
    id: 1,
    name: 'Amara Deng',
    location: 'Juba, South Sudan',
    image: '/testimonials/testimonial (1).jpeg',
    rating: 5,
    treatment: 'Cardiac Surgery',
    text: 'NTL CareLink was a lifeline for my family. When my father needed urgent heart surgery, they coordinated everything — from the hospital in Delhi to our flights and accommodation. The care he received at Apollo was world-class, and we never felt alone for a single moment.',
  },
  {
    id: 4,
    name: 'Fatima Al-Rashid',
    location: 'Dar es Salaam, Tanzania',
    image: '/testimonials/testimonial (4).jpeg',
    rating: 5,
    treatment: 'Neurological Care',
    text: 'My son was diagnosed with a rare neurological disorder. NTL CareLink found us the best neurologist at Artemis Hospital in Gurugram. Their team handled visa processing, hospital admissions, and even arranged a translator. I cannot express my gratitude enough.',
  },
  {
    id: 5,
    name: 'John Bosco Otieno',
    location: 'Kisumu, Kenya',
    image: '/testimonials/testimonial (5).jpeg',
    rating: 5,
    treatment: 'Liver Transplant',
    text: 'The liver transplant process is incredibly complex, but NTL CareLink made it manageable. They guided our family through every legal and medical step, coordinated with Max Hospital seamlessly, and ensured we had comfort and clarity throughout. My brother is alive today because of them.',
  },
  {
    id: 6,
    name: 'Aisha Mohammed',
    location: 'Khartoum, Sudan',
    image: '/testimonials/testimonial (6).jpeg',
    rating: 5,
    treatment: 'Paediatric Care',
    text: "My daughter needed specialized paediatric care that was not available locally. NTL CareLink arranged her treatment at a top children's hospital in India, including accommodation for our entire family. Their compassion and professionalism are truly unmatched.",
  },
  {
    id: 8,
    name: 'Winnie Atieno',
    location: 'Mombasa, Kenya',
    image: '/testimonials/testimonial (8).jpeg',
    rating: 5,
    treatment: 'Fertility Treatment',
    text: 'After years of failed fertility treatments locally, NTL CareLink gave us renewed hope. They connected us with a renowned fertility specialist in India, handled all travel arrangements, and supported us emotionally throughout the journey. We are now proud parents of twins.',
  },
  {
    id: 10,
    name: 'Mercy Wanjiku',
    location: 'Nairobi, Kenya',
    image: '/testimonials/testimonial (10).jpeg',
    rating: 5,
    treatment: 'Kidney Transplant',
    text: "NTL CareLink managed my husband's kidney transplant process with incredible efficiency and warmth. From finding the right hospital to ensuring our stay in India was comfortable, every detail was handled. He is now healthy and we are forever grateful.",
  },
  {
    id: 11,
    name: 'Abdi Hassan',
    location: 'Mogadishu, Somalia',
    image: '/testimonials/testimonial (11).jpeg',
    rating: 5,
    treatment: 'Eye Surgery',
    text: "I was losing my vision rapidly and feared going blind. NTL CareLink quickly arranged my eye surgery consultation at a premier hospital in Delhi. The specialist there performed a procedure that restored my sight. I can now see my children's faces clearly again.",
  },
  {
    id: 12,
    name: 'Edith Nalubega',
    location: 'Entebbe, Uganda',
    image: '/testimonials/testimonial (12).jpeg',
    rating: 5,
    treatment: 'Gynaecological Surgery',
    text: 'NTL CareLink handled my medical travel with sensitivity and professionalism. The entire process, from the initial inquiry to post-surgery follow-up, was seamlessly managed. I felt cared for as a person, not just as a patient. Highly recommend their services.',
  },
  {
    id: 13,
    name: 'Peter Garang',
    location: 'Juba, South Sudan',
    image: '/testimonials/testimonial (13).jpeg',
    rating: 5,
    treatment: 'Hip Replacement',
    text: 'After suffering hip pain for months, NTL CareLink arranged my hip replacement at a top orthopaedic centre in India. The surgery was performed with precision, and the rehabilitation support was superb. I returned home walking, which felt like a miracle.',
  },
  {
    id: 14,
    name: 'Rose Achieng',
    location: 'Kisumu, Kenya',
    image: '/testimonials/testimonial (14).jpeg',
    rating: 5,
    treatment: 'Cardiac Bypass',
    text: "My mother's cardiac bypass surgery was a terrifying prospect, but NTL CareLink made us feel reassured at every stage. They chose the right hospital, arranged accommodation, and provided daily updates during her surgery. She recovered beautifully. We are truly thankful.",
  },
];

const VISIBLE_CARDS = 3;

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
      />
    ))}
  </div>
);

const TestimonialCard = ({
  testimonial,
  isActive,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className={`relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border transition-all duration-500 h-full ${
      isActive
        ? 'border-medical-primary/40 shadow-medical-primary/15 scale-[1.02]'
        : 'border-gray-100 hover:border-medical-primary/20 hover:shadow-xl'
    }`}
  >
    {/* Large patient photo at top */}
    <div className="relative w-full h-52 shrink-0">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Gradient overlay at bottom of photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      {/* Treatment tag overlaid on photo */}
      <div className="absolute bottom-3 left-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-primary text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          {testimonial.treatment}
        </span>
      </div>
      {/* Rating overlaid on photo top-right */}
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow">
        <StarRating rating={testimonial.rating} />
      </div>
    </div>

    {/* Card body */}
    <div className="flex flex-col flex-1 p-6">
      {/* Large decorative quote */}
      <div className="absolute top-[220px] right-5 opacity-[0.06]">
        <Quote size={56} className="text-medical-primary fill-medical-primary" />
      </div>

      {/* Quote text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-5" />

      {/* Author row */}
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-[3px] border-medical-primary/30 shrink-0 shadow-md">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover object-top"
            sizes="56px"
          />
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs mt-0.5">{testimonial.location}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLElement>(null);
  const isCarouselInView = useInView(carouselRef, { once: true, margin: '-100px' });

  const total = testimonials.length;
  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const visibleIndices = Array.from({ length: VISIBLE_CARDS }, (_, i) => (activeIndex + i) % total);
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

      {/* --- TESTIMONIALS CAROUSEL --- */}
      <section
        ref={carouselRef}
        className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-medical-primary/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-medical-accent/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isCarouselInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[420px]"
          >
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((idx, position) => (
                <TestimonialCard
                  key={testimonials[idx].id}
                  testimonial={testimonials[idx]}
                  isActive={position === 1}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Prev button */}
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-2xl border-2 border-gray-200 hover:border-medical-primary hover:bg-medical-primary hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-8 h-2.5 bg-medical-primary'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-medical-primary/50'
                  }`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-2xl border-2 border-gray-200 hover:border-medical-primary hover:bg-medical-primary hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCarouselInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 flex flex-col items-center gap-4"
          >
            {/* Avatar stack */}
            <div className="flex items-center -space-x-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="w-12 h-12 rounded-full border-[3px] border-white overflow-hidden shadow-md relative"
                >
                  <Image
                    src={`/testimonials/testimonial (${n}).jpeg`}
                    alt={`Patient ${n}`}
                    fill
                    className="object-cover object-top"
                    sizes="48px"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-[3px] border-white bg-medical-primary flex items-center justify-center text-white text-[10px] font-black shadow-md">
                +495
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Joined by{' '}
              <span className="text-gray-800 font-bold">500+ patients</span> who trusted NTL CareLink
            </p>
          </motion.div>
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
