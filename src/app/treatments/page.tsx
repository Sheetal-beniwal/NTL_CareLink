'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse, Brain, Dna, Bone, Baby, LifeBuoy,
  Eye, Syringe, Scissors, FlaskConical,
  ShieldCheck, Activity, BadgeCheck,
  Phone, Mail, ChevronRight, Check,
  ClipboardList, Building2, UserCheck, MessageCircle,
  Zap, Star, Globe, Users, ArrowRight, Calendar,
  X, MapPin, Award, ExternalLink, Wind
} from 'lucide-react';

/* ════════════════ HOSPITAL DATA ════════════════ */
const allHospitals = [
  {
    id: 'apollo',
    name: 'Apollo Hospitals',
    country: 'India',
    city: 'Delhi, Mumbai, Chennai',
    badge: 'JCI + NABH',
    rating: 4.8,
    beds: '10,000+',
    founded: '1983',
    img: '/hospital_images/Apollo hospital.jpeg',
    img2: '/hospital_images/apollo hospiral image 2.jpeg',
    specialties: ['Cardiac Sciences', 'Neurology', 'Oncology', 'Orthopaedics', 'Robotic Surgery'],
    desc: 'Asia\'s largest integrated healthcare group with premier expertise across specialties.',
  },
  {
    id: 'max',
    name: 'Max Healthcare',
    country: 'India',
    city: 'Delhi NCR',
    badge: 'JCI + NABH',
    rating: 4.9,
    beds: '3,400+',
    founded: '2000',
    img: '/hospital_images/max hospital image 1.jpeg',
    img2: '/hospital_images/max hospital image 1.jpeg',
    specialties: ['Cancer Care', 'Organ Transplant', 'Neurosciences', 'Cardiac Surgery'],
    desc: 'North India\'s leading hospital network, renowned for complex organ transplants and cancer care.',
  },
  {
    id: 'medanta',
    name: 'Medanta – The Medicity',
    country: 'India',
    city: 'Gurugram, Lucknow',
    badge: 'JCI + NABH',
    rating: 4.8,
    beds: '1,600+',
    founded: '2009',
    img: '/hospital_images/medanta hospital.jpeg',
    img2: '/hospital_images/medanta hospital image 2.jpeg',
    specialties: ['Kidney Transplant', 'Liver Transplant', 'Cardiac Sciences', 'Orthopaedics'],
    desc: 'One of India\'s largest multi-specialty hospitals, led by globally recognised specialists.',
  },
  {
    id: 'artemis',
    name: 'Artemis Hospital',
    country: 'India',
    city: 'Gurugram',
    badge: 'JCI + NABH',
    rating: 4.7,
    beds: '400+',
    founded: '2007',
    img: '/hospital_images/Artemis hospital.jpeg',
    img2: '/hospital_images/Artemis hospital image 2.jpeg',
    specialties: ['Spinal Surgery', 'Neurology', 'Cancer Care', 'Robotic Surgery'],
    desc: 'Pioneer in robotic and minimally invasive surgery with state-of-the-art infrastructure.',
  },
  {
    id: 'fortis',
    name: 'Fortis Healthcare',
    country: 'India',
    city: 'Pan-India',
    badge: 'JCI + NABH',
    rating: 4.7,
    beds: '4,000+',
    founded: '2001',
    img: '/hospital_images/Fortis hospital image 1.jpeg',
    img2: '/hospital_images/fortis hospiral image 2.jpeg',
    specialties: ['Orthopaedics', 'Cardiac Sciences', 'Cancer Care', 'Nephrology'],
    desc: 'Pan-India network known for consistent clinical quality and patient-friendly services.',
  },
  {
    id: 'bumrungrad',
    name: 'Bumrungrad International',
    country: 'Thailand',
    city: 'Bangkok',
    badge: 'JCI',
    rating: 4.9,
    beds: '580+',
    founded: '1980',
    img: '/hospital_images/Bumrungrad Hospital.jpeg',
    img2: '/hospital_images/Bumrungrad Hospital image 2.jpeg',
    specialties: ['Fertility / IVF', 'Diabetes Management', 'Cardiac Sciences', 'Orthopaedics'],
    desc: 'Southeast Asia\'s most internationally acclaimed hospital, treating 1.1M+ patients yearly.',
  },
  {
    id: 'medicana',
    name: 'Medicana Health Group',
    country: 'Turkey',
    city: 'Istanbul, Ankara',
    badge: 'JCI',
    rating: 4.6,
    beds: '1,200+',
    founded: '1992',
    img: '/hospital_images/medicana hospital images.jpeg',
    img2: '/hospital_images/medicana hospital images.jpeg',
    specialties: ['Hair Transplant', 'Bariatric Surgery', 'Eye Surgery', 'Cosmetic Surgery'],
    desc: 'Turkey\'s leading private hospital group offering world-class care at competitive costs.',
  },
  {
    id: 'memorial',
    name: 'Memorial Healthcare',
    country: 'Turkey',
    city: 'Istanbul',
    badge: 'JCI',
    rating: 4.7,
    beds: '800+',
    founded: '2000',
    img: '/hospital_images/memorial hospital .jpeg',
    img2: '/hospital_images/memorial hospital image 2.jpeg',
    specialties: ['Oncology', 'Neurology', 'Liver Transplant', 'Gynaecology'],
    desc: 'Internationally recognised hospital known for excellence in oncology and transplant surgery.',
  },
];

