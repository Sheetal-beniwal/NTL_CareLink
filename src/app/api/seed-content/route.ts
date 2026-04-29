import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import SiteContent from '@/models/SiteContent';

const initialContent = [
  // HOME -> HERO
  {
    pageId: 'home',
    sectionId: 'hero',
    content: {
      badge: 'Trusted by 10,000+ Global Patients',
      titleLine1: 'Affordable World-Class',
      titleLine2: 'Treatment Abroad.',
      subtitle: 'From Turkey to Thailand — we connect you with the world\'s best hospitals, top-tier surgeons, and 5-star recovery resorts. Save up to 80% on medical costs without compromising on quality.',
      desktopImage: '/hero-bg-home.png',
      mobileImage: '/hero-bg-home.png',
      services: [
        { title: 'Cardiac Care', description: 'Advanced Heart Treatments', icon: 'Heart', url: '/treatments/cardiology' },
        { title: 'Neurology', description: 'Brain & Spine Solutions', icon: 'Brain', url: '/treatments/neurology' },
        { title: 'Orthopedics', description: 'Joint & Bone Health', icon: 'Bone', url: '/treatments/orthopedics' },
        { title: 'Oncology', description: 'Comprehensive Cancer Care', icon: 'Activity', url: '/treatments/oncology' },
      ]
    }
  },
  // ABOUT -> ABOUT SECTION
  {
    pageId: 'about',
    sectionId: 'about_section',
    content: {
      badge: 'About Us',
      titleLine1: 'Best Healthcare for You',
      titleLine2: 'Nuture. Treat. Link',
      paragraphs: [
        'NTL CareLink is a global healthcare access and medical support company dedicated to connecting patients from South Sudan, Tanzania, Kenya, Uganda and Africa in general with world-class medical care in India, Thailand, and beyond.',
        'To us, NTL Carelink is more than a company, it is a bridge of hope, built to connect people to the healthcare they deserve. We stand for trust, compassion, and absolute dedication to every patient’s journey. We believe that healthcare should not be a privilege, it should be right to humanity. It should be accessible, affordable, and guided with dignity.'
      ],
      stats: [
        { label: 'Satisfied Patients', value: '%100' },
        { label: 'Top Medical Projects', value: '%89' }
      ],
      founder: {
        name: 'Sultan Ngong',
        role: 'Founder',
        image: '/sultan_founder.png',
        link: '/about-us#founder'
      },
      images: {
        main: '/african_medical_scene_1774726766055.png',
        experienceBg: '/medical_badge_bg.png'
      },
      experience: {
        years: '+25',
        text: 'Experience In Medical Service'
      }
    }
  },
  // DESTINATIONS -> LIST
  {
    pageId: 'destinations',
    sectionId: 'destinations_list',
    content: {
      headerBadge: 'Global Network',
      headerTitle1: 'World-Class',
      headerTitle2: 'Care Destinations.',
      headerSubtitle: 'Curated medical excellence. We connect you with international facilities that combine world-class surgery with recovery in the globe\'s most sought-after medical hubs.',
      headerImage: '/hospital_images/max hospital image 1.jpeg',
      destinations: [
        {
          id: 'india',
          name: 'India',
          tagline: 'Global Leader in Complex Surgeries & Organ Transplants.',
          description: 'Home to some of the world\'s most renowned surgeons and JCI-accredited facilities. India offers cutting-edge medical technology at a fraction of Western costs, specializing in Cardiology, Oncology, and Robotic Surgery.',
          img: '/hospital_images/Apollo hospital.jpeg',
          alt: 'Modern Medical Care in India',
          size: 'large-left',
          badge: '',
          bullets: [
            { icon: '✓', text: 'Cost Savings up to 80%' },
            { icon: '✓', text: 'World-Renowned Specialists' },
            { icon: '✓', text: 'Zero Waiting Periods' }
          ]
        },
        {
          id: 'thailand',
          name: 'Thailand',
          tagline: 'The Gold Standard for Premium Wellness & Hospitality.',
          description: 'Combining world-class medical expertise with legendary Thai hospitality. Thailand is the top choice for preventive check-ups, wellness retreats, and elective procedures in 5-star recovery environments.',
          img: '/hospital_images/Bumrungrad Hospital.jpeg',
          alt: 'Luxury Wellness in Thailand',
          size: 'small',
          badge: 'Wellness Hub',
          bullets: [
            { icon: '✿', text: '5-Star Recovery Suites' },
            { icon: '✿', text: 'Holistic Health Programs' }
          ]
        },
        {
          id: 'turkey',
          name: 'Turkey',
          tagline: 'Pioneer in Aesthetics & Advanced Dental Restoration.',
          description: 'Strategically located between Europe and Asia, Turkey has become the global capital for hair transplants, high-end dental work, and aesthetic transformations in state-of-the-art facilities.',
          img: '/hospital_images/medicana hospital images.jpeg',
          alt: 'Advanced Aesthetics in Turkey',
          size: 'small',
          badge: 'Aesthetic Capital',
          bullets: [
            { icon: '★', text: 'Global Hair Transplant Hub' },
            { icon: '★', text: 'Digital Dental Design' }
          ]
        }
      ],
      costComparisonText: 'Transparent pricing is at our core. See how much you can save compared to Western healthcare averages.',
      costRows: [
        { procedure: 'Hip Replacement', usa: '$40,000', india: '$7,200', thailand: '$12,500', turkey: '$10,500' },
        { procedure: 'Heart Bypass (CABG)', usa: '$120,000', india: '$8,500', thailand: '$28,000', turkey: '$14,000' },
        { procedure: 'Dental Implants (Full)', usa: '$25,000', india: '$4,500', thailand: '$10,500', turkey: '$5,000' },
        { procedure: 'IVF Treatment', usa: '$15,000', india: '$3,500', thailand: '$6,500', turkey: '$4,200' },
      ]
    }
  },
  // FOOTER -> INFO
  {
    pageId: 'footer',
    sectionId: 'info',
    content: {
      description: 'Your trusted partner in accessing world-class healthcare globally. We connect patients with internationally accredited hospitals and leading specialists.',
      email: 'care@ntlcarelink.com',
      phone: '+91 8146654185',
      address: 'Global Operations Center, New Delhi, India',
      socials: [
        { platform: 'WhatsApp', url: 'https://wa.me/918146654185', icon: 'MessageCircle' },
        { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
        { platform: 'Instagram', url: '#', icon: 'Instagram' }
      ]
    }
  }
];

export async function GET() {
  try {
    await dbConnect();

    // Iterate and upsert to avoid duplicate key errors on multiple runs
    for (const item of initialContent) {
      await SiteContent.findOneAndUpdate(
        { pageId: item.pageId, sectionId: item.sectionId },
        { $set: { content: item.content } },
        { upsert: true, new: true }
      );
    }

    return NextResponse.json({ message: 'Content seeded successfully', count: initialContent.length }, { status: 200 });
  } catch (error: any) {
    console.error('Seeding error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
