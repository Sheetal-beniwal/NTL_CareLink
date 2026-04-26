'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

export interface HeroCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HeroSectionProps {
  /** Small pill/badge text above the heading */
  pillText: string;
  /** Pill icon (Lucide component) */
  pillIcon?: React.ReactNode;
  /** Main heading — supports JSX for spans/breaks */
  heading: React.ReactNode;
  /** Subtitle paragraph */
  subtitle: string;
  /** Primary CTA button text */
  ctaText?: string;
  /** Primary CTA button link */
  ctaHref?: string;
  /** Secondary CTA button text */
  secondaryCtaText?: string;
  /** Secondary CTA button link */
  secondaryCtaHref?: string;
  /** Background image path (defaults to /hero-bg-medical.png) */
  backgroundImage?: string;
  /** 3 overlapping cards at the bottom */
  cards?: HeroCard[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  pillText,
  pillIcon,
  heading,
  subtitle,
  ctaText,
  ctaHref = '/register',
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage = '/hero-bg-medical.png',
  cards,
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* ── HERO AREA ── */}
      <div className={`relative min-h-[85vh] flex items-center ${cards && cards.length > 0 ? 'pb-32 md:pb-40' : ''}`}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            unoptimized={true}
          />
          {/* Gradient overlays — dark on left for text readability, lighter on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/95 via-[#003B5C]/75 to-[#003B5C]/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/80 via-transparent to-[#003B5C]/20 z-10" />
          
          {/* Subtle dot pattern for texture */}
          <div
            className="absolute inset-0 opacity-[0.04] z-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 sm:px-8 relative z-30 pt-28 sm:pt-32 md:pt-36">
          <div className="max-w-2xl">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00E0D2] text-xs font-bold uppercase tracking-widest mb-7"
            >
              {pillIcon}
              <span>{pillText}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-7"
            >
              {heading}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mb-10 font-light"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            {(ctaText || secondaryCtaText) && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {ctaText && (
                  <Link
                    href={ctaHref}
                    className="group px-8 py-4 bg-[#00A3AD] hover:bg-white hover:text-[#003B5C] text-white rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-xl shadow-[#00A3AD]/25 flex items-center justify-center gap-2.5 hover:scale-[1.03] active:scale-95"
                  >
                    {ctaText}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Link
                    href={secondaryCtaHref}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 text-white rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Decorative floating orb — adds depth */}
        <div className="absolute top-20 right-[15%] w-64 h-64 bg-[#00A3AD]/15 rounded-full blur-[100px] pointer-events-none z-20 hidden lg:block" />
        <div className="absolute bottom-10 right-[5%] w-48 h-48 bg-[#00E0D2]/10 rounded-full blur-[80px] pointer-events-none z-20 hidden lg:block" />
      </div>

      {/* ── OVERLAPPING CARDS ── */}
      {cards && cards.length > 0 && (
        <div className="relative z-40 -mt-24 md:-mt-28">
          <div className="container mx-auto px-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
            >
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-7 lg:p-8 shadow-xl shadow-slate-200/60 border border-slate-100 hover:shadow-2xl hover:shadow-[#00A3AD]/10 hover:-translate-y-1.5 transition-all duration-400 flex items-start gap-5"
                >
                  {/* Icon circle */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#003B5C] to-[#00526e] text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                    {card.icon}
                  </div>
                  <div className="space-y-2 min-w-0">
                    <h3 className="font-extrabold text-[#003B5C] text-lg leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
