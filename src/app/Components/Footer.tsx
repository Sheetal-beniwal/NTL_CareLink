'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Stethoscope, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050914] text-slate-300 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-medical-primary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 bg-medical-primary rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(0,163,173,0.4)]">
                <Stethoscope size={24} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                NTL <span className="text-medical-accent">CareLink</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Bridging the gap between global medical standards and affordable treatment options. We provide end-to-end premium healthcare journeys.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-medical-primary hover:text-white hover:shadow-[0_0_15px_rgba(0,163,173,0.5)] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-medical-primary hover:text-white hover:shadow-[0_0_15px_rgba(0,163,173,0.5)] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-medical-primary hover:text-white hover:shadow-[0_0_15px_rgba(0,163,173,0.5)] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-medical-primary hover:text-white hover:shadow-[0_0_15px_rgba(0,163,173,0.5)] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'Hospitals', 'Treatments', 'Countries', 'About Us'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : (link === 'About Us' ? '/about' : `/${link.toLowerCase().replace(' ', '-')}`)} className="hover:text-medical-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-medical-primary/50 group-hover:bg-medical-accent transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold tracking-wide uppercase text-sm">Top Services</h4>
            <ul className="space-y-3 text-sm">
              {['Medical Visa Assistance', 'Hospital Coordination', 'Full Journey Management', 'Free Medical Opinion', 'Translation & Support'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-medical-accent transition-colors text-slate-400 hover:text-slate-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold tracking-wide uppercase text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-medical-accent shrink-0 mt-0.5" />
                <span className="text-slate-400">NTL CareLink Global H.Q.<br/>Sector 62, Gurugram, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-medical-accent shrink-0" />
                <span className="text-slate-400">+91 81466 54185</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-medical-accent shrink-0" />
                <span className="text-slate-400">+91 76965 79175</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-medical-accent shrink-0" />
                <span className="text-slate-400 hover:text-medical-accent transition-colors cursor-pointer">ntlcarelinkglobal@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* CTA Banner above footer bottom */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#003B5C] to-[#00243d] border border-white/5 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white tracking-tight">Ready to start your journey?</h3>
            <p className="text-[#E0F7F9]/80 text-sm max-w-md">Join thousands of patients who have trusted us with their global healthcare needs.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
            <Link href="/register" className="px-8 py-3.5 bg-[#00A3AD] text-white rounded-xl font-bold shadow-[0_0_20px_rgba(0,163,173,0.3)] hover:shadow-[0_0_30px_rgba(0,163,173,0.5)] hover:bg-[#00929b] transition-all active:scale-95 flex items-center justify-center gap-2 group">
              Book Appointment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-3.5 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center">
              WhatsApp Us
            </button>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NTL CareLink Global. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
