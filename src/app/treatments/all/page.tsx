'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse, Brain, Dna, Bone, Baby, LifeBuoy,
  Eye, Syringe, Scissors, Activity, BadgeCheck,
  ChevronRight, Building2, ArrowLeft, X, MapPin,
  Star, ClipboardList, ExternalLink, Zap, ShieldCheck,
  Search, Filter
} from 'lucide-react';

/* ══════════════════════════════════════
   SHARED DATA
══════════════════════════════════════ */
const allHospitals = [
  { id:'apollo',     name:'Apollo Hospitals',            country:'India',   city:'Delhi, Mumbai, Chennai', badge:'JCI + NABH', rating:4.8, beds:'10,000+', founded:'1983', img:'/hospital_images/Apollo hospital.jpeg',           img2:'/hospital_images/apollo hospiral image 2.jpeg',   specialties:['Cardiac Sciences','Neurology','Oncology','Orthopaedics','Robotic Surgery'],           desc:"Asia's largest integrated healthcare group with premier expertise across specialties." },
  { id:'max',        name:'Max Healthcare',               country:'India',   city:'Delhi NCR',              badge:'JCI + NABH', rating:4.9, beds:'3,400+',  founded:'2000', img:'/hospital_images/max hospital image 1.jpeg',        img2:'/hospital_images/max hospital image 1.jpeg',      specialties:['Cancer Care','Organ Transplant','Neurosciences','Cardiac Surgery'],                    desc:"North India's leading hospital network, renowned for complex organ transplants and cancer care." },
  { id:'medanta',    name:'Medanta – The Medicity',       country:'India',   city:'Gurugram, Lucknow',      badge:'JCI + NABH', rating:4.8, beds:'1,600+',  founded:'2009', img:'/hospital_images/medanta hospital.jpeg',            img2:'/hospital_images/medanta hospital image 2.jpeg',  specialties:['Kidney Transplant','Liver Transplant','Cardiac Sciences','Orthopaedics'],              desc:"One of India's largest multi-specialty hospitals, led by globally recognised specialists." },
  { id:'artemis',    name:'Artemis Hospital',             country:'India',   city:'Gurugram',               badge:'JCI + NABH', rating:4.7, beds:'400+',    founded:'2007', img:'/hospital_images/Artemis hospital.jpeg',            img2:'/hospital_images/Artemis hospital image 2.jpeg',  specialties:['Spinal Surgery','Neurology','Cancer Care','Robotic Surgery'],                          desc:"Pioneer in robotic and minimally invasive surgery with state-of-the-art infrastructure." },
  { id:'fortis',     name:'Fortis Healthcare',            country:'India',   city:'Pan-India',              badge:'JCI + NABH', rating:4.7, beds:'4,000+',  founded:'2001', img:'/hospital_images/Fortis hospital image 1.jpeg',     img2:'/hospital_images/fortis hospiral image 2.jpeg',   specialties:['Orthopaedics','Cardiac Sciences','Cancer Care','Nephrology'],                          desc:"Pan-India network known for consistent clinical quality and patient-friendly services." },
  { id:'bumrungrad', name:'Bumrungrad International',     country:'Thailand',city:'Bangkok',               badge:'JCI',        rating:4.9, beds:'580+',    founded:'1980', img:'/hospital_images/Bumrungrad Hospital.jpeg',         img2:'/hospital_images/Bumrungrad Hospital image 2.jpeg',specialties:['Fertility / IVF','Diabetes Management','Cardiac Sciences','Orthopaedics'],             desc:"Southeast Asia's most internationally acclaimed hospital, treating 1.1M+ patients yearly." },
  { id:'medicana',   name:'Medicana Health Group',        country:'Turkey',  city:'Istanbul, Ankara',       badge:'JCI',        rating:4.6, beds:'1,200+',  founded:'1992', img:'/hospital_images/medicana hospital images.jpeg',    img2:'/hospital_images/medicana hospital images.jpeg',  specialties:['Hair Transplant','Bariatric Surgery','Eye Surgery','Cosmetic Surgery'],                desc:"Turkey's leading private hospital group offering world-class care at competitive costs." },
  { id:'memorial',   name:'Memorial Healthcare',          country:'Turkey',  city:'Istanbul',               badge:'JCI',        rating:4.7, beds:'800+',    founded:'2000', img:'/hospital_images/memorial hospital .jpeg',          img2:'/hospital_images/memorial hospital image 2.jpeg', specialties:['Oncology','Neurology','Liver Transplant','Gynaecology'],                               desc:"Internationally recognised hospital for excellence in oncology and transplant surgery." },
];

