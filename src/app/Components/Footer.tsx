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
              {['Home', 'Hospitals', 'Treatments', 'Doctors', 'About Us'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : (link === 'About Us' ? '/about-us' : `/${link.toLowerCase().replace(' ', '-')}`)} className="hover:text-medical-accent transition-colors flex items-center gap-2 group">
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
                  <Link href="/treatments" className="hover:text-medical-accent transition-colors text-slate-400 hover:text-slate-200">
                    {service}
                  </Link>
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
            <a 
              href="https://wa.me/918146654185" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
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
