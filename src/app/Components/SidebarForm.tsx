'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, User, Mail, Phone, Stethoscope, Award } from 'lucide-react';
import Link from 'next/link';

const SidebarForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', service: '' });
        setTimeout(() => {
          setIsSubmitted(false);
          setIsOpen(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex items-start">
      {/* Vertical Tab/Handle */}
      {!isOpen && (
        <motion.button
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          onClick={() => setIsOpen(true)}
          className="bg-medical-primary text-white py-6 px-3 rounded-l-2xl shadow-2xl flex flex-col items-center gap-4 hover:bg-medical-dark transition-all group"
        >
          <span className="[writing-mode:vertical-lr] rotate-180 font-bold tracking-widest text-sm uppercase">
            Register Now
          </span>
          <ChevronRight size={20} className="rotate-180 group-hover:scale-125 transition-transform" />
        </motion.button>
      )}

      {/* Main Form Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="w-[320px] md:w-[380px] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] rounded-l-3xl border-l border-gray-100 overflow-hidden relative"
          >
            {/* Header */}
            <div className="bg-medical-dark p-6 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-medical-primary rounded-xl flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight text-white">Admissions Open</h3>
                  <p className="text-xs text-medical-accent font-medium uppercase tracking-wider">Session 2026-27</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Award size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-medical-dark">Thank You!</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Your registration has been received. Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    {/* Name */}
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-medical-primary transition-colors" size={18} />
                      <input 
                        required
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name*"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/5 transition-all text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-medical-primary transition-colors" size={18} />
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address*"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/5 transition-all text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative group">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-medical-primary transition-colors" size={18} />
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number*"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/5 transition-all text-sm"
                      />
                    </div>

                    {/* Treatment Selection */}
                    <div className="relative group">
                      <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-medical-primary transition-colors" size={18} />
                      <select 
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/5 transition-all text-sm appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Treatment*</option>
                        <option value="dental">Dental Implants</option>
                        <option value="cardiac">Cardiac Surgery</option>
                        <option value="ortho">Orthopedic</option>
                        <option value="cosmetic">Cosmetic</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-4 bg-medical-primary hover:bg-medical-dark text-white rounded-xl font-bold transition-all shadow-lg shadow-medical-primary/20 active:scale-95 text-sm uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Quick Register</span>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <Link 
                      href="/register" 
                      className="text-xs font-semibold text-medical-primary hover:text-medical-dark transition-colors flex items-center justify-center gap-1 group"
                    >
                      Need detailed registration? 
                      <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </form>
              )}
            </div>

            {/* Privacy Note */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 text-center">
              Your information is secure and will only be used for healthcare consulting.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarForm;
