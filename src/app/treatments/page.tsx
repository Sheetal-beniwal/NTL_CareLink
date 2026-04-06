'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse, Brain, Dna, Bone, Baby, LifeBuoy,
  Eye, Ear, Wind, Syringe, Scissors, FlaskConical,
  ShieldCheck, Activity, BadgeCheck,
  Phone, Mail, ChevronRight, Check,
  ClipboardList, Building2, UserCheck, MessageCircle,
  Zap, Star, Globe, Users, ArrowRight, Calendar
} from 'lucide-react';

/* ════════════════════════════════════════════
   DATA
════════════════════════════════════════════ */

const specialties = [
  { icon: Bone,        label: 'Robotic Joint Replacement' },
  { icon: Dna,         label: 'Cancer Care / Oncologist' },
  { icon: LifeBuoy,    label: 'Kidney Transplant' },
  { icon: ShieldCheck, label: 'Liver Transplant & Biliary Sciences' },
  { icon: Activity,    label: 'Nephrology' },
  { icon: HeartPulse,  label: 'Cardiac Sciences' },
  { icon: Syringe,     label: 'Urology' },
  { icon: Brain,       label: 'Neurology' },
];

const procedures = [
  { icon: HeartPulse,   label: 'Tetralogy of Fallot' },
  { icon: Dna,          label: 'Allogeneic Stem Cell Transplant' },
  { icon: Dna,          label: 'Esophageal Cancer' },
  { icon: Scissors,     label: 'Nose Reshaping Surgery in India' },
  { icon: Dna,          label: 'Autologous Stem Cell Transplant for Lymphoma' },
  { icon: Baby,         label: 'Uterine Cancer' },
  { icon: Zap,          label: 'Novalis Tx in India' },
  { icon: HeartPulse,   label: 'Robotic Heart surgery' },
];

const hospitals = [
  { name: 'Max Healthcare',   country: 'India',    badge: 'JCI + NABH', rating: 4.9, img: '/hospital_images/max hospital image 1.jpeg' },
  { name: 'Apollo Hospitals', country: 'India',    badge: 'JCI + NABH', rating: 4.8, img: '/hospital_images/Apollo hospital.jpeg' },
  { name: 'Medanta',          country: 'India',    badge: 'JCI + NABH', rating: 4.8, img: '/hospital_images/medanta hospital.jpeg' },
  { name: 'Bumrungrad',       country: 'Thailand', badge: 'JCI',        rating: 4.9, img: '/hospital_images/Bumrungrad Hospital.jpeg' },
];

const testimonials = [
  { name: 'Emmanuel K.', country: 'Kenya', text: 'NTL CareLink made my heart surgery journey completely seamless. The team handled everything from visa to recovery lodging.', rating: 5, treatment: 'Cardiac Surgery' },
  { name: 'Amina B.',    country: 'Nigeria', text: 'After 2 years of failed local treatment, NTL connected me to a specialist in India who cured my condition within weeks.', rating: 5, treatment: 'Oncology' },
  { name: 'James O.',    country: 'Uganda', text: 'Professional, compassionate, and thorough. My knee replacement at Medanta was world-class and surprisingly affordable.', rating: 5, treatment: 'Orthopedics' },
];

const whyUs = [
  { icon: ShieldCheck, title: '200-Point Hospital Audit',    desc: 'Every partner hospital passes our rigorous pre-selection benchmarks.' },
  { icon: BadgeCheck,  title: 'JCI Certified Only',          desc: 'We exclusively partner with internationally accredited facilities.' },
  { icon: Globe,       title: 'End-to-End Coordination',     desc: 'Visa, flights, accommodation & interpreters — all handled by us.' },
  { icon: Activity,    title: '98% Patient Success Rate',    desc: 'Outcomes consistently matching or exceeding Western standards.' },
  { icon: Users,       title: '10,000+ Patients Served',     desc: 'A decade of trust built through thousands of successful journeys.' },
  { icon: Calendar,    title: '24/7 On-Call Support',        desc: 'Round-the-clock coordinators always available to assist you.' },
];

