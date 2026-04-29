'use client';

import * as Icons from 'lucide-react';

const TreatmentsSection = ({ data }: { data?: any }) => {
  const content = data || {
    badge: 'Clinical Excellence',
    titleLine1: 'Advanced Treatments',
    titleLine2: '& Specialties',
    subtitle: 'Comprehensive medical care delivered by internationally accredited specialists across a wide range of clinical disciplines.',
    treatments: [
      { name: 'Cardiology & Heart Surgery', desc: 'Bypass, Valve repair, Angioplasty, and Pediatric Cardiology.', icon: 'HeartPulse' },
      { name: 'Oncology & Cancer Care', desc: 'Chemotherapy, Radiation, Immunotherapy, and Robotic Surgery.', icon: 'Brain' }, // Actually Oncology icon should be different maybe but keeping whatever was there
      { name: 'Orthopedics & Joint', desc: 'Knee/Hip replacement, Spine surgery, and Sports medicine.', icon: 'Activity' },
      { name: 'Neurology & Neurosurgery', desc: 'Brain tumors, Epilepsy, Stroke management, and Spinal disorders.', icon: 'Brain' },
      { name: 'Organ Transplant', desc: 'Liver, Kidney, Heart, and Bone Marrow transplants.', icon: 'Activity' },
      { name: 'Fertility & IVF', desc: 'Advanced reproductive technologies and genetic testing.', icon: 'Users' }
    ]
  };

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.Activity;
    return <IconComponent size={24} className="text-medical-primary" />;
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-primary/10 text-medical-primary font-bold text-xs uppercase tracking-widest mb-4">
             {content.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.titleLine1} <span className="text-medical-primary">{content.titleLine2}</span>
          </h2>
          <p className="text-gray-500 text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {(content.treatments || []).map((item: any, idx: number) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-medical-light/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-medical-light transition-all">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-medical-primary transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              
              <div className="flex items-center text-medical-primary font-bold text-sm">
                <span className="group-hover:mr-2 transition-all">View Details</span>
                <Icons.ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white border-2 border-gray-100 hover:border-medical-primary text-gray-900 font-bold rounded-2xl transition-all hover:shadow-lg flex items-center gap-2 mx-auto group">
            View All Specialties
            <Icons.ArrowRight size={18} className="text-medical-primary group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
