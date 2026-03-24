import Hero from "@/components/Hero";
import Image from "next/image";
import { 
  Stethoscope, 
  MapPin, 
  Hospital, 
  Users, 
  ShieldCheck, 
  ArrowRight 
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

        {/* 4. Why Choose Us (Simple Placeholder) */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Why Choose NTL CareLink?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We provide end-to-end support for your medical journey abroad, ensuring safety, comfort, and world-class care.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Price Comparison", desc: "Save up to 70% compared to local costs without compromising on quality." },
                { title: "Certified Hospitals", desc: "Every hospital in our network is JCI accredited and internationally recognized." },
                { title: "Full Concierge", desc: "From visa assistance to airport pickup, we handle everything for you." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-left space-y-4 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-medical-light text-medical-primary rounded-xl flex items-center justify-center font-bold text-xl">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Treatments (Placeholder) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
             <div className="flex justify-between items-end mb-12">
               <div className="space-y-4">
                 <h2 className="text-4xl font-bold text-gray-900">Top Medical Treatments</h2>
                 <p className="text-gray-600 max-w-lg">Most popular procedures requested by our patients globally.</p>
               </div>
               <button className="hidden md:flex items-center gap-2 text-medical-primary font-bold hover:underline">
                 View All Treatments <ArrowRight size={18} />
               </button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {["Cardiology", "Orthopedics", "Cosmetic Surgery", "Dental Care"].map((item, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="relative h-64 w-full bg-gray-200 rounded-2xl overflow-hidden mb-4">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-medical-primary/80 transition-colors" />
                       <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="text-xl font-bold">{item}</h4>
                          <p className="text-sm opacity-80">More than 50 procedures</p>
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
