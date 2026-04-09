'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, animate, useInView } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Data ──────────────────────────────────────────────────────────────────────
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

// Only images confirmed to exist on disk
const AVATAR_IDS = [1, 4, 5, 6, 8];

// ─── Constants ─────────────────────────────────────────────────────────────────
const GAP = 24;       // px — matches Tailwind gap-6
const VISIBLE = 3;    // visible cards on desktop
const CLONES = 3;     // clone count on each side for seamless infinite loop

// ─── Helpers ───────────────────────────────────────────────────────────────────
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

// ─── Card (no motion.div — position is handled by the parent strip) ─────────────
const TestimonialCard = ({
  testimonial,
  isCenter,
}: {
  testimonial: (typeof testimonials)[0];
  isCenter: boolean;
}) => (
  <div
    className="relative flex flex-col bg-white rounded-3xl overflow-hidden h-full"
    style={{
      border: '1px solid',
      borderColor: isCenter ? 'rgba(0,180,180,0.35)' : '#f1f5f9',
      boxShadow: isCenter
        ? '0 8px 40px rgba(0,180,180,0.18), 0 2px 8px rgba(0,0,0,0.06)'
        : '0 2px 12px rgba(0,0,0,0.06)',
      transform: isCenter ? 'scale(1.025)' : 'scale(0.97)',
      opacity: isCenter ? 1 : 0.82,
      transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease',
    }}
  >
    {/* Patient photo */}
    <div className="relative w-full h-52 shrink-0">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-primary text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          {testimonial.treatment}
        </span>
      </div>
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow">
        <StarRating rating={testimonial.rating} />
      </div>
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-6">
      <div className="absolute top-[220px] right-5 opacity-[0.05]">
        <Quote size={56} className="text-medical-primary fill-medical-primary" />
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-5" />
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
  </div>
);

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const containerRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState(0);

  /**
   * activeIndex = real index of the LEFTMOST visible card.
   * center card real index = (activeIndex + 1) % total
   */
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  const isAnimating = useRef(false);

  // framer-motion MotionValue for the strip's horizontal position
  const x = useMotionValue(0);

  // Ref tracking the extended-strip index of the leftmost visible card
  const stripPos = useRef(CLONES); // starts pointing at real index 0

  const total = testimonials.length;

  /**
   * Extended strip:
   *   [ last CLONES cards | all real cards | first CLONES cards ]
   *
   * Example for 10 cards, CLONES=3:
   *   [T7,T8,T9, | T0..T9, | T0,T1,T2]
   *   indices 0-2 | 3-12   | 13-15
   */
  const extended = [
    ...testimonials.slice(-CLONES),
    ...testimonials,
    ...testimonials.slice(0, CLONES),
  ];

  const slideUnit = cardWidth + GAP;

  // ── Measure container to compute card width ──────────────────────────────────
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const vis = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : VISIBLE;
      setCardWidth(Math.max((w - (vis - 1) * GAP) / vis, 0));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // ── Sync x when cardWidth is first known ────────────────────────────────────
  useEffect(() => {
    if (cardWidth > 0) {
      x.set(-(stripPos.current * slideUnit));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardWidth]);

  // ── Core slide function ──────────────────────────────────────────────────────
  const slideTo = useCallback(
    (direction: 1 | -1) => {
      if (isAnimating.current || cardWidth === 0) return;
      isAnimating.current = true;

      const nextStrip = stripPos.current + direction;
      const nextReal = ((activeIndex + direction) % total + total) % total;
      const targetX = -(nextStrip * slideUnit);

      animate(x, targetX, {
        type: 'spring',
        stiffness: 280,
        damping: 30,
        mass: 0.95,
        onComplete: () => {
          // Seamlessly snap from clone zone back into real zone
          if (nextStrip < CLONES || nextStrip >= CLONES + total) {
            const corrected = nextReal + CLONES;
            x.set(-(corrected * slideUnit));
            stripPos.current = corrected;
          } else {
            stripPos.current = nextStrip;
          }
          setActiveIndex(nextReal);
          isAnimating.current = false;
        },
      });
    },
    [activeIndex, cardWidth, slideUnit, total, x],
  );

  const next = useCallback(() => slideTo(1), [slideTo]);
  const prev = useCallback(() => slideTo(-1), [slideTo]);

  // ── Dot navigation — jump to any center card ────────────────────────────────
  const jumpTo = useCallback(
    (centerIdx: number) => {
      if (isAnimating.current || cardWidth === 0) return;
      // center card is at leftmost+1, so leftmost = (centerIdx - 1 + total) % total
      const newLeftmost = (centerIdx - 1 + total) % total;
      if (newLeftmost === activeIndex) return; // already there

      isAnimating.current = true;
      const targetStrip = newLeftmost + CLONES;
      const targetX = -(targetStrip * slideUnit);

      animate(x, targetX, {
        type: 'spring',
        stiffness: 280,
        damping: 30,
        mass: 0.95,
        onComplete: () => {
          stripPos.current = targetStrip;
          setActiveIndex(newLeftmost);
          isAnimating.current = false;
        },
      });
    },
    [activeIndex, cardWidth, slideUnit, total, x],
  );

  // ── Keep isPausedRef in sync ─────────────────────────────────────────────────
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // ── Auto-advance ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPausedRef.current) slideTo(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideTo]);

  // Center card real index (for dot highlight & card visual state)
  const centerRealIdx = (activeIndex + 1) % total;

  const totalStripWidth =
    cardWidth > 0 ? extended.length * cardWidth + (extended.length - 1) * GAP : 0;

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-medical-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-medical-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-primary/10 text-medical-primary font-bold text-xs uppercase tracking-widest mb-5">
            <Quote size={13} />
            Patient Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Lives Transformed by{' '}
            <span className="text-medical-primary">NTL CareLink</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from real patients across Africa who trusted us with their most precious
            journey — their health.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: '300+', label: 'Patients Served' },
              { value: '100%', label: 'Satisfaction Rate' },
              { value: '15+', label: 'Countries Reached' },
              { value: '50+', label: 'Hospital Partners' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl font-black text-medical-primary">{stat.value}</span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Carousel Viewport ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/*
            overflow-hidden clips the strip.
            The strip itself is a single flex row containing ALL cards (including clones).
            We animate its `x` position to slide — no re-mounts, no key changes.
          */}
          <div
            ref={containerRef}
            className="overflow-hidden"
            style={{ minHeight: 460 }}
          >
            {totalStripWidth > 0 && (
              <motion.div
                style={{
                  x,
                  display: 'flex',
                  gap: GAP,
                  width: totalStripWidth,
                  willChange: 'transform',
                  alignItems: 'stretch',
                }}
              >
                {extended.map((t, i) => {
                  // Map extended index back to 0-based real index
                  const realIdx = ((i - CLONES) % total + total) % total;
                  return (
                    <div
                      key={`${t.id}-${i}`}
                      style={{ width: cardWidth, flexShrink: 0 }}
                    >
                      <TestimonialCard
                        testimonial={t}
                        isCenter={realIdx === centerRealIdx}
                      />
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="w-12 h-12 rounded-2xl border-2 border-gray-200 hover:border-medical-primary hover:bg-medical-primary hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300 group shadow-sm"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Dots — highlight the center card */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === centerRealIdx
                    ? 'w-8 h-2.5 bg-medical-primary shadow-sm'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-medical-primary/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonials"
            className="w-12 h-12 rounded-2xl border-2 border-gray-200 hover:border-medical-primary hover:bg-medical-primary hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300 group shadow-sm"
          >
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* ── Trust badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <div className="flex items-center -space-x-4">
            {AVATAR_IDS.map((n) => (
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
  );
}
