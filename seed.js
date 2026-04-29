const dns = require('dns');

// Fix DNS resolution issues for MongoDB Atlas
if (typeof dns.setDefaultResultOrder === 'function') {
  dns.setDefaultResultOrder('ipv4first');
}
try {
  dns.setServers(['1.1.1.1', '8.8.8.8']);
} catch (e) {
  console.log("Could not set custom DNS servers");
}

const mongoose = require('mongoose');

// You can bypass SRV completely if standard SRV connection still fails by using this format:
// const uri = "mongodb://alabasta:mongopass1@ac-f2bc0qq-shard-00-00.o5affzp.mongodb.net:27017,ac-f2bc0qq-shard-00-01.o5affzp.mongodb.net:27017,ac-f2bc0qq-shard-00-02.o5affzp.mongodb.net:27017/ntl_care?ssl=true&authSource=admin&retryWrites=true&w=majority";

const uri = "mongodb+srv://alabasta:mongopass1@cluster0.o5affzp.mongodb.net/ntl_care?retryWrites=true&w=majority&appName=Cluster0";

const SiteContentSchema = new mongoose.Schema({
  pageId: { type: String, required: true },
  sectionId: { type: String, required: true },
  content: { type: mongoose.Schema.Types.Mixed, required: true },
}, { timestamps: true });

SiteContentSchema.index({ pageId: 1, sectionId: 1 }, { unique: true });

const SiteContent = mongoose.models.SiteContent || mongoose.model('SiteContent', SiteContentSchema);

