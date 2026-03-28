import React from 'react';
import HospitalCard from './HospitalCard';
import { Hospital } from '@/data/hospitals';

interface Props {
  countryName: string;
  flag: string;
  hospitals: Hospital[];
}

export default function CountrySection({ countryName, flag, hospitals }: Props) {
  if (!hospitals.length) return null;
  
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
          {countryName}
        </h2>
        <span className="text-4xl filter drop-shadow-sm">{flag}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hospitals.map(h => (
          <HospitalCard key={h.id} hospital={h} />
        ))}
      </div>
    </div>
  );
}
