export interface Hospital {
  id: string;
  name: string;
  country: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  specialties: string[];
  mainImage: string;
  gallery: string[];
}

export const hospitals: Hospital[] = [
  {
    id: "artemis",
    name: "Artemis Hospital",
    country: "INDIA",
    location: "Gurugram, India",
    shortDescription: "A JCI & NABH accredited state-of-the-art multi-specialty hospital.",
    fullDescription: "Artemis Hospital, established in 2007, spread across 9 acres, is a 400 plus bed; state-of-the-art multi-speciality hospital located in Gurugram, India. Artemis Hospital is the first JCI and NABH accredited hospital in Gurugram.",
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
    mainImage: "/hospital_images/Artemis hospital.jpeg",
    gallery: ["/hospital_images/Artemis hospital image 2.jpeg"]
  },
  {
    id: "apollo",
    name: "Apollo Hospital",
    country: "INDIA",
    location: "New Delhi, India",
    shortDescription: "Pioneers of integrated healthcare in Asia, offering comprehensive medical services.",
    fullDescription: "Indraprastha Apollo Hospitals, New Delhi is a multi-specialty tertiary acute care hospital with 710 beds and one of the most sought after destinations in Asia for healthcare. A state-of-the-art modern facility in the heart of the capital.",
    specialties: ["Robotic Surgery", "Cardiothoracic Surgery", "Transplants", "Gastroenterology"],
    mainImage: "/hospital_images/Apollo hospital.jpeg",
    gallery: ["/hospital_images/apollo hospiral image 2.jpeg"]
  },
  {
    id: "medanta",
    name: "Medanta - The Medicity",
    country: "INDIA",
    location: "Gurugram, India",
    shortDescription: "One of India's largest multi-super specialty institutes founded by Dr. Naresh Trehan.",
    fullDescription: "Medanta - The Medicity is one of India's largest multi-super specialty institutes located in Gurugram. Founded by eminent cardiac surgeon, Dr. Naresh Trehan, the institution has been envisioned with the aim of bringing to India the highest standards of medical care.",
    specialties: ["Cardiac Sciences", "Neurosciences", "Oncology", "Digestive & Hepatobiliary Sciences"],
    mainImage: "/hospital_images/medanta hospital.jpeg",
    gallery: ["/hospital_images/medanta hospital image 2.jpeg"]
  },
  {
    id: "max",
    name: "Max Super Speciality Hospital",
    country: "INDIA",
    location: "New Delhi, India",
    shortDescription: "A leading network of hospitals offering world-class medical expertise.",
    fullDescription: "Max Super Speciality Hospital is one of the premier healthcare facilities in North India, dedicated to providing unparalleled medical care using state-of-the-art technology and extensive clinical expertise across a wide array of medical disciplines.",
    specialties: ["Orthopaedics", "Urology", "Oncology", "Minimal Access Surgery"],
    mainImage: "/hospital_images/max hospital image 1.jpeg",
    gallery: []
  },
  {
    id: "fortis",
    name: "Fortis Memorial Research Institute",
    country: "INDIA",
    location: "Gurugram, India",
    shortDescription: "A multi-super specialty, quaternary care hospital with exceptional clinical talent.",
    fullDescription: "Fortis Memorial Research Institute (FMRI) is a multi-super speciality, quaternary care hospital with an enviable international faculty, reputed clinicians, including super-sub-specialists and speciality nurses, supported by cutting-edge technology.",
    specialties: ["Hematology", "Bone Marrow Transplant", "Neurology", "Cardiology"],
    mainImage: "/hospital_images/Fortis hospital image 1.jpeg",
    gallery: ["/hospital_images/fortis hospiral image 2.jpeg"]
  },
  {
    id: "bumrungrad",
    name: "Bumrungrad International Hospital",
    country: "THAILAND",
    location: "Bangkok, Thailand",
    shortDescription: "Southeast Asia's premier private hospital serving global patients.",
    fullDescription: "Bumrungrad International Hospital is an internationally accredited, multi-specialty hospital located in the heart of Bangkok, Thailand. Founded in 1980, it is one of the largest private hospitals in Southeast Asia, with 580 beds and over 30 specialty centers.",
    specialties: ["Preventive Medicine", "Cosmetic Surgery", "Cardiology", "Orthopedics"],
    mainImage: "/hospital_images/Bumrungrad Hospital.jpeg",
    gallery: ["/hospital_images/Bumrungrad Hospital image 2.jpeg"]
  },
  {
    id: "medpark",
    name: "Medpark Hospital",
    country: "THAILAND",
    location: "Bangkok, Thailand",
    shortDescription: "A modern medical facility established by healthcare professionals and physicians.",
    fullDescription: "MedPark Hospital is a newly established private hospital in Bangkok, founded by a group of dedicated senior doctors and experienced hospital administrators. They focus on complex diseases and tertiary care, striving to be the leading medical hub of Southeast Asia.",
    specialties: ["Intensive Care", "Specialized Surgeries", "Oncology", "Neurology"],
    mainImage: "/hospital_images/medpart hospital.jpeg",
    gallery: []
  },
  {
    id: "memorial",
    name: "Memorial Hospital",
    country: "TURKEY",
    location: "Istanbul, Turkey",
    shortDescription: "Turkey's first JCI-accredited hospital pioneering world-class healthcare.",
    fullDescription: "Memorial Healthcare Group is the first hospital in Turkey to receive JCI (Joint Commission International) accreditation. It is a reference center in areas such as IVF, Cardiovascular Surgery, Transplantation, and Robotic Surgery, serving patients from over 90 countries.",
    specialties: ["Organ Transplant", "IVF", "Cardiovascular Surgery", "Robotic Surgery"],
    mainImage: "/hospital_images/memorial hospital .jpeg",
    gallery: ["/hospital_images/memorial hospital image 2.jpeg"]
  },
  {
    id: "medicana",
    name: "Medicana International Hospital",
    country: "TURKEY",
    location: "Ankara, Turkey",
    shortDescription: "An advanced healthcare group providing international standards of treatment.",
    fullDescription: "Medicana International Ankara Hospital offers health services to both local and international patients in all branches of medicine. With modern infrastructure and distinguished academic staff, it stands out as one of the most prominent healthcare centers in Turkey.",
    specialties: ["Advanced Oncology", "Bone Marrow Transplant", "Cardiology", "Neurosurgery"],
    mainImage: "/hospital_images/medicana hospital images.jpeg",
    gallery: []
  }
];