/* ─────────────────────────────────────
   CONTACT FORM
───────────────────────────────────── */
function RequestForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', country: '', treatment: '', message: '' });
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(1);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submitStep1 = (e: React.FormEvent) => { e.preventDefault(); setStep(2); };
  const submitStep2 = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  if (sent) return (
    <div className="bg-[#EBF2F7] rounded-xl p-6 text-center space-y-4">
      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check size={26} className="text-green-600" />
      </div>
      <h4 className="font-extrabold text-[#003B5C] text-base">Request Submitted!</h4>
      <p className="text-xs text-slate-500">Our coordinator will reach out within 24 hours.</p>
      <button onClick={() => { setSent(false); setStep(1); setForm({ name:'',phone:'',email:'',country:'',treatment:'',message:'' }); }}
        className="text-[#00A3AD] text-xs font-bold hover:underline">Submit another request</button>
    </div>
  );

  return (
    <div className="bg-[#EBF2F7] rounded-xl overflow-hidden shadow-md">
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-200/60">
        <h3 className="text-[#003B5C] font-extrabold text-base uppercase tracking-wide">Request a Call Back</h3>
        {/* Step indicator */}
        <div className="flex items-center gap-2 mt-3">
          <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 1 ? 'bg-[#00A3AD]' : 'bg-slate-200'}`} />
          <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 2 ? 'bg-[#00A3AD]' : 'bg-slate-200'}`} />
        </div>
        <p className="text-[10px] text-slate-400 mt-1 font-medium">Step {step} of 2</p>
      </div>

      <div className="bg-white mx-1 mb-1 rounded-b-lg p-5">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.form key="s1" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }}
              onSubmit={submitStep1} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Full Name *</label>
                <input required name="name" value={form.name} onChange={handle}
                  placeholder="Your full name"
                  className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] focus:ring-2 focus:ring-[#00A3AD]/10 transition-all placeholder-slate-300" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Mobile / WhatsApp *</label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 shrink-0">
                    <span>🇮🇳</span><span className="text-sm text-slate-600 font-semibold">+91</span>
                  </div>
                  <input required name="phone" value={form.phone} onChange={handle}
                    placeholder="Mobile number"
                    className="flex-1 bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] focus:ring-2 focus:ring-[#00A3AD]/10 transition-all placeholder-slate-300" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Email *</label>
                <input required name="email" value={form.email} onChange={handle} type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] focus:ring-2 focus:ring-[#00A3AD]/10 transition-all placeholder-slate-300" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Country</label>
                <select name="country" value={form.country} onChange={handle}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] focus:ring-2 focus:ring-[#00A3AD]/10 transition-all text-slate-600 appearance-none">
                  <option value="">Select country</option>
                  {['India (भारत)', 'Nigeria', 'Kenya', 'Ethiopia', 'Uganda', 'South Sudan', 'Tanzania', 'Bangladesh', 'UAE', 'UK', 'USA', 'Other'].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <button type="submit"
                className="w-full py-3 bg-[#003B5C] hover:bg-[#00A3AD] text-white font-extrabold rounded-lg text-sm transition-all shadow-sm mt-1 flex items-center justify-center gap-2">
                Next Step <ArrowRight size={15} />
              </button>
            </motion.form>
          ) : (
            <motion.form key="s2" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }}
              onSubmit={submitStep2} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Treatment Needed</label>
                <select name="treatment" value={form.treatment} onChange={handle}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] focus:ring-2 focus:ring-[#00A3AD]/10 transition-all text-slate-600 appearance-none">
                  <option value="">Select treatment</option>
                  {['Cardiology / Heart', 'Neurology / Brain', 'Oncology / Cancer', 'Orthopedics / Joints', 'Organ Transplant', 'Fertility / IVF', 'Nephrology', 'Urology', 'Other'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Brief Message / Query</label>
                <textarea name="message" value={form.message} onChange={handle} rows={4}
                  placeholder="Describe your condition, any previous diagnosis, or questions you have…"
                  className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] focus:ring-2 focus:ring-[#00A3AD]/10 transition-all placeholder-slate-300 resize-none" />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="wa-consent" defaultChecked className="mt-1 accent-[#00A3AD]" />
                <label htmlFor="wa-consent" className="text-[10px] text-slate-400 leading-snug">
                  Get Updates on WhatsApp. I agree to the <Link href="#" className="text-[#00A3AD] font-bold hover:underline">T&C</Link>.
                </label>
              </div>
              <div className="flex gap-2 pt-1">
                <button type="button" onClick={() => setStep(1)}
                  className="flex-1 py-3 border border-slate-200 text-slate-600 font-bold rounded-lg text-sm hover:bg-slate-50 transition-all">
                  ← Back
                </button>
                <button type="submit"
                  className="flex-[2] py-3 bg-[#00A3AD] hover:bg-[#003B5C] text-white font-extrabold rounded-lg text-sm transition-all shadow-sm">
                  Submit Request
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ContactSidebar() {
  return (
    <div className="space-y-4">
      <RequestForm />

      {/* Call + Whatsapp block */}
      <div className="bg-[#EBF2F7] rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
        <a href="tel:+919268880303" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-all group">
          <div className="w-9 h-9 rounded-full bg-[#00A3AD] flex items-center justify-center shrink-0">
            <span className="text-[9px] font-black text-white text-center leading-tight">24/7</span>
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
            <p className="text-sm font-extrabold text-[#003B5C] group-hover:text-[#00A3AD] transition-colors">+91 926 888 0303</p>
          </div>
        </a>
        <a href="https://wa.me/919268880303" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-lg text-sm transition-all shadow-md">
          <MessageCircle size={20} className="fill-white" />
          Whatsapp Us
        </a>
      </div>

      {/* Quick links */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] px-4 pt-4 pb-2">Quick Navigation</p>
        {[
          { label: 'Find a Specialist', href: '/doctors',   icon: UserCheck },
          { label: 'Our Hospitals',     href: '/hospitals', icon: Building2 },
          { label: 'Book Appointment',  href: '/register',  icon: ClipboardList },
          { label: 'Contact Support',   href: '/contact-support', icon: Mail },
        ].map(({ label, href, icon: Icon }) => (
          <Link key={href} href={href}
            className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 group border-t border-slate-100 first:border-0 transition-colors">
            <div className="flex items-center gap-3">
              <Icon size={14} className="text-[#00A3AD]" />
              <span className="text-sm font-semibold text-slate-700 group-hover:text-[#003B5C]">{label}</span>
            </div>
            <ChevronRight size={13} className="text-slate-300 group-hover:text-[#00A3AD] transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SECTION HEADING COMPONENT
════════════════════════════════════════════ */
function SectionHeading({ title, viewAllHref }: { title: string; viewAllHref?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
      <div className="relative">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#003B5C]">{title}</h2>
        <div className="absolute -bottom-[13px] left-0 w-14 h-[3px] bg-[#003B5C]" />
      </div>
      {viewAllHref && (
        <Link href={viewAllHref} className="text-sm font-bold text-slate-500 hover:text-[#00A3AD] flex items-center gap-1 transition-all group shrink-0">
          View all <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════
   MAIN PAGE
════════════════════════════════════════════ */
export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700">

      {/* Nav spacer */}
      <div className="h-16 sm:h-20" />

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ── BOOKING BAR ── */}
        <div className="bg-[#003B5C] rounded-xl flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-5 sm:px-8 mb-10 sm:mb-12 shadow-lg">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-center sm:text-left">
            To Book an Appointment
          </h2>
          <a href="tel:+919268880303"
            className="flex items-center gap-3 bg-[#00A3AD] hover:bg-[#00c8d4] rounded-full px-5 sm:px-7 py-2.5 sm:py-3 text-white transition-all shadow-xl shrink-0">
            <div className="w-8 h-8 rounded-full border-2 border-white/70 flex items-center justify-center shrink-0">
              <span className="text-[8px] font-black leading-tight text-center">24/7</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[9px] font-bold uppercase opacity-80 tracking-widest">Call Us</span>
              <span className="text-base sm:text-lg font-black">+91 926 888 0303</span>
            </div>
          </a>
        </div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-8 xl:gap-12 items-start">

          {/* ═══ LEFT COLUMN ═══ */}
          <div className="space-y-10 sm:space-y-14 min-w-0">

            {/* SPECIALITIES */}
            <section>
              <SectionHeading title="Specialities" viewAllHref="/doctors" />
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                {specialties.map((s, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.02, borderColor: '#00A3AD' }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-slate-200 rounded-xl cursor-pointer transition-all hover:shadow-md min-h-[76px]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0 bg-slate-50">
                      <s.icon size={24} className="text-[#003B5C]" strokeWidth={1.2} />
                    </div>
                    <span className="text-[13px] font-bold text-[#003B5C]/90 leading-snug">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* PROCEDURES */}
            <section>
              <SectionHeading title="Procedures" viewAllHref="/treatments" />
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                {procedures.map((p, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.02, borderColor: '#00A3AD' }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-slate-200 rounded-xl cursor-pointer transition-all hover:shadow-md min-h-[76px]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0 bg-slate-50">
                      <p.icon size={24} className="text-[#003B5C]" strokeWidth={1.2} />
                    </div>
                    <span className="text-[13px] font-bold text-[#003B5C]/90 leading-snug">{p.label}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* WHY CHOOSE NTL */}
            <section className="bg-slate-50 rounded-2xl p-5 sm:p-8 border border-slate-100">
              <SectionHeading title="Why Choose NTL CareLink?" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {whyUs.map((w, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-sm transition-all">
                    <div className="w-9 h-9 rounded-lg bg-[#003B5C]/8 flex items-center justify-center shrink-0 mt-0.5">
                      <w.icon size={18} className="text-[#00A3AD]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003B5C] text-sm leading-snug mb-0.5">{w.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PARTNER HOSPITALS */}
            <section>
              <SectionHeading title="International Clinics" viewAllHref="/hospitals" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hospitals.map((h, i) => (
                  <motion.div key={i} whileHover={{ y: -3 }}
                    className="group flex gap-4 items-center p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all cursor-pointer">
                    <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0">
                      <img src={h.img} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-extrabold text-[#003B5C] text-sm truncate">{h.name}</h3>
                      <p className="text-xs text-slate-400 mb-2">{h.country}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <BadgeCheck size={11} className="text-[#00A3AD]" />
                          <span className="text-[9px] font-bold text-slate-500">{h.badge}</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <Star size={10} fill="#f6ad55" stroke="none" />
                          <span className="text-[10px] font-bold text-slate-600">{h.rating}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-[#00A3AD] shrink-0 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* PATIENT TESTIMONIALS */}
            <section>
              <SectionHeading title="Patient Stories" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, k) => <Star key={k} size={12} fill="#f6ad55" stroke="none" />)}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic">"{t.text}"</p>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                      <div>
                        <p className="text-xs font-extrabold text-[#003B5C]">{t.name}</p>
                        <p className="text-[10px] text-slate-400">{t.country}</p>
                      </div>
                      <span className="text-[9px] font-bold text-[#00A3AD] bg-[#00A3AD]/8 px-2 py-1 rounded-full">{t.treatment}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* STATS BANNER */}
            <section className="bg-[#003B5C] rounded-2xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[['10,000+', 'Patients Served'], ['50+', 'Partner Hospitals'], ['60+', 'Countries Served'], ['98%', 'Success Rate']].map(([v, l]) => (
                <div key={l}>
                  <p className="text-2xl sm:text-3xl font-black text-white">{v}</p>
                  <p className="text-[10px] font-bold text-[#00E0D2] uppercase tracking-widest mt-1">{l}</p>
                </div>
              ))}
            </section>

          </div>
          {/* END LEFT COLUMN */}

          {/* ═══ RIGHT COLUMN — Sticky Sidebar ═══ */}
          <aside className="sticky top-24 hidden lg:block">
            <ContactSidebar />
          </aside>

        </div>
      </div>

      {/* ── MOBILE CONTACT FORM ── */}
      <div className="lg:hidden container mx-auto px-4 sm:px-6 pb-10">
        <ContactSidebar />
      </div>

      {/* ── FINAL CTA ── */}
      <section className="bg-slate-900 py-14 sm:py-20 mt-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #00A3AD 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">Start Your Treatment Journey</h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">Upload your medical reports for a free expert review. No obligations — just clear guidance.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="px-7 py-3.5 bg-[#00A3AD] hover:bg-white hover:text-[#003B5C] text-white font-extrabold rounded-xl transition-all shadow-lg text-sm flex items-center justify-center gap-2">
              <ClipboardList size={16} /> Get a Free Quote
            </Link>
            <Link href="/doctors" className="px-7 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm flex items-center justify-center gap-2">
              <UserCheck size={16} /> Find a Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
