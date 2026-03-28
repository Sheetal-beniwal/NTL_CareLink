'use client';

import React from 'react';
import { 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  Plus, 
  Microscope, 
  Dna, 
  Pill, 
  Bone
} from 'lucide-react';

interface FloatingElementProps {
  Icon: any;
  className?: string;
  size?: number;
  animation?: 'animate-float' | 'animate-float-slow';
  opacity?: number;
}

const FloatingElement = ({ Icon, className, size = 60, animation = 'animate-float', opacity = 0.05 }: FloatingElementProps) => (
  <div className={`absolute pointer-events-none overflow-hidden ${animation} ${className}`} style={{ opacity }}>
    <Icon size={size} className="text-medical-primary dark:text-medical-accent" />
  </div>
);

const FloatingMedicalElements = ({ density = 'medium' }: { density?: 'low' | 'medium' | 'high' }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Essential Minimal Elements */}
      <FloatingElement 
        Icon={Stethoscope} 
        size={140} 
        className="top-[10%] right-[10%]" 
        animation="animate-float" 
      />
      <FloatingElement 
        Icon={Activity} 
        size={110} 
        className="bottom-[15%] left-[8%]" 
        animation="animate-float-slow" 
      />

      {/* Medium adds a bit more character */}
      {(density === 'medium' || density === 'high') && (
        <>
          <FloatingElement 
            Icon={HeartPulse} 
            size={120} 
            className="top-[45%] left-[5%]" 
            animation="animate-float" 
            opacity={0.04}
          />
          <FloatingElement 
            Icon={Plus} 
            size={70} 
            className="top-[30%] right-[25%]" 
            animation="animate-float-slow" 
            opacity={0.03}
          />
        </>
      )}
      
      {/* High remains very subtle but adds complexity */}
      {density === 'high' && (
        <>
          <FloatingElement Icon={Dna} size={90} className="bottom-[10%] right-[15%]" animation="animate-float" opacity={0.02} />
          <FloatingElement Icon={Microscope} size={80} className="top-[60%] right-[12%]" animation="animate-float-slow" opacity={0.02} />
        </>
      )}
    </div>
  );
};

export default FloatingMedicalElements;
