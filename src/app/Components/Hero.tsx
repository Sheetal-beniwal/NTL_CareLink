"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Calendar, Sparkles, ShieldCheck, Globe,
  HeartPulse, Brain, Plane, ClipboardList, Users,
  Stethoscope, BadgeCheck, Activity, Clock, Star,
  MapPin, PhoneCall
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ── Scroll Cards Data ─────────────────────────────── */
const cards = [
  {
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-600 border-rose-100",
    iconBg: "bg-rose-100",
    tag: "Cardiac Care",
    title: "Heart Surgery & Cardiology",
    desc: "Access world-class cardiac surgeons for bypass, valve repair, angioplasty & more — at 70% lower cost.",
  },
  {
    icon: Brain,
    color: "bg-violet-50 text-violet-600 border-violet-100",
    iconBg: "bg-violet-100",
    tag: "Neurology",
    title: "Brain & Spine Treatments",
    desc: "Leading neurosurgeons for complex spine surgeries, tumor removal & epilepsy management.",
  },
  {
    icon: ClipboardList,
    color: "bg-teal-50 text-teal-700 border-teal-100",
    iconBg: "bg-teal-100",
    tag: "Treatment Planning",
    title: "Free Medical Opinion",
    desc: "Share your reports and get a second opinion from international specialists within 48 hours — at no cost.",
  },
  {
    icon: Plane,
    color: "bg-sky-50 text-sky-700 border-sky-100",
    iconBg: "bg-sky-100",
    tag: "Travel & Visa",
    title: "End-to-End Travel Support",
    desc: "We handle medical visa, flights, airport transfers, and accommodation so you focus only on healing.",
  },
  {
    icon: Stethoscope,
    color: "bg-amber-50 text-amber-700 border-amber-100",
    iconBg: "bg-amber-100",
    tag: "Oncology",
    title: "Cancer Care Abroad",
    desc: "JCI-accredited oncology centers offering targeted therapy, immunotherapy, and robotic surgeries.",
  },
  {
    icon: BadgeCheck,
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconBg: "bg-emerald-100",
    tag: "Orthopedics",
    title: "Joint Replacement & Spine",
    desc: "Robotic knee, hip & shoulder replacements with short recovery times and international-standard care.",
  },
  {
    icon: Activity,
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    iconBg: "bg-indigo-100",
    tag: "Organ Transplant",
    title: "Kidney & Liver Transplants",
    desc: "Partner with top transplant centers in India for life-saving kidney, liver, and bone-marrow procedures.",
  },
  {
    icon: Users,
    color: "bg-pink-50 text-pink-700 border-pink-100",
    iconBg: "bg-pink-100",
    tag: "Patient Support",
    title: "Dedicated Care Coordinator",
    desc: "A personal coordinator guides you from first enquiry to full recovery — available 24 / 7 in your language.",
  },
];