const specialties = [
  { icon:HeartPulse,  label:'Cardiac Sciences',            category:'Cardiology',   hospitals:['apollo','max','medanta','fortis','bumrungrad'], description:'Comprehensive cardiac care including bypass surgery, valve replacement, angioplasty, and heart failure management.' },
  { icon:Dna,         label:'Cancer Care / Oncology',      category:'Oncology',     hospitals:['apollo','max','medanta','artemis','memorial'],  description:'Advanced oncology with chemotherapy, radiation, immunotherapy, targeted therapy, and surgical oncology.' },
  { icon:LifeBuoy,    label:'Kidney Transplant',           category:'Transplant',   hospitals:['medanta','max','fortis'],                       description:'Living and deceased donor kidney transplants with expert nephrology and post-transplant care.' },
  { icon:ShieldCheck, label:'Liver Transplant & Biliary',  category:'Transplant',   hospitals:['medanta','max','memorial'],                     description:'Living donor liver transplants, biliary reconstruction, and hepatology consultations.' },
  { icon:Activity,    label:'Nephrology',                  category:'Nephrology',   hospitals:['apollo','fortis','medanta'],                    description:'Comprehensive kidney disease management, dialysis, and preventive nephrology services.' },
  { icon:Bone,        label:'Robotic Joint Replacement',   category:'Orthopaedics', hospitals:['apollo','artemis','fortis','bumrungrad'],       description:'Robotic-assisted knee and hip replacements with faster recovery and superior precision.' },
  { icon:Syringe,     label:'Urology',                     category:'Urology',      hospitals:['apollo','max','fortis'],                        description:'Minimally invasive urology including prostate, kidney stone, and bladder disorder treatment.' },
  { icon:Brain,       label:'Neurology & Neurosurgery',    category:'Neurology',    hospitals:['apollo','artemis','memorial','max'],            description:'Specialist neurological care for stroke, epilepsy, Parkinson's, brain tumours, and spine disorders.' },
  { icon:Baby,        label:'Paediatric Care',             category:'Paediatrics',  hospitals:['apollo','max','medanta'],                       description:'Expert paediatric surgery, neonatology, and child development services.' },
  { icon:Eye,         label:'Ophthalmology',               category:'Eye Care',     hospitals:['apollo','medicana'],                           description:'Advanced eye care — LASIK, cataract surgery, retinal treatments, and corneal transplants.' },
  { icon:Scissors,    label:'Bariatric Surgery',           category:'Bariatric',    hospitals:['medicana','memorial','bumrungrad'],             description:'Weight loss surgery (gastric sleeve, bypass) with comprehensive dietary and psychological support.' },
  { icon:Zap,         label:'Fertility / IVF',             category:'Fertility',    hospitals:['bumrungrad','apollo'],                         description:'Assisted reproduction — IVF, IUI, egg freezing, and fertility preservation programs.' },
];

const procedures = [
  { icon:HeartPulse,  label:'Tetralogy of Fallot',                        category:'Cardiac',     hospitals:['apollo','max','medanta'],    description:'Corrective open-heart surgery for this congenital heart defect, restoring normal blood flow.' },
  { icon:Dna,         label:'Allogeneic Stem Cell Transplant',             category:'Oncology',    hospitals:['max','medanta','fortis'],    description:'Donor-matched stem cell transplant for blood cancers and bone marrow failure syndromes.' },
  { icon:Dna,         label:'Esophageal Cancer Treatment',                 category:'Oncology',    hospitals:['apollo','memorial','medanta'],description:'Multimodal treatment combining surgery, chemotherapy, and targeted radiation for esophageal cancers.' },
  { icon:Scissors,    label:'Rhinoplasty / Nose Reshaping',                category:'Cosmetic',    hospitals:['medicana','memorial'],       description:'Functional and aesthetic nose reshaping by board-certified plastic surgeons in Turkey.' },
  { icon:Dna,         label:'Autologous Stem Cell Transplant – Lymphoma',  category:'Oncology',    hospitals:['max','apollo','medanta'],    description:'Patient\'s own stem cells harvested, stored, and reinfused following intensive chemotherapy.' },
  { icon:Baby,        label:'Uterine Cancer Surgery',                      category:'Gynaecology', hospitals:['apollo','memorial','fortis'],description:'Minimally invasive robotic hysterectomy and lymph node dissection for uterine malignancies.' },
  { icon:Zap,         label:'Novalis Tx Radiosurgery',                     category:'Neurology',   hospitals:['artemis','apollo'],          description:'Stereotactic radiosurgery delivering precise high-dose radiation to brain tumours non-invasively.' },
  { icon:HeartPulse,  label:'Robotic Heart Surgery',                       category:'Cardiac',     hospitals:['apollo','max','artemis'],    description:'Minimally invasive robotic-assisted mitral valve repair and CABG with smaller incisions.' },
  { icon:Bone,        label:'Spinal Fusion Surgery',                       category:'Spine',       hospitals:['artemis','apollo','fortis'], description:'Vertebral fusion to correct instability, degenerative disc disease, and scoliosis.' },
  { icon:Eye,         label:'LASIK Eye Correction',                        category:'Eye Care',    hospitals:['medicana','apollo'],         description:'Bladeless LASIK using femtosecond laser for permanent vision correction with rapid recovery.' },
  { icon:Activity,    label:'Peritoneal Dialysis Programme',               category:'Nephrology',  hospitals:['medanta','fortis'],          description:'Home-compatible dialysis programme managed in partnership with leading nephrology centres.' },
  { icon:Brain,       label:'Deep Brain Stimulation',                      category:'Neurology',   hospitals:['apollo','artemis'],          description:'Neurosurgical implant of electrodes to manage Parkinson\'s tremor and movement disorders.' },
];

const categories = ['All', ...Array.from(new Set([
  ...specialties.map(s => s.category),
  ...procedures.map(p => p.category),
]))];

/* ══════════════════════════════════════
   HOSPITAL MODAL (shared)
══════════════════════════════════════ */
function HospitalModal({ hospitalIds, onClose }: { hospitalIds: string[]; onClose: () => void }) {
  const matched = allHospitals.filter(h => hospitalIds.includes(h.id));
  const [selected, setSelected] = useState(matched[0]);
  return (
    <AnimatePresence>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
        className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
        <motion.div initial={{opacity:0,scale:0.92,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.92,y:20}}
          transition={{type:'spring',damping:25,stiffness:300}}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={e=>e.stopPropagation()}>
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#003B5C] shrink-0">
            <div>
              <p className="text-[10px] font-bold text-[#00E0D2] uppercase tracking-widest mb-0.5">NTL Partner Hospitals</p>
              <h3 className="text-white font-extrabold text-lg">Available Treatment Centres</h3>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
              <X size={18} className="text-white"/>
            </button>
          </div>
          <div className="flex flex-1 overflow-hidden">
            <div className="w-48 shrink-0 border-r border-gray-100 overflow-y-auto bg-slate-50">
              {matched.map(h=>(
                <button key={h.id} onClick={()=>setSelected(h)}
                  className={`w-full text-left px-4 py-3.5 border-b border-gray-100 transition-all ${selected.id===h.id?'bg-white border-l-[3px] border-l-[#00A3AD]':'hover:bg-white'}`}>
                  <p className={`text-[13px] font-bold leading-snug ${selected.id===h.id?'text-[#003B5C]':'text-slate-600'}`}>{h.name}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{h.country}</p>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={selected.id} initial={{opacity:0,x:10}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-10}} transition={{duration:0.2}} className="flex-1 overflow-y-auto">
                <div className="relative h-44 shrink-0">
                  <Image src={selected.img} alt={selected.name} fill className="object-cover" sizes="600px"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-white font-extrabold text-xl leading-tight">{selected.name}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin size={12} className="text-[#00E0D2]"/>
                        <span className="text-[#00E0D2] text-xs font-semibold">{selected.city}, {selected.country}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                      <Star size={13} fill="#f6ad55" stroke="none"/>
                      <span className="text-white text-sm font-black">{selected.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{selected.desc}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[{label:'Beds',value:selected.beds},{label:'Since',value:selected.founded},{label:'Accreditation',value:selected.badge}].map(s=>(
                      <div key={s.label} className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                        <p className="text-[#003B5C] font-extrabold text-sm">{s.value}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider font-semibold">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Key Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.specialties.map(sp=>(
                        <span key={sp} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#00A3AD]/10 text-[#003B5C] text-[11px] font-bold">
                          <BadgeCheck size={10} className="text-[#00A3AD]"/>{sp}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Link href="/register" onClick={onClose}
                      className="flex-1 py-3 bg-[#003B5C] hover:bg-[#00A3AD] text-white font-extrabold rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
                      <ClipboardList size={15}/> Get Free Quote
                    </Link>
                    <Link href="/hospitals" onClick={onClose}
                      className="flex items-center gap-1.5 px-4 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-[#00A3AD] hover:text-[#00A3AD] transition-all">
                      <ExternalLink size={14}/> All Hospitals
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

/* ══════════════════════════════════════
   LARGE CARD
══════════════════════════════════════ */
function LargeCard({ icon: Icon, label, category, description, hospitalIds, onOpen }: {
  icon: React.ElementType; label: string; category: string; description: string; hospitalIds: string[]; onOpen: (ids: string[]) => void;
}) {
  const hospitalNames = allHospitals.filter(h => hospitalIds.includes(h.id));
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#00A3AD]/40 transition-all group flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-[#003B5C]/5 group-hover:bg-[#00A3AD]/10 flex items-center justify-center transition-colors shrink-0">
          <Icon size={24} className="text-[#003B5C] group-hover:text-[#00A3AD] transition-colors" strokeWidth={1.3}/>
        </div>
        <span className="text-[10px] font-black text-[#00A3AD] bg-[#00A3AD]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">{category}</span>
      </div>
      <h3 className="font-extrabold text-[#003B5C] text-base leading-snug mb-2">{label}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{description}</p>

      {/* Hospital mini-cards */}
      <div className="space-y-2 mb-5">
        {hospitalNames.slice(0,3).map(h=>(
          <div key={h.id} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
            <div className="w-8 h-8 rounded-lg overflow-hidden relative shrink-0">
              <Image src={h.img} alt={h.name} fill className="object-cover" sizes="32px"/>
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-bold text-[#003B5C] truncate">{h.name}</p>
              <p className="text-[10px] text-slate-400">{h.country} · {h.badge}</p>
            </div>
            <div className="flex items-center gap-0.5 ml-auto shrink-0">
              <Star size={9} fill="#f6ad55" stroke="none"/>
              <span className="text-[10px] font-bold text-slate-500">{h.rating}</span>
            </div>
          </div>
        ))}
        {hospitalNames.length > 3 && (
          <p className="text-[11px] text-slate-400 font-semibold text-center">+{hospitalNames.length - 3} more hospitals</p>
        )}
      </div>

      <button
        onClick={() => onOpen(hospitalIds)}
        className="w-full py-2.5 bg-[#003B5C] hover:bg-[#00A3AD] text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 group/btn"
      >
        <Building2 size={14}/> View Hospitals
        <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform"/>
      </button>
    </motion.div>
  );
}

/* ══════════════════════════════════════
   PAGE INNER (uses searchParams)
══════════════════════════════════════ */
function AllTreatmentsInner() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'procedures' ? 'procedures' : 'specialties';

  const [tab, setTab] = useState<'specialties'|'procedures'>(initialTab);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState<string[] | null>(null);

  const items = tab === 'specialties' ? specialties : procedures;
  const filtered = items.filter(item => {
    const matchCat = categoryFilter === 'All' || item.category === categoryFilter;
    const matchSearch = item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const tabCategories = ['All', ...Array.from(new Set(items.map(i => i.category)))];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#003B5C] pt-28 pb-16">
        <div className="container mx-auto px-6">
          <Link href="/treatments" className="inline-flex items-center gap-2 text-[#00E0D2] text-sm font-bold mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft size={16}/> Back to Treatments
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">All Specialities & Procedures</h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Click any card to see which NTL CareLink partner hospitals perform that treatment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Controls */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Tab switcher */}
          <div className="flex bg-slate-100 rounded-xl p-1 shrink-0">
            {(['specialties','procedures'] as const).map(t=>(
              <button key={t} onClick={()=>{setTab(t);setCategoryFilter('All');setSearch('');}}
                className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${tab===t?'bg-white text-[#003B5C] shadow-sm':'text-slate-500 hover:text-slate-700'}`}>
                {t}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 w-full">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search treatments…"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#00A3AD] transition-all"/>
          </div>

          <div className="flex items-center gap-1 text-xs text-slate-400 font-semibold shrink-0">
            <Filter size={13}/> {filtered.length} results
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabCategories.map(cat=>(
            <button key={cat} onClick={()=>setCategoryFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${cat===categoryFilter?'bg-[#003B5C] text-white shadow':'bg-white border border-slate-200 text-slate-600 hover:border-[#00A3AD] hover:text-[#00A3AD]'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item, i) => (
              <LargeCard key={item.label} icon={item.icon} label={item.label} category={item.category}
                description={item.description} hospitalIds={item.hospitals} onOpen={setModal}/>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg font-semibold">No results for "{search}"</p>
            <button onClick={()=>{setSearch('');setCategoryFilter('All');}} className="mt-4 text-[#00A3AD] font-bold text-sm hover:underline">Clear filters</button>
          </div>
        )}
      </div>

      {modal && <HospitalModal hospitalIds={modal} onClose={()=>setModal(null)}/>}
    </div>
  );
}

export default function AllTreatmentsPage() {
  return (
    <Suspense>
      <AllTreatmentsInner/>
    </Suspense>
  );
}
