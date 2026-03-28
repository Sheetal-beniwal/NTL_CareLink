'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Send, 
  CheckCircle2,
  Stethoscope,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-medical-light flex items-center justify-center px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center space-y-6"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold text-medical-dark">Appointment Request Received!</h2>
          <p className="text-gray-600 leading-relaxed">
            Thank you for booking with NTL CareLink. Our team will review your details and contact you shortly to confirm your appointment and assist with your healthcare journey.
          </p>
          <Link href="/">
            <button className="w-full py-4 bg-medical-primary text-white rounded-xl font-bold hover:bg-medical-dark transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg">
              Return to Home
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-medical-dark/5 pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Info & Branding */}
          <div className="space-y-8 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-primary/10 border border-medical-primary/20 text-medical-primary font-bold text-sm uppercase tracking-wider">
                <Stethoscope size={16} />
                <span>Book Your Appointment</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-medical-dark leading-tight">
                Your Path to <span className="text-medical-primary">Global Care</span> Starts Here
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Connect with the world's leading medical specialists. Fill out the form, and our consultants will handle everything—from hospital selection to travel arrangements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid gap-4"
            >
              {[
                { title: "24/7 Priority Support", desc: "Always available to answer your queries." },
                { title: "Personalized Case Manager", desc: "A dedicated expert assigned to your care." },
                { title: "Confidentiality Guaranteed", desc: "Your medical data is handled with 100% security." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-medical-light text-medical-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-medical-dark flex items-center gap-2">
                    <User size={16} className="text-medical-primary" />
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-primary/20 focus:border-medical-primary outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-medical-dark flex items-center gap-2">
                    <Mail size={16} className="text-medical-primary" />
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-primary/20 focus:border-medical-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-medical-dark flex items-center gap-2">
                    <Phone size={16} className="text-medical-primary" />
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-primary/20 focus:border-medical-primary outline-none transition-all"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-medical-dark flex items-center gap-2">
                    <MapPin size={16} className="text-medical-primary" />
                    Your Location (City, Country)
                  </label>
                  <input
                    required
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="London, UK"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-primary/20 focus:border-medical-primary outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-medical-dark flex items-center gap-2">
                  <Stethoscope size={16} className="text-medical-primary" />
                  Service/Treatment Interested In
                </label>
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-primary/20 focus:border-medical-primary outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a treatment</option>
                  <option value="dental">Dental Implants / Veneers</option>
                  <option value="cardiac">Cardiac Surgery</option>
                  <option value="orthopedic">Orthopedic Restoration</option>
                  <option value="cosmetic">Cosmetic Surgery</option>
                  <option value="fertility">Fertility Treatment (IVF)</option>
                  <option value="checkup">Full Health Checkup</option>
                  <option value="other">Other / General Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-medical-dark flex items-center gap-2">
                  <FileText size={16} className="text-medical-primary" />
                  Additional Details / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your medical history or specific requirements..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-primary/20 focus:border-medical-primary outline-none transition-all resize-none"
                />
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full py-4 bg-medical-primary hover:bg-medical-dark text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-medical-primary/10 group active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Book Appointment</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