/* ── Component ─────────────────────────────────────── */
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFCFF] dark:bg-slate-950 md:bg-white md:dark:bg-slate-900">

      {/* ══════════ MOBILE VIEW (matches image) ══════════ */}
      <div className="md:hidden flex flex-col pt-24 pb-28 px-5 gap-6">
        {/* 1. Hero Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none border-4 border-white dark:border-slate-800"
        >
          <Image
            src="/hero-bg-home.png"
            alt="Doctor and Patient"
            fill
            className="object-cover object-left"
            priority
          />
        </motion.div>

        {/* 2. Trust Pill */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00A3AD]/10 border border-[#00A3AD]/20 text-[#00A3AD] text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} className="fill-[#00A3AD]/20" />
            Trusted by 10,000+ Global Patients
          </span>
        </motion.div>

        {/* 3. Headline & Subheading */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[34px] leading-[1.1] font-black text-[#003B5C] tracking-tight"
          >
            Affordable <br />
            <span className="text-[#00A3AD]">World-Class</span> <br />
            Treatment Abroad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[15px] text-slate-500 leading-relaxed font-medium"
          >
            From Turkey to Thailand — we connect you with the world&apos;s best hospitals at a fraction of the cost.
          </motion.p>
        </div>

        {/* 4. Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { icon: ShieldCheck, label: "JCI Accredited" },
            { icon: Globe, label: "15+ Countries" },
            { icon: Star, label: "98% Success Rate" },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-3 flex flex-col items-center gap-2 shadow-sm text-center">
              <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center">
                <item.icon size={16} className="text-[#00A3AD]" />
              </div>
              <span className="text-[9px] font-bold text-slate-600 leading-tight">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* 5. Main CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-3 mt-2"
        >
          <Link
            href="/register"
            className="w-full bg-[#003B5C] text-white py-4.5 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 shadow-xl shadow-[#003B5C]/20 active:scale-95 transition-transform"
          >
            <Calendar size={18} />
            Book Appointment
            <ArrowRight size={18} className="ml-1" />
          </Link>
          <Link
            href="/about-us"
            className="w-full bg-white border-2 border-slate-100 text-[#003B5C] py-4.5 rounded-2xl font-black text-[15px] flex items-center justify-center active:scale-95 transition-transform shadow-sm"
          >
            Learn More
          </Link>
        </motion.div>

        {/* 6. Service List (Vertical) */}
        <div className="flex flex-col gap-3.5 mt-4">
          {cards.slice(0, 5).map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
            >
              <Link
                href="/register"
                className="bg-white border border-slate-50 rounded-2xl p-4 flex items-center gap-4 shadow-sm active:bg-slate-50 transition-colors group"
              >
                <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                  <card.icon size={26} className={card.color.split(' ')[1]} />
                </div>
                <div className="flex-grow">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${card.color.split(' ')[1]}`}>
                    {card.tag}
                  </span>
                  <h3 className="text-[16px] font-black text-[#003B5C] leading-tight mt-0.5">
                    {card.title}
                  </h3>
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-medical-primary transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 7. Sticky Bottom CTA (Mobile only) */}
        <div className="fixed bottom-0 left-0 w-full p-5 z-[110] bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none">
          <Link
            href="/register"
            className="pointer-events-auto w-full bg-[#00A3AD] text-white py-4.5 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(0,163,173,0.4)] border-2 border-white/20 active:scale-95 transition-transform"
          >
            <Calendar size={18} />
            Book Appointment Now
          </Link>
        </div>
      </div>


      {/* ══════════ DESKTOP VIEW (original) ══════════ */}
      <div className="hidden md:block">
        <div className="relative min-h-[82vh] flex items-center pb-36 sm:pb-44">

          {/* Background image — right-aligned so subject shows on right */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg-home.png"
              alt="Doctor consulting a patient"
              fill
              className="object-cover object-right"
              priority
              quality={100}
              sizes="100vw"
              unoptimized={true}
            />

            {/* White fade: strong on left, fades to transparent by ~55% */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.60) 52%, rgba(255,255,255,0.0) 72%)",
              }}
            />
            {/* Subtle bottom fade */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.55) 0%, transparent 35%)",
              }}
            />
          </div>

          {/* ── Text content — left half ── */}
          <div className="relative z-20 w-full container mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32">
            <div className="max-w-[520px]">

              {/* Pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A3AD]/12 border border-[#00A3AD]/30 text-[#00A3AD] text-[11px] font-bold uppercase tracking-widest mb-5"
              >
                <Sparkles size={13} />
                Trusted by 10,000+ Global Patients
              </motion.div>

              {/* Heading — compact, tight leading */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="text-[2.4rem] sm:text-[2.9rem] md:text-[3.3rem] font-black text-[#003B5C] leading-[1.08] tracking-tight mb-4"
              >
                Affordable{" "}
                <span className="text-[#00A3AD]">World-Class</span>
                <br />
                Treatment Abroad
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="text-[15px] sm:text-base text-slate-500 leading-relaxed mb-7 max-w-[400px]"
              >
                From Turkey to Thailand — we connect you with the world&apos;s best hospitals at a fraction of the cost.
              </motion.p>

              {/* Quick trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.32 }}
                className="flex flex-wrap gap-3 mb-7"
              >
                {[
                  { icon: ShieldCheck, label: "JCI Accredited" },
                  { icon: Globe, label: "15+ Countries" },
                  { icon: Star, label: "98% Success Rate" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 bg-white/80 border border-slate-200 rounded-full px-3 py-1.5 shadow-sm"
                  >
                    <Icon size={12} className="text-[#00A3AD]" />
                    {label}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/register"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#003B5C] hover:bg-[#00A3AD] text-white rounded-xl font-extrabold text-sm transition-all duration-300 shadow-lg shadow-[#003B5C]/20 hover:scale-[1.03] active:scale-95"
                >
                  <Calendar size={17} />
                  Book Appointment
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/70 backdrop-blur-sm border-2 border-slate-200 hover:border-[#00A3AD] text-[#003B5C] rounded-xl font-bold text-sm transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ══════════ HORIZONTAL SCROLL CARDS (Desktop only) ══════════ */}
        <div
          className="relative z-30 -mt-28 sm:-mt-36 pb-10 sm:pb-14"
        >
          {/* Fade masks on sides */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrollable track */}
            <div
              className="flex gap-4 sm:gap-5 overflow-x-auto px-6 sm:px-10 lg:px-16 pb-4 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 + idx * 0.07 }}
                    className={`flex-shrink-0 w-[240px] sm:w-[260px] bg-white rounded-2xl border ${card.color} p-5 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group`}
                  >
                    {/* Tag + Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-70">
                        {card.tag}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${card.iconBg} group-hover:scale-110 transition-transform`}>
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="font-extrabold text-[#003B5C] text-[15px] leading-snug mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-[12px] leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                );
              })}

              {/* End CTA card */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + cards.length * 0.07 }}
                className="flex-shrink-0 w-[200px] sm:w-[220px] bg-[#003B5C] rounded-2xl p-5 shadow-md flex flex-col items-start justify-between"
              >
                <div>
                  <PhoneCall size={24} className="text-[#00E0D2] mb-3" />
                  <h3 className="font-extrabold text-white text-[15px] leading-snug mb-2">
                    Speak to a Coordinator
                  </h3>
                  <p className="text-slate-400 text-[12px] leading-relaxed">
                    Get personalised guidance from our medical travel experts.
                  </p>
                </div>
                <Link
                  href="/contact-support"
                  className="mt-4 inline-flex items-center gap-1.5 text-[#00E0D2] font-black text-[12px] hover:gap-3 transition-all"
                >
                  Contact Us <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
