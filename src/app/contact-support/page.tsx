'use client';

import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSupportPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us Directly",
      details: ["+91 81466 54185", "+91 76965 79175"],
      description: "Available for urgent medical coordination and queries.",
      color: "bg-blue-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      details: ["ntlcarelinkglobal@gmail.com"],
      description: "Send us your medical reports for a free expert opinion.",
      color: "bg-medical-primary"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp Chat",
      details: ["Live Chat Support"],
      description: "Instant response for quick coordination and updates.",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-12 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header section */}
            <div className="text-center space-y-4 mb-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-primary/10 text-medical-primary font-bold text-xs uppercase tracking-widest"
              >
                <ShieldCheck size={16} />
                <span>24/7 Global Support</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-medical-dark"
              >
                How can we <span className="text-medical-primary">help you?</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-500 max-w-2xl mx-auto"
              >
                Our dedicated team is ready to assist you with medical coordination, visa assistance, and hospital appointments.
              </motion.p>
            </div>

            {/* Support Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {contactMethods.map((method, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className={`w-14 h-14 ${method.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-medical-dark mb-4">{method.title}</h3>
                  <div className="space-y-1 mb-4">
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-lg font-semibold text-medical-primary">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{method.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Lower Info Section */}
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-medical-dark p-12 rounded-[3rem] text-white space-y-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-medical-primary/10 rounded-full blur-3xl" />
                <h2 className="text-3xl font-bold">Office Locations</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-medical-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Global Headquarters (India)</h4>
                      <p className="text-gray-400">Sector 62, Gurugram, Haryana - 122001</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Globe size={20} className="text-medical-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Regional Reach</h4>
                      <p className="text-gray-400">Juba (South Sudan), Nairobi (Kenya), Kampala (Uganda), Dar es Salaam (Tanzania)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-medical-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Business Hours</h4>
                      <p className="text-gray-400">Monday - Saturday: 9:00 AM - 7:00 PM (IST)<br/>Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 flex flex-col justify-center items-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <MessageSquare size={40} className="text-medical-primary" />
                </div>
                <h3 className="text-2xl font-bold text-medical-dark">Have a quick question?</h3>
                <p className="text-gray-600">Our patient coordinators are online and ready to chat with you right now.</p>
                <button className="w-full py-4 bg-medical-primary text-white rounded-2xl font-bold shadow-lg hover:bg-medical-dark transition-all flex items-center justify-center gap-3 group">
                  Message on WhatsApp
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactSupportPage;
