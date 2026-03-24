import Hero from "@/components/Hero";
import Image from "next/image";
import { 
  Stethoscope, 
  MapPin, 
  Hospital, 
  Users, 
  ShieldCheck,
  MessageSquare,
  Activity,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation (Simplified Placeholder) */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-medical-dark flex items-center gap-2">
            <div className="w-10 h-10 bg-medical-primary rounded-xl flex items-center justify-center text-white">
              <Stethoscope size={24} />
            </div>
            NTL <span className="text-medical-primary">CareLink</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-gray-600">
            <a href="#" className="hover:text-medical-primary transition-colors">Hospitals</a>
            <a href="#" className="hover:text-medical-primary transition-colors">Countries</a>
            <a href="#" className="hover:text-medical-primary transition-colors">Treatments</a>
            <a href="#" className="hover:text-medical-primary transition-colors">About Us</a>
          </div>
          <button className="px-6 py-2.5 bg-medical-dark text-white rounded-full font-semibold hover:bg-medical-primary transition-all">
            Contact Support
          </button>
        </div>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Picture Gallery Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-light text-medical-primary font-bold text-xs uppercase tracking-widest">
                   Our Medical Excellence
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  World-Class <span className="text-medical-primary">Facilities</span> & Expert Care
                </h2>
              </div>
              <div className="flex-shrink-0">
                <p className="text-gray-500 max-w-sm text-lg italic border-l-4 border-medical-accent pl-6 py-2">
                  "Bridging the gap between global medical standards and affordable treatment options."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02]">
                <Image 
                  src="/gallery/cardio.png" 
                  alt="Cardiology" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Advanced Cardiology</h3>
                </div>
              </div>
              <div className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02]">
                <Image 
                  src="/gallery/ortho.png" 
                  alt="Orthopedics" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Orthopedics</h3>
                </div>
              </div>
              <div className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02]">
                <Image 
                  src="/gallery/wellness.png" 
                  alt="Wellness" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Wellness & Recovery</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Quick Highlights */}
        <section className="bg-medical-dark text-white py-16">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-white/10 rounded-2xl text-medical-accent">
                <MapPin size={28} />
              </div>
              <span className="text-3xl font-bold">15+</span>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Countries</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-white/10 rounded-2xl text-medical-accent">
                <Hospital size={28} />
              </div>
              <span className="text-3xl font-bold">200+</span>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Hospitals</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-white/10 rounded-2xl text-medical-accent">
                <Users size={28} />
              </div>
              <span className="text-3xl font-bold">10k+</span>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Patients Served</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-white/10 rounded-2xl text-medical-accent">
                <ShieldCheck size={28} />
              </div>
              <span className="text-3xl font-bold">100%</span>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Trust Score</p>
            </div>
          </div>
        </section>

        {/* 4. Refined Why Choose Us Section */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* Left Column: Text & Benefits */}
              <div className="flex-1 space-y-12">
                <div className="space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-primary/10 text-medical-primary font-bold text-xs uppercase tracking-widest">
                    Your Trusted Medical Partner
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Why Patients Trust <span className="text-medical-primary">NTL CareLink</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl border-l-4 border-medical-accent pl-6">
                    We collaborate with India's most recognized medical institutions, including 
                    <span className="font-bold text-medical-dark"> Apollo Hospital, Artemis Hospital, and Max Hospital</span>, 
                    to ensure our patients receive the highest standard of treatment.
                  </p>
                </div>

                {/* Benefit Cards Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Medical Travel Assistance",
                    "Full Treatment Management",
                    "Cost & Budget Planning",
                    "Translation & Patient Support",
                    "Hospital & Doctor Coordination"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-medical-primary/50 transition-colors group">
                      <div className="w-10 h-10 bg-medical-light text-medical-primary rounded-xl flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-medical-primary group-hover:text-white transition-colors">
                        0{i + 1}
                      </div>
                      <span className="font-semibold text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visuals & Contact */}
              <div className="lg:w-[450px] space-y-8">
                {/* Main Visual with Contact Overlay */}
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image 
                    src="/why-choose-us/hospital.png" 
                    alt="Professional Medical Care" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-transparent" />
                  
                  {/* Contact Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-medical-accent text-white rounded-full text-xs font-bold uppercase tracking-widest mb-2">
                       Get Information
                    </div>
                    <div className="space-y-1">
                      <p className="text-xl font-bold">+91 8146654185</p>
                      <p className="text-xl font-bold">+91 7696579175</p>
                    </div>
                    <p className="text-sm border-t border-white/20 pt-4 opacity-80">
                      ntlcarelinkglobal@gmail.com
                    </p>
                  </div>
                </div>

                {/* Secondary Feature Card */}
                <div className="p-8 bg-medical-dark text-white rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-medical-primary/20 rounded-full -mr-12 -mt-12" />
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shrink-0">
                      <Image 
                        src="/why-choose-us/patient.png" 
                        alt="Patient Care" 
                        width={80} 
                        height={80} 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Best Treatment in India</h4>
                      <p className="text-gray-400 text-sm">Recognized hospitals & world-class expertise at your service.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Health Services Section (Brochure Inspired) */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-medical-light/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl -z-10" />

          <div className="container mx-auto px-6 space-y-20">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-light text-medical-primary font-bold text-xs uppercase tracking-widest">
                Excellence in Care
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Our Comprehensive <span className="text-medical-primary">Health Services</span>
              </h2>
              <p className="text-gray-500 text-lg">
                We are always here to ensure your health is served better with world-class 
                medical assistance and end-to-end patient care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Medical Visa Assistance", 
                  desc: "Facilitating smooth visa invitations and processing for international patients.",
                  icon: <ShieldCheck className="w-8 h-8" /> 
                },
                { 
                  title: "Hospital Coordination", 
                  desc: "Strategic partner network to find the best hospitals and medical specialists in India.",
                  icon: <Hospital className="w-8 h-8" /> 
                },
                { 
                  title: "Full Journey Management", 
                  desc: "Professional handling of appointments, diagnosis, surgical bookings, and discharge.",
                  icon: <Stethoscope className="w-8 h-8" /> 
                },
                { 
                  title: "Free Medical Opinion", 
                  desc: "Online consultation with top doctors to plan your treatment before you fly.",
                  icon: <Users className="w-8 h-8" /> 
                },
                { 
                  title: "Patient Concierge", 
                  desc: "Pick-up services, local SIM cards, currency exchange, and accommodation support.",
                  icon: <MapPin className="w-8 h-8" /> 
                },
                { 
                  title: "Translation & Support", 
                  desc: "Language assistants and dedicated support staff to bridge any communication gaps.",
                  icon: <MessageSquare className="w-8 h-8" /> 
                }
              ].map((service, i) => (
                <div key={i} className="group p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-medical-primary/10 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-medical-light/50 rounded-bl-[64px] transition-transform group-hover:scale-110" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-medical-light flex items-center justify-center text-medical-primary transition-transform group-hover:scale-110 group-hover:bg-medical-primary group-hover:text-white group-hover:rotate-6">
                      {service.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-medical-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-base">
                        {service.desc}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center gap-2 text-medical-primary font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn More</span>
                      <div className="w-5 h-[2px] bg-medical-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Placeholder */}
      <footer className="bg-medical-dark text-white py-20 border-t border-white/10">
         <div className="container mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready to start your journey?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-10 py-4 bg-medical-primary rounded-full font-bold">Book Free Consultation</button>
               <button className="px-10 py-4 bg-white/10 rounded-full font-bold border border-white/10">WhatsApp Us</button>
            </div>
            <p className="text-gray-500 pt-12 border-t border-white/5">© {new Date().getFullYear()} NTL CareLink. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
}
