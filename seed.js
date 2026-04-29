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
      ]
    }
  },
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
        { id: 'india', name: 'India', tagline: 'Global Leader in Complex Surgeries & Organ Transplants.', description: 'Home to some of the world\'s most renowned surgeons and JCI-accredited facilities.', img: '/hospital_images/Apollo hospital.jpeg', size: 'large-left', bullets: ['Cost Savings up to 80%', 'World-Renowned Specialists', 'Zero Waiting Periods'] },
        { id: 'thailand', name: 'Thailand', tagline: 'The Gold Standard for Premium Wellness & Hospitality.', description: 'Combining world-class medical expertise with legendary Thai hospitality.', img: '/hospital_images/Bumrungrad Hospital.jpeg', size: 'small', badge: 'Wellness Hub', bullets: ['5-Star Recovery Suites', 'Holistic Health Programs'] },
        { id: 'turkey', name: 'Turkey', tagline: 'Pioneer in Aesthetics & Advanced Dental Restoration.', description: 'Strategically located between Europe and Asia, Turkey has become the global capital for hair transplants.', img: '/hospital_images/medicana hospital images.jpeg', size: 'small', badge: 'Aesthetic Capital', bullets: ['Global Hair Transplant Hub', 'Digital Dental Design'] }
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