const initialContent = [
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
  {
    pageId: 'home',
    sectionId: 'about_preview',
    content: {
      badge: 'About Us',
      titleLine1: 'Best Healthcare for You',
      titleLine2: 'Nuture. Treat. Link',
      paragraph1: 'NTL CareLink is a global healthcare access and medical support company dedicated to connecting patients from South Sudan, Tanzania, Kenya, Uganda and Africa in general with world-class medical care in India, Thailand, and beyond.',
      paragraph2: 'To us, NTL Carelink is more than a company, it is a bridge of hope, built to connect people to the healthcare they deserve. We stand for trust, compassion, and absolute dedication to every patient’s journey. We believe that healthcare should not be a privilege, it should be right to humanity. It should be accessible, affordable, and guided with dignity.',
      stats: [
        { label: 'Satisfied Patients', value: '%100' },
        { label: 'Top Medical Projects', value: '%89' }
      ],
      founder: {
        name: 'Sultan Ngong',
        role: 'Founder',
        image: '/sultan_founder.png'
      },
      images: {
        main: '/african_medical_scene_1774726766055.png',
        badge: '/medical_badge_bg.png',
        badgeYears: '+25',
        badgeTextLine1: 'Experience In',
        badgeTextLine2: 'Medical',
        badgeTextLine3: 'Service'
      }
    }
  },
  {
    pageId: 'home',
    sectionId: 'health_services',
    content: {
      badge: 'Excellence in Care',
      title: 'Our Comprehensive Health Services',
      subtitle: 'We are always here to ensure your health is served better with world-class medical assistance and end-to-end patient care.',
      services: [
        { title: 'Medical Visa Assistance', desc: 'Facilitating smooth visa invitations and processing for international patients.', icon: 'ShieldCheck', image: '/african_medical_scene_1774726766055.png' },
        { title: 'Hospital Coordination', desc: 'Strategic partner network to find the best hospitals and medical specialists in India.', icon: 'Hospital', image: '/hero-bg.png' },
        { title: 'Full Journey Management', desc: 'Professional handling of appointments, diagnosis, surgical bookings, and discharge.', icon: 'Stethoscope', image: '/african_wellness_recovery_1774726781943.png' },
        { title: 'Free Medical Opinion', desc: 'Online consultation with top doctors to plan your treatment before you fly.', icon: 'Users', image: '/doctor_founder.png' },
        { title: 'Patient Concierge', desc: 'Pick-up services, local SIM cards, currency exchange, and accommodation support.', icon: 'MapPin', image: '/african_patient_profile_1774726934268.png' },
        { title: 'Translation & Support', desc: 'Language assistants and dedicated support staff to bridge any communication gaps.', icon: 'MessageSquare', image: '/healthcare_scene.png' }
      ]
    }
  },
  {
    pageId: 'home',
    sectionId: 'gallery',
    content: {
      badge: 'Our Medical Excellence',
      titleLine1: 'World-Class',
      titleLine2: 'Facilities & Expert Care',
      quote: '"Bridging the gap between global medical standards and affordable treatment options."',
      images: [
        { title: 'Advanced Cardiology', src: '/african_cardiology_scene_professional_1774726802908.png' },
        { title: 'Orthopedics', src: '/african_orthopedic_scene_professional_1774726816309.png' },
        { title: 'Wellness & Recovery', src: '/african_wellness_recovery_1774726781943.png' }
      ]
    }
  },
  {
    pageId: 'home',
    sectionId: 'treatments',
    content: {
      badge: 'Clinical Excellence Hub',
      titleLine1: 'Specialized',
      titleLine2: 'Clinical care',
      subtitle: "We coordinate with the world's most advanced medical institutions to deliver outcomes that redefine global standards.",
      buttonText: 'Explore Portfolios',
      buttonLink: '/treatments',
      items: [
        { title: 'Cardiology', desc: 'Heart Surgery & Care', icon: 'HeartPulse', color: 'from-rose-500 to-red-600' },
        { title: 'Neurology', desc: 'Brain & Spine Treatment', icon: 'Brain', color: 'from-indigo-600 to-purple-700' },
        { title: 'Oncology', desc: 'Advanced Cancer Therapy', icon: 'Dna', color: 'from-medical-primary to-[#00929b]' },
        { title: 'Transplants', desc: 'Organ & BMT Programs', icon: 'LifeBuoy', color: 'from-medical-dark to-[#003B5C]' },
        { title: 'Orthopedics', desc: 'Robotic Joint Replacement', icon: 'Bone', color: 'from-medical-accent to-[#00c5b8]' },
        { title: 'Fertility', desc: 'IVF & Genetic Screening', icon: 'Baby', color: 'from-pink-500 to-rose-400' }
      ]
    }
  },
  {
    pageId: 'home',
    sectionId: 'testimonials',
    content: {
      badge: 'Patient Stories',
      titleLine1: 'Lives Transformed by',
      titleLine2: 'NTL CareLink',
      subtitle: 'Real stories from real patients across Africa who trusted us with their most precious journey — their health.',
      stats: [
        { value: '300+', label: 'Patients Served' },
        { value: '100%', label: 'Satisfaction Rate' },
        { value: '15+', label: 'Countries Reached' },
        { value: '50+', label: 'Hospital Partners' }
      ],
      testimonials: [
        {
          name: 'Amara Deng',
          location: 'Juba, South Sudan',
          image: '/testimonials/testimonial (1).jpeg',
          rating: 5,
          treatment: 'Cardiac Surgery',
          text: 'NTL CareLink was a lifeline for my family. When my father needed urgent heart surgery, they coordinated everything — from the hospital in Delhi to our flights and accommodation. The care he received at Apollo was world-class, and we never felt alone for a single moment.',
        },
        {
          name: 'Fatima Al-Rashid',
          location: 'Dar es Salaam, Tanzania',
          image: '/testimonials/testimonial (4).jpeg',
          rating: 5,
          treatment: 'Neurological Care',
          text: 'My son was diagnosed with a rare neurological disorder. NTL CareLink found us the best neurologist at Artemis Hospital in Gurugram. Their team handled visa processing, hospital admissions, and even arranged a translator. I cannot express my gratitude enough.',
        },
        {
          name: 'John Bosco Otieno',
          location: 'Kisumu, Kenya',
          image: '/testimonials/testimonial (5).jpeg',
          rating: 5,
          treatment: 'Liver Transplant',
          text: 'The liver transplant process is incredibly complex, but NTL CareLink made it manageable. They guided our family through every legal and medical step, coordinated with Max Hospital seamlessly, and ensured we had comfort and clarity throughout. My brother is alive today because of them.',
        },
        {
          name: 'Aisha Mohammed',
          location: 'Khartoum, Sudan',
          image: '/testimonials/testimonial (6).jpeg',
          rating: 5,
          treatment: 'Paediatric Care',
          text: "My daughter needed specialized paediatric care that was not available locally. NTL CareLink arranged her treatment at a top children's hospital in India, including accommodation for our entire family. Their compassion and professionalism are truly unmatched.",
        },
        {
          name: 'Winnie Atieno',
          location: 'Mombasa, Kenya',
          image: '/testimonials/testimonial (8).jpeg',
          rating: 5,
          treatment: 'Fertility Treatment',
          text: 'After years of failed fertility treatments locally, NTL CareLink gave us renewed hope. They connected us with a renowned fertility specialist in India, handled all travel arrangements, and supported us emotionally throughout the journey. We are now proud parents of twins.',
        }
      ]
    }
  },
  {
    pageId: 'about',
    sectionId: 'about_page_full',
    content: {
      hero: {
        pillText: "Dedicated Since Day One",
        headingLine1: "Bridging Borders to",
        headingLine2: "Better Health",
        subtitle: "NTL CareLink connects patients across Africa and beyond with world-class healthcare. Every life deserves the best medical care, regardless of geography.",
        backgroundImage: "/african_medical_scene_1774726766055.png",
        cards: [
          { icon: "Globe", title: "50+ Partner Hospitals", description: "Access to JCI-accredited facilities across India, Thailand, and Turkey." },
          { icon: "Users", title: "10K+ Lives Touched", description: "Thousands of patients trusted us for their medical travel journey." },
          { icon: "Award", title: "98% Success Rate", description: "Consistent outcomes matching or exceeding Western medical standards." }
        ]
      },
      whoWeAre: {
        pillText: "Our Identity",
        headingLine1: "NTL CareLink:",
        headingLine2: "Transformative Life-Care",
        subtitle: "This is not just healthcare. This is a movement of hope, access, and transformation.",
        paragraph1: "Established as a beacon of hope for patients seeking advanced medical treatments, NTL CareLink has evolved into one of the most trusted medical travel facilitators across Africa and beyond. At NTL, we exist to change the story for millions who suffer not because treatment doesn't exist, but because they lack the bridge to reach it.",
        paragraph2: "Through our digital health platform and community-led education programs, we ensure that every journey leads to healing and dignity. We are not just solving today's problems; we are building tomorrow's healthcare system.",
        image: "/african_medical_scene_1774726766055.png",
        transformations: [
          { from: "Confusion", to: "Clarity" },
          { from: "Fear", to: "Confidence" },
          { from: "Distance", to: "Access" },
          { from: "Hope", to: "Reality" }
        ]
      },
      pillars: {
        badge: "Our Foundation",
        title: "What Drives Us",
        items: [
          { icon: "Target", title: "Our Mission", desc: "To democratize world-class healthcare by making it accessible, affordable, and stress-free for every patient across borders.", color: "bg-[#003B5C]" },
          { icon: "Activity", title: "Our Vision", desc: "To be recognized as the global gold standard in medical facilitation, where every journey leads to a successful recovery.", color: "bg-[#00A3AD]" },
          { icon: "Heart", title: "Our Values", desc: "Integrity, Compassion, and Excellence. We do what is right for the patient, every single time, without exception.", color: "bg-[#00E0D2]" }
        ]
      },
      founder: {
        quote1: "\"Healthcare is NOT a privilege — it is a right for every human soul.\"",
        quote2: "\"Distance should never decide who lives and who dies.\"",
        nameLine1: "Ngong",
        nameLine2: "Arol",
        paragraph1: "Ngong Arol is a visionary healthcare leader driven by a singular mission: to ensure that no life is limited by geography or lack of access to quality medical treatment. As the CEO of NTL CareLink, he stands at the forefront of a global movement to democratize healthcare across continents.",
        paragraph2: "Born from a deep awareness of the disparities in global healthcare, Ngong Arol has personally overseen the medical journeys of thousands, transforming uncertainty into hope. His leadership integrates medical tourism, digital health, and health education into a borderless ecosystem that empowers communities worldwide.",
        image: "/teamMembers/founder-main.jpeg",
        badges: [
          { icon: "Stethoscope", title: "Healthcare Pioneer", sub: "Innovating Global Access" },
          { icon: "Briefcase", title: "20+ Years Exp.", sub: "International Logistics" }
        ]
      },
      team: {
        badge: "The Experts Behind the Care",
        titleLine1: "The",
        titleLine2: "Powerhouse",
        subtitle: "Our multidisciplinary leadership combines clinical excellence with logistical precision to ensure your health journey is flawless.",
        members: [
          { name: "Atana Peter", role: "Chief Operation Officer", image: "/teamMembers/coo.jpeg", bio: "Driving excellence in operational efficiency and healthcare delivery across borders." },
          { name: "Amit Yadav", role: "Chief Technology Officer", image: "/teamMembers/cto.jpeg", bio: "Innovating the digital landscape of global healthcare accessibility." },
          { name: "Isha", role: "Associate Director", image: "/teamMembers/associate-director-ops.jpeg", bio: "Ensuring seamless patient journeys and world-class care coordination." },
          { name: "Nancy Kiden", role: "Director of Access", image: "/teamMembers/marketing-director.jpeg", bio: "Expanding the reach of transformative care to underserved communities." }
        ]
      },
      globalHubs: {
        badge: "Network Expansion",
        titleLine1: "Our",
        titleLine2: "Global Reach",
        subtitle: "Connecting East & Central Africa to the World's Best Medical Hubs.",
        hubs: [
          { name: "South Sudan", flag: "🇸🇸", status: "Headquarters" },
          { name: "Kenya / Uganda", flag: "🇰🇪🇺🇬", status: "Regional Offices" },
          { name: "India Hub", flag: "🇮🇳", status: "Primary Care Network" },
          { name: "Thailand / Turkey", flag: "🇹🇭🇹🇷", status: "Specialized Hubs" }
        ]
      },
      trustSignals: {
        badge: "Patient Security",
        titleLine1: "Why Patients",
        titleLine2: "Trust Us",
        items: [
          { icon: "ShieldCheck", title: "Globally Accredited Partners", desc: "Every hospital in our network holds JCI or equivalent international accreditation." },
          { icon: "Globe", title: "Full Journey Management", desc: "From first consultation to travel, treatment, and recovery—we walk with you every step." },
          { icon: "Activity", title: "Digital Health Innovation", desc: "Access specialists from anywhere through our proactive digital health ecosystem." },
          { icon: "Award", title: "Health Education", desc: "Equipping communities with the knowledge they need to protect their families and thrive." },
          { icon: "BadgeCheck", title: "Mission-Driven Team", desc: "A scalable, borderless network serving millions across Africa, Asia, and the Middle East." },
          { icon: "Heart", title: "Compassionate Care", desc: "Where lives are saved and hope is restored. We treat every patient with the dignity they deserve." }
        ]
      },
      joinMovement: {
        titleLine1: "Join the",
        titleLine2: "Movement",
        subtitle: "Connecting the world to healing, dignity, and life.",
        forPatients: {
          title: "For Patients",
          desc: "If you've been confused or unsure where to go—if you've delayed treatment because of fear—NTL CareLink is your bridge to world-class healthcare. You are search for answers, for better treatment, for a second chance."
        },
        forPartners: {
          title: "For Partners",
          desc: "This is more than a business; it's a high-impact opportunity at the intersection of healthcare and global access. We are building a scalable, borderless network positioned to serve millions. Join us in building the future of healthcare."
        }
      },
      cta: {
        title: "Ready to Begin Your Recovery Journey?",
        subtitle: "Join over 10,000+ patients who found their healing path with NTL CareLink."
      }
    }
  },
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
        { id: 'india', name: 'India', tagline: 'Global Leader in Complex Surgeries & Organ Transplants.', description: 'Home to some of the world\'s most renowned surgeons and JCI-accredited facilities.', img: '/hospital_images/Apollo hospital.jpeg', size: 'large-left', bullets: [{ icon: '✓', text: 'Cost Savings up to 80%' }, { icon: '✓', text: 'World-Renowned Specialists' }, { icon: '✓', text: 'Zero Waiting Periods' }] },
        { id: 'thailand', name: 'Thailand', tagline: 'The Gold Standard for Premium Wellness & Hospitality.', description: 'Combining world-class medical expertise with legendary Thai hospitality.', img: '/hospital_images/Bumrungrad Hospital.jpeg', size: 'small', badge: 'Wellness Hub', bullets: [{ icon: '✿', text: '5-Star Recovery Suites' }, { icon: '✿', text: 'Holistic Health Programs' }] },
        { id: 'turkey', name: 'Turkey', tagline: 'Pioneer in Aesthetics & Advanced Dental Restoration.', description: 'Strategically located between Europe and Asia, Turkey has become the global capital for hair transplants.', img: '/hospital_images/medicana hospital images.jpeg', size: 'small', badge: 'Aesthetic Capital', bullets: [{ icon: '★', text: 'Global Hair Transplant Hub' }, { icon: '★', text: 'Digital Dental Design' }] }
      ],
      costRows: [
        { procedure: 'Hip Replacement', usa: '$40,000', india: '$7,200', thailand: '$12,500', turkey: '$10,500' },
        { procedure: 'Heart Bypass (CABG)', usa: '$120,000', india: '$8,500', thailand: '$28,000', turkey: '$14,000' },
        { procedure: 'Dental Implants (Full)', usa: '$25,000', india: '$4,500', thailand: '$10,500', turkey: '$5,000' },
        { procedure: 'IVF Treatment', usa: '$15,000', india: '$3,500', thailand: '$6,500', turkey: '$4,200' },
      ],
      journeySteps: [
        { step: 1, title: 'Case Review', desc: 'Free medical history evaluation by international boards.' },
        { step: 2, title: 'Concierge Booking', desc: 'We handle visas, flights, and priority hospital admission.' },
        { step: 3, title: 'Care & Recovery', desc: 'Personalized post-op care in premium destination resorts.' },
      ]
    }
  },
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

