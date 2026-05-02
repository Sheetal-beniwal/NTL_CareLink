import { HeartPulse, Brain, Dna, Bone, Baby, LifeBuoy, Syringe, Scissors, Zap } from 'lucide-react';

export const specialties = [
  { 
    id: 'cardiology',
    icon: HeartPulse, 
    label: 'Cardiac Sciences', 
    hospitals: ['apollo', 'max', 'medanta', 'fortis', 'bumrungrad'],
    description: 'World-class heart care including bypass surgery, valve replacement, and pediatric cardiology.',
    faqs: [
      { q: 'What is the success rate of heart surgery in India?', a: 'Top Indian hospitals report success rates of 98-99% for bypass surgeries, matching global standards.' },
      { q: 'How long do I need to stay in India for heart surgery?', a: 'Typically 2-3 weeks, depending on the complexity of the procedure and recovery speed.' }
    ]
  },
  { 
    id: 'oncology',
    icon: Dna, 
    label: 'Cancer Care / Oncology', 
    hospitals: ['apollo', 'max', 'medanta', 'artemis', 'memorial'],
    description: 'Comprehensive cancer treatment using advanced radiation therapy, robotic surgery, and immunotherapy.',
    faqs: [
      { q: 'Which is the best hospital for cancer treatment in India?', a: 'Max Healthcare and Apollo Hospitals are world-renowned for their comprehensive cancer care programs.' }
    ]
  },
  { 
    id: 'kidney-transplant',
    icon: LifeBuoy, 
    label: 'Kidney Transplant', 
    hospitals: ['medanta', 'max', 'fortis'],
    description: 'Expert kidney transplant services with high success rates and comprehensive post-operative care.',
    faqs: [
        { q: 'What is the cost of a kidney transplant in India?', a: 'Costs are significantly lower than in Western countries, typically ranging from $12,000 to $18,000.' }
    ]
  },
  { 
    id: 'liver-transplant',
    icon: LifeBuoy, // Reusing icon or should find another
    label: 'Liver Transplant & Biliary', 
    hospitals: ['medanta', 'max', 'memorial'],
    description: 'Leading specialists for liver transplantation and complex biliary surgeries.',
    faqs: []
  },
  { 
    id: 'neurology',
    icon: Brain, 
    label: 'Neurology & Neurosurgery', 
    hospitals: ['apollo', 'artemis', 'memorial', 'max'],
    description: 'Advanced brain and spine surgery using minimally invasive techniques and neuro-navigation.',
    faqs: []
  },
  { 
    id: 'orthopedics',
    icon: Bone, 
    label: 'Robotic Joint Replacement', 
    hospitals: ['apollo', 'artemis', 'fortis', 'bumrungrad'],
    description: 'State-of-the-art robotic systems for knee and hip replacements with faster recovery times.',
    faqs: []
  },
  { 
    id: 'urology',
    icon: Syringe, 
    label: 'Urology', 
    hospitals: ['apollo', 'max', 'fortis'],
    description: 'Expert care for kidney stones, prostate issues, and complex urological conditions.',
    faqs: []
  }
];

export const procedures = [
  { id: 'tetralogy-of-fallot', icon: HeartPulse, label: 'Tetralogy of Fallot', hospitals: ['apollo', 'max', 'medanta'] },
  { id: 'stem-cell-transplant', icon: Dna, label: 'Allogeneic Stem Cell Transplant', hospitals: ['max', 'medanta', 'fortis'] },
  { id: 'esophageal-cancer', icon: Dna, label: 'Esophageal Cancer Treatment', hospitals: ['apollo', 'memorial', 'medanta'] },
  { id: 'rhinoplasty', icon: Scissors, label: 'Rhinoplasty / Nose Reshaping', hospitals: ['medicana', 'memorial'] },
];