/* ════════════════ SPECIALTIES ════════════════ */
const specialties = [
  { icon: HeartPulse, label: 'Cardiac Sciences',                hospitals: ['apollo','max','medanta','fortis','bumrungrad'] },
  { icon: Dna,        label: 'Cancer Care / Oncology',          hospitals: ['apollo','max','medanta','artemis','memorial'] },
  { icon: LifeBuoy,   label: 'Kidney Transplant',               hospitals: ['medanta','max','fortis'] },
  { icon: ShieldCheck,label: 'Liver Transplant & Biliary',      hospitals: ['medanta','max','memorial'] },
  { icon: Activity,   label: 'Nephrology',                      hospitals: ['apollo','fortis','medanta'] },
  { icon: Bone,       label: 'Robotic Joint Replacement',       hospitals: ['apollo','artemis','fortis','bumrungrad'] },
  { icon: Syringe,    label: 'Urology',                         hospitals: ['apollo','max','fortis'] },
  { icon: Brain,      label: 'Neurology & Neurosurgery',        hospitals: ['apollo','artemis','memorial','max'] },
];

/* ════════════════ PROCEDURES ════════════════ */
const procedures = [
  { icon: HeartPulse, label: 'Tetralogy of Fallot',                       hospitals: ['apollo','max','medanta'] },
  { icon: Dna,        label: 'Allogeneic Stem Cell Transplant',            hospitals: ['max','medanta','fortis'] },
  { icon: Dna,        label: 'Esophageal Cancer Treatment',                hospitals: ['apollo','memorial','medanta'] },
  { icon: Scissors,   label: 'Rhinoplasty / Nose Reshaping',               hospitals: ['medicana','memorial'] },
  { icon: Dna,        label: 'Autologous Stem Cell – Lymphoma',            hospitals: ['max','apollo','medanta'] },
  { icon: Baby,       label: 'Uterine Cancer Surgery',                     hospitals: ['apollo','memorial','fortis'] },
  { icon: Zap,        label: 'Novalis Tx Radiosurgery',                    hospitals: ['artemis','apollo'] },
  { icon: HeartPulse, label: 'Robotic Heart Surgery',                      hospitals: ['apollo','max','artemis'] },
];

