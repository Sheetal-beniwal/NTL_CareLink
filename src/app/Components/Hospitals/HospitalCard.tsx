import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Hospital } from '@/data/hospitals';

export default function HospitalCard({ hospital }: { hospital: Hospital }) {
  return (
    <div className="group rounded-[32px] bg-white dark:bg-slate-800 border border-gray-100 dark:border-white/5 shadow-xl hover:shadow-2xl hover:shadow-medical-primary/20 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative h-60 w-full overflow-hidden">
        <Image 
          src={hospital.mainImage} 
          alt={hospital.name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white/90">
          <MapPin size={16} className="text-medical-accent shrink-0 drop-shadow-md" />
          <span className="text-sm font-medium tracking-wide drop-shadow-md truncate">{hospital.location}</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-medical-primary transition-colors line-clamp-2">
          {hospital.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {hospital.shortDescription}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {hospital.specialties.slice(0, 3).map((spec, idx) => (
              <span key={idx} className="px-3 py-1 bg-medical-light/50 dark:bg-slate-700 text-medical-primary dark:text-medical-accent rounded-full text-[11px] font-bold uppercase tracking-wider">
                {spec}
              </span>
            ))}
            {hospital.specialties.length > 3 && (
              <span className="px-3 py-1 bg-gray-50 dark:bg-slate-700 text-gray-500 dark:text-gray-400 rounded-full text-[11px] font-bold uppercase tracking-wider">
                +{hospital.specialties.length - 3} More
              </span>
            )}
          </div>
          
          <div className="pt-4 border-t border-gray-100 dark:border-white/5">
            <Link href={`/hospitals/${hospital.id}`} className="flex items-center justify-between text-medical-primary dark:text-medical-accent font-bold hover:text-medical-dark dark:hover:text-white transition-colors">
              <span>View Details</span>
              <div className="w-8 h-8 rounded-full bg-medical-primary/10 flex items-center justify-center group-hover:bg-medical-primary group-hover:text-white transition-colors">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
