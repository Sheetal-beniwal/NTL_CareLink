'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, User, Mail, Phone, Stethoscope, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarForm = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  
  // Auto-minimize on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="tab"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={() => setIsOpen(true)}
            className="bg-medical-primary text-white py-4 md:py-6 px-2 md:px-3 rounded-l-xl md:rounded-l-2xl shadow-2xl flex flex-col items-center gap-3 md:gap-4 hover:bg-medical-dark transition-all group z-[100]"
          >
            <span className="[writing-mode:vertical-lr] rotate-180 font-bold tracking-widest text-[10px] md:text-sm uppercase">
              Book Appointment
            </span>
            <ChevronRight size={16} className="rotate-180 group-hover:scale-125 transition-transform hidden md:block" />
            <ChevronRight size={14} className="rotate-180 group-hover:scale-125 transition-transform md:hidden" />
          </motion.button>
        ) : (
          <motion.div
            key="sidebar"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-[280px] md:w-[380px] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] rounded-l-2xl md:rounded-l-3xl border-l border-gray-100 relative z-[101] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-medical-dark p-4 md:p-6 text-white relative">
              {/* Left Edge Minimize Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-1/2 -left-3 -translate-y-1/2 w-8 h-8 bg-medical-primary text-white rounded-full flex items-center justify-center shadow-xl hover:bg-medical-dark transition-all border-4 border-white z-[110]"
                title="Minimize"
              >
                <ChevronRight size={18} />
              </button>

              <div className="flex items-center gap-3 mb-1 md:mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-medical-primary rounded-lg md:rounded-xl flex items-center justify-center text-white">
                  <Calendar size={20} className="md:hidden" />
                  <Calendar size={24} className="hidden md:block" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg leading-tight text-white">Book Appointment</h3>
                  <p className="text-[10px] md:text-xs text-medical-accent font-medium uppercase tracking-wider">Fast & Free Consultation</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-4 md:p-6">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Clock size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-medical-dark">Thank You!</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Your appointment request has been received. Our team will contact you shortly.</p>
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
                        className="w-full pl-9 pr-3 py-2.5 md:pl-10 md:pr-4 md:py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/5 transition-all text-[13px] md:text-sm"
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
                        className="w-full pl-9 pr-3 py-2.5 md:pl-10 md:pr-4 md:py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/5 transition-all text-[13px] md:text-sm"
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
                        className="w-full pl-9 pr-3 py-2.5 md:pl-10 md:pr-4 md:py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/5 transition-all text-[13px] md:text-sm"
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
                        className="w-full pl-9 pr-4 py-2.5 md:pl-10 md:pr-4 md:py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-medical-primary focus:ring-4 focus:ring-medical-primary/5 transition-all text-[13px] md:text-sm appearance-none cursor-pointer"
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
                    className="w-full py-3 md:py-4 bg-medical-primary hover:bg-medical-dark text-white rounded-xl font-bold transition-all shadow-lg shadow-medical-primary/20 active:scale-95 text-[13px] md:text-sm uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Book Appointment</span>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <Link 
                      href="/register" 
                      className="text-xs font-semibold text-medical-primary hover:text-medical-dark transition-colors flex items-center justify-center gap-1 group"
                    >
                      Need detailed booking? 
                      <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </form>
              )}
            </div>

            {/* Privacy Note */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 text-center rounded-bl-3xl">
             Your information is secure and will only be used for healthcare consulting.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        body.mobile-menu-open .fixed.right-0.top-1\/2 {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default SidebarForm;