const whyUs = [
  { icon: ShieldCheck, title: '200-Point Hospital Audit',    desc: 'Every partner hospital passes our rigorous pre-selection benchmarks.' },
  { icon: BadgeCheck,  title: 'JCI Certified Only',          desc: 'We exclusively partner with internationally accredited facilities.' },
  { icon: Globe,       title: 'End-to-End Coordination',     desc: 'Visa, flights, accommodation & interpreters — all handled by us.' },
  { icon: Activity,    title: '98% Patient Success Rate',    desc: 'Outcomes consistently matching or exceeding Western standards.' },
  { icon: Users,       title: '10,000+ Patients Served',     desc: 'A decade of trust built through thousands of successful journeys.' },
  { icon: Calendar,   title: '24/7 On-Call Support',        desc: 'Round-the-clock coordinators always available to assist you.' },
];

const testimonials = [
  { name: 'Emmanuel K.', country: 'Kenya',   text: 'NTL CareLink made my heart surgery journey completely seamless. The team handled everything from visa to recovery lodging.', rating: 5, treatment: 'Cardiac Surgery' },
  { name: 'Amina B.',    country: 'Nigeria', text: 'After 2 years of failed local treatment, NTL connected me to a specialist in India who cured my condition within weeks.',   rating: 5, treatment: 'Oncology' },
  { name: 'James O.',    country: 'Uganda',  text: 'Professional, compassionate, and thorough. My knee replacement at Medanta was world-class and surprisingly affordable.',     rating: 5, treatment: 'Orthopedics' },
];