async function run() {
  try {
    console.log("Attempting to connect to MongoDB with IPv4 preferred...");
    await mongoose.connect(uri, { family: 4 });
    console.log("✅ Connected to MongoDB.");

    for (const item of initialContent) {
      await SiteContent.findOneAndUpdate(
        { pageId: item.pageId, sectionId: item.sectionId },
        { $set: { content: item.content } },
        { upsert: true, new: true }
      );
      console.log(`Seeded ${item.pageId} -> ${item.sectionId}`);
    }

    console.log("✅ Seeding complete.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding DB:");
    console.error(err);
    
    if (err.code === 'ECONNREFUSED' && err.syscall === 'querySrv') {
      console.log("\n⚠️ DNS SRV lookups are blocked on your network.");
      console.log("Attempting direct connection to replica set nodes...");
      
      try {
        const directUri = "mongodb://alabasta:mongopass1@ac-f2bc0qq-shard-00-00.o5affzp.mongodb.net:27017,ac-f2bc0qq-shard-00-01.o5affzp.mongodb.net:27017,ac-f2bc0qq-shard-00-02.o5affzp.mongodb.net:27017/ntl_care?ssl=true&authSource=admin&retryWrites=true&w=majority";
        await mongoose.connect(directUri, { family: 4 });
        console.log("✅ Connected to MongoDB via Direct Replica Set URI.");
        
        for (const item of initialContent) {
          await SiteContent.findOneAndUpdate(
            { pageId: item.pageId, sectionId: item.sectionId },
            { $set: { content: item.content } },
            { upsert: true, new: true }
          );
          console.log(`Seeded ${item.pageId} -> ${item.sectionId}`);
        }
        
        console.log("✅ Seeding complete.");
        
        // Also update .env file
        const fs = require('fs');
        const envPath = '.env';
        if (fs.existsSync(envPath)) {
          let envContent = fs.readFileSync(envPath, 'utf8');
          if (envContent.includes('mongodb+srv://')) {
            envContent = envContent.replace(
              /MONGODB_URI=mongodb\+srv:\/\/.*/,
              `MONGODB_URI=${directUri}\n# Original SRV URI commented out due to DNS issues\n# MONGODB_URI_SRV=${uri}`
            );
            fs.writeFileSync(envPath, envContent);
            console.log("✅ Updated .env with direct replica set connection string to bypass future DNS issues.");
          }
        }
        process.exit(0);
      } catch (directErr) {
        console.error("❌ Direct connection also failed:", directErr);
        process.exit(1);
      }
    } else {
      process.exit(1);
    }
  }
}

run();