/* ════════════════ HOSPITAL MODAL ════════════════ */
function HospitalModal({ hospitalIds, onClose }: { hospitalIds: string[]; onClose: () => void }) {
  const matched = allHospitals.filter(h => hospitalIds.includes(h.id));
  const [selected, setSelected] = useState(matched[0]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#003B5C] shrink-0">
            <div>
              <p className="text-[10px] font-bold text-[#00E0D2] uppercase tracking-widest mb-0.5">NTL Partner Hospitals</p>
              <h3 className="text-white font-extrabold text-lg">Available Treatment Centres</h3>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
              <X size={18} className="text-white" />
            </button>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Left: hospital tabs */}
            <div className="w-48 shrink-0 border-r border-gray-100 overflow-y-auto bg-slate-50">
              {matched.map(h => (
                <button
                  key={h.id}
                  onClick={() => setSelected(h)}
                  className={`w-full text-left px-4 py-3.5 border-b border-gray-100 transition-all ${selected.id === h.id ? 'bg-white border-l-[3px] border-l-[#00A3AD]' : 'hover:bg-white'}`}
                >
                  <p className={`text-[13px] font-bold leading-snug ${selected.id === h.id ? 'text-[#003B5C]' : 'text-slate-600'}`}>{h.name}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{h.country}</p>
                </button>
              ))}
            </div>

            {/* Right: hospital detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-1 overflow-y-auto"
              >
                {/* Hero image */}
                <div className="relative h-44 shrink-0">
                  <Image src={selected.img} alt={selected.name} fill className="object-cover" sizes="600px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-white font-extrabold text-xl leading-tight">{selected.name}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin size={12} className="text-[#00E0D2]" />
                        <span className="text-[#00E0D2] text-xs font-semibold">{selected.city}, {selected.country}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                      <Star size={13} fill="#f6ad55" stroke="none" />
                      <span className="text-white text-sm font-black">{selected.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{selected.desc}</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Beds', value: selected.beds },
                      { label: 'Since', value: selected.founded },
                      { label: 'Accreditation', value: selected.badge },
                    ].map(s => (
                      <div key={s.label} className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                        <p className="text-[#003B5C] font-extrabold text-sm">{s.value}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider font-semibold">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Specialties */}
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Key Specialties at this Hospital</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.specialties.map(sp => (
                        <span key={sp} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#00A3AD]/10 text-[#003B5C] text-[11px] font-bold">
                          <BadgeCheck size={10} className="text-[#00A3AD]" />
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Link href="/register" onClick={onClose}
                      className="flex-1 py-3 bg-[#003B5C] hover:bg-[#00A3AD] text-white font-extrabold rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
                      <ClipboardList size={15} /> Get Free Quote
                    </Link>
                    <Link href="/hospitals" onClick={onClose}
                      className="flex items-center gap-1.5 px-4 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-[#00A3AD] hover:text-[#00A3AD] transition-all">
                      <ExternalLink size={14} /> All Hospitals
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ════════════════ CLICKABLE CARD ════════════════ */
function DiagnosticCard({ icon: Icon, label, hospitalIds, onOpen }: {
  icon: React.ElementType; label: string; hospitalIds: string[]; onOpen: (ids: string[]) => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(hospitalIds)}
      className="group flex items-center gap-3 sm:gap-4 p-4 bg-white border border-slate-200 rounded-xl cursor-pointer transition-all hover:shadow-lg hover:border-[#00A3AD]/50 text-left w-full min-h-[80px]"
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#003B5C]/5 group-hover:bg-[#00A3AD]/10 transition-colors">
        <Icon size={22} className="text-[#003B5C] group-hover:text-[#00A3AD] transition-colors" strokeWidth={1.3} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[13px] font-bold text-[#003B5C]/90 leading-snug block">{label}</span>
        <span className="text-[10px] text-[#00A3AD] font-semibold mt-0.5 flex items-center gap-1">
          <Building2 size={9} /> {hospitalIds.length} hospital{hospitalIds.length > 1 ? 's' : ''}
        </span>
      </div>
      <ChevronRight size={14} className="text-slate-300 group-hover:text-[#00A3AD] shrink-0 transition-colors" />
    </motion.button>
  );
}

/* ════════════════ CONTACT FORM ════════════════ */
function RequestForm() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', country:'', treatment:'', message:'' });
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(1);
  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(p=>({...p,[e.target.name]:e.target.value}));

  if (sent) return (
    <div className="bg-[#EBF2F7] rounded-xl p-6 text-center space-y-4">
      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check size={26} className="text-green-600" />
      </div>
      <h4 className="font-extrabold text-[#003B5C] text-base">Request Submitted!</h4>
      <p className="text-xs text-slate-500">Our coordinator will reach out within 24 hours.</p>
      <button onClick={()=>{setSent(false);setStep(1);setForm({name:'',phone:'',email:'',country:'',treatment:'',message:''});}}
        className="text-[#00A3AD] text-xs font-bold hover:underline">Submit another request</button>
    </div>
  );

  return (
    <div className="bg-[#EBF2F7] rounded-xl overflow-hidden shadow-md">
      <div className="px-5 py-4 border-b border-slate-200/60">
        <h3 className="text-[#003B5C] font-extrabold text-base uppercase tracking-wide">Request a Call Back</h3>
        <div className="flex items-center gap-2 mt-3">
          <div className={`h-1.5 flex-1 rounded-full transition-all ${step>=1?'bg-[#00A3AD]':'bg-slate-200'}`}/>
          <div className={`h-1.5 flex-1 rounded-full transition-all ${step>=2?'bg-[#00A3AD]':'bg-slate-200'}`}/>
        </div>
        <p className="text-[10px] text-slate-400 mt-1 font-medium">Step {step} of 2</p>
      </div>
      <div className="bg-white mx-1 mb-1 rounded-b-lg p-5">
        <AnimatePresence mode="wait">
          {step===1?(
            <motion.form key="s1" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}
              onSubmit={(e)=>{e.preventDefault();setStep(2);}} className="space-y-3">
              {[{n:'name',l:'Full Name',t:'text',p:'Your full name'},{n:'phone',l:'Mobile / WhatsApp',t:'tel',p:'+256 ...'},{n:'email',l:'Email',t:'email',p:'your@email.com'}].map(f=>(
                <div key={f.n}>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">{f.l} *</label>
                  <input required name={f.n} value={(form as Record<string,string>)[f.n]} onChange={handle} type={f.t} placeholder={f.p}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] focus:ring-2 focus:ring-[#00A3AD]/10 transition-all placeholder-slate-300"/>
                </div>
              ))}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Country</label>
                <select name="country" value={form.country} onChange={handle} className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] transition-all text-slate-600 appearance-none">
                  <option value="">Select country</option>
                  {['Kenya','Uganda','Tanzania','South Sudan','Nigeria','Ghana','Somalia','Ethiopia','UAE','Other'].map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full py-3 bg-[#003B5C] hover:bg-[#00A3AD] text-white font-extrabold rounded-lg text-sm transition-all shadow-sm mt-1 flex items-center justify-center gap-2">
                Next Step <ArrowRight size={15}/>
              </button>
            </motion.form>
          ):(
            <motion.form key="s2" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}
              onSubmit={(e)=>{e.preventDefault();setSent(true);}} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Treatment Needed</label>
                <select name="treatment" value={form.treatment} onChange={handle} className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] transition-all text-slate-600 appearance-none">
                  <option value="">Select treatment</option>
                  {['Cardiology / Heart','Neurology / Brain','Oncology / Cancer','Orthopedics / Joints','Organ Transplant','Fertility / IVF','Nephrology','Urology','Other'].map(t=><option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Brief Message</label>
                <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Describe your condition or questions…"
                  className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#00A3AD] transition-all placeholder-slate-300 resize-none"/>
              </div>
              <div className="flex gap-2 pt-1">
                <button type="button" onClick={()=>setStep(1)} className="flex-1 py-3 border border-slate-200 text-slate-600 font-bold rounded-lg text-sm hover:bg-slate-50 transition-all">← Back</button>
                <button type="submit" className="flex-[2] py-3 bg-[#00A3AD] hover:bg-[#003B5C] text-white font-extrabold rounded-lg text-sm transition-all shadow-sm">Submit Request</button>
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
      <RequestForm/>
      <div className="bg-[#EBF2F7] rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
        <a href="tel:+918146654185" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-all group">
          <div className="w-9 h-9 rounded-full bg-[#00A3AD] flex items-center justify-center shrink-0">
            <span className="text-[9px] font-black text-white text-center leading-tight">24/7</span>
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
            <p className="text-sm font-extrabold text-[#003B5C] group-hover:text-[#00A3AD] transition-colors">+91 81466 54185</p>
          </div>
        </a>
        <a href="https://wa.me/918146654185" target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-lg text-sm transition-all shadow-md">
          <MessageCircle size={20} className="fill-white"/> WhatsApp Us
        </a>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] px-4 pt-4 pb-2">Quick Navigation</p>
        {[
          { label:'Find a Specialist', href:'/doctors',          icon: UserCheck },
          { label:'Our Hospitals',     href:'/hospitals',        icon: Building2 },
          { label:'Book Appointment',  href:'/register',         icon: ClipboardList },
          { label:'Contact Support',   href:'/contact-support',  icon: Mail },
        ].map(({label,href,icon:Icon})=>(
          <Link key={href} href={href} className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 group border-t border-slate-100 first:border-0 transition-colors">
            <div className="flex items-center gap-3">
              <Icon size={14} className="text-[#00A3AD]"/>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-[#003B5C]">{label}</span>
            </div>
            <ChevronRight size={13} className="text-slate-300 group-hover:text-[#00A3AD] transition-colors"/>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ title, viewAllHref }: { title: string; viewAllHref?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
      <div className="relative">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#003B5C]">{title}</h2>
        <div className="absolute -bottom-[13px] left-0 w-14 h-[3px] bg-[#003B5C]"/>
      </div>
      {viewAllHref && (
        <Link href={viewAllHref} className="text-sm font-bold text-slate-500 hover:text-[#00A3AD] flex items-center gap-1 transition-all group shrink-0">
          View all <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform"/>
        </Link>
      )}
    </div>
  );
}

/* ════════════════ HERO ════════════════ */
function TreatmentsHero() {
  const stats = [
    { value: '50+', label: 'Partner Hospitals' },
    { value: '60+', label: 'Countries Served' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'Patient Support' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#003B5C] pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage:'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize:'28px 28px' }}/>
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3AD]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00E0D2]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"/>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pill */}
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A3AD]/20 border border-[#00A3AD]/30 text-[#00E0D2] text-xs font-bold uppercase tracking-widest mb-6">
            <Activity size={12}/> World-Class Medical Care
          </motion.div>

          {/* Heading */}
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Expert Treatments,<br/>
            <span className="text-[#00E0D2]">Across the Globe</span>
          </motion.h1>

          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}}
            className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            NTL CareLink connects you to internationally accredited specialists in India, Thailand, and Turkey — end-to-end, with no hidden costs.
          </motion.p>

          {/* CTA buttons */}
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.3}}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/register"
              className="px-8 py-4 bg-[#00A3AD] hover:bg-white hover:text-[#003B5C] text-white font-extrabold rounded-2xl text-sm transition-all shadow-xl shadow-[#00A3AD]/25 flex items-center gap-2 group">
              <ClipboardList size={16}/> Get a Free Quote
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <a href="tel:+918146654185"
              className="px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-2xl text-sm transition-all flex items-center gap-2">
              <Phone size={15}/> +91 81466 54185
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.4}}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {stats.map((s,i)=>(
              <div key={i} className="bg-white/5 px-4 py-5 text-center hover:bg-white/10 transition-colors">
                <p className="text-2xl font-black text-[#00E0D2]">{s.value}</p>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating hospital badge strip */}
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.55}}
          className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {allHospitals.slice(0,6).map(h=>(
            <div key={h.id} className="flex items-center gap-2 px-3.5 py-2 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm">
              <div className="w-5 h-5 rounded-full overflow-hidden relative shrink-0">
                <Image src={h.img} alt={h.name} fill className="object-cover" sizes="20px"/>
              </div>
              <span className="text-white text-[11px] font-semibold">{h.name}</span>
            </div>
          ))}
          <Link href="/hospitals" className="flex items-center gap-1.5 px-3.5 py-2 bg-[#00A3AD]/30 border border-[#00A3AD]/40 rounded-full text-[#00E0D2] text-[11px] font-bold hover:bg-[#00A3AD]/50 transition-all">
            +{allHospitals.length - 6} more <ExternalLink size={10}/>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════ MAIN PAGE ════════════════ */
export default function TreatmentsPage() {
  const [modal, setModal] = useState<string[] | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700">
      {/* ── HERO ── */}
      <TreatmentsHero/>

      {/* ── BOOKING BAR ── */}
      <div className="bg-[#003B5C] border-t border-[#00A3AD]/20">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-extrabold text-lg tracking-tight text-center sm:text-left">
            Ready to begin your treatment journey?
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:+918146654185"
              className="flex items-center gap-2.5 bg-[#00A3AD] hover:bg-[#00c8d4] rounded-full px-6 py-2.5 text-white transition-all shadow-lg text-sm font-bold">
              <Phone size={14}/> +91 81466 54185
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-8 xl:gap-12 items-start">

          {/* ═══ LEFT COLUMN ═══ */}
          <div className="space-y-12 min-w-0">

            {/* SPECIALITIES */}
            <section>
              <SectionHeading title="Specialities" viewAllHref="/treatments/all?tab=specialties"/>
              <p className="text-sm text-slate-500 mb-5 -mt-2">Click any speciality to see which partner hospitals offer it.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {specialties.map((s,i)=>(
                  <DiagnosticCard key={i} icon={s.icon} label={s.label} hospitalIds={s.hospitals} onOpen={setModal}/>
                ))}
              </div>
            </section>

            {/* PROCEDURES */}
            <section>
              <SectionHeading title="Procedures" viewAllHref="/treatments/all?tab=procedures"/>
              <p className="text-sm text-slate-500 mb-5 -mt-2">Click any procedure to see which partner hospitals perform it.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {procedures.map((p,i)=>(
                  <DiagnosticCard key={i} icon={p.icon} label={p.label} hospitalIds={p.hospitals} onOpen={setModal}/>
                ))}
              </div>
            </section>

            {/* WHY CHOOSE NTL */}
            <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
              <SectionHeading title="Why Choose NTL CareLink?"/>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {whyUs.map((w,i)=>(
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-sm transition-all">
                    <div className="w-9 h-9 rounded-lg bg-[#003B5C]/5 flex items-center justify-center shrink-0 mt-0.5">
                      <w.icon size={18} className="text-[#00A3AD]"/>
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
              <SectionHeading title="International Clinics" viewAllHref="/hospitals"/>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allHospitals.slice(0,4).map((h,i)=>(
                  <motion.button key={i} whileHover={{y:-3}} onClick={()=>setModal([h.id])}
                    className="group flex gap-4 items-center p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all cursor-pointer w-full text-left">
                    <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 relative">
                      <Image src={h.img} alt={h.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="80px"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-extrabold text-[#003B5C] text-sm truncate">{h.name}</h3>
                      <p className="text-xs text-slate-400 mb-2">{h.city}, {h.country}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <BadgeCheck size={11} className="text-[#00A3AD]"/>
                          <span className="text-[9px] font-bold text-slate-500">{h.badge}</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <Star size={10} fill="#f6ad55" stroke="none"/>
                          <span className="text-[10px] font-bold text-slate-600">{h.rating}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-[#00A3AD] shrink-0 transition-colors"/>
                  </motion.button>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/hospitals" className="inline-flex items-center gap-2 px-6 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-[#00A3AD] hover:text-[#00A3AD] transition-all">
                  View all {allHospitals.length} hospitals <ChevronRight size={14}/>
                </Link>
              </div>
            </section>

            {/* PATIENT TESTIMONIALS */}
            <section>
              <SectionHeading title="Patient Stories"/>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {testimonials.map((t,i)=>(
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_,k)=><Star key={k} size={12} fill="#f6ad55" stroke="none"/>)}
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
              {[['10,000+','Patients Served'],['50+','Partner Hospitals'],['60+','Countries Served'],['98%','Success Rate']].map(([v,l])=>(
                <div key={l}>
                  <p className="text-2xl sm:text-3xl font-black text-white">{v}</p>
                  <p className="text-[10px] font-bold text-[#00E0D2] uppercase tracking-widest mt-1">{l}</p>
                </div>
              ))}
            </section>
          </div>

          {/* ═══ RIGHT COLUMN — Sticky Sidebar ═══ */}
          <aside className="sticky top-24 hidden lg:block">
            <ContactSidebar/>
          </aside>
        </div>
      </div>

      {/* MOBILE CONTACT FORM */}
      <div className="lg:hidden container mx-auto px-4 sm:px-6 pb-10">
        <ContactSidebar/>
      </div>

      {/* FINAL CTA */}
      <section className="bg-slate-900 py-14 sm:py-20 mt-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage:'radial-gradient(circle, #00A3AD 1px, transparent 1px)',backgroundSize:'32px 32px'}}/>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">Start Your Treatment Journey</h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">Upload your medical reports for a free expert review. No obligations — just clear guidance.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="px-7 py-3.5 bg-[#00A3AD] hover:bg-white hover:text-[#003B5C] text-white font-extrabold rounded-xl transition-all shadow-lg text-sm flex items-center justify-center gap-2">
              <ClipboardList size={16}/> Get a Free Quote
            </Link>
            <Link href="/doctors" className="px-7 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm flex items-center justify-center gap-2">
              <UserCheck size={16}/> Find a Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* HOSPITAL MODAL */}
      {modal && <HospitalModal hospitalIds={modal} onClose={()=>setModal(null)}/>}
    </div>
  );
}
