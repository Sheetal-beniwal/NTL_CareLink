import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import Highlights from "./Components/Highlights";
import WhyChooseUs from "./Components/WhyChooseUs";
import HealthServices from "./Components/HealthServices";
import SpecializedCare from "./Components/SpecializedCare";
import AboutUs from "./Components/AboutUs";
import TreatmentsSection from "./Components/TreatmentsSection";
import Testimonials from "./Components/Testimonials";

import dbConnect from "@/lib/db";
import SiteContent from "@/models/SiteContent";

export const revalidate = 0;

export default async function Home() {
  await dbConnect();
  
  // Fetch all CMS content for the home page
  const homeSections = await SiteContent.find({ pageId: "home" }).lean();
  const getSection = (id: string) => homeSections.find(s => s.sectionId === id)?.content;
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main>
        {/* 1. Hero — First impression & call to action */}
        <Hero data={getSection("hero")} />

        {/* 2. About Us — Immediately establish identity & trust */}
        <div id="about">
          <AboutUs data={getSection("about_preview")} />
        </div>

        {/* 3. Quick Highlights — Reinforce with key stats */}
        <Highlights />

        {/* 4. Why Choose Us — Deepen trust with proof points */}
        <WhyChooseUs />

        {/* 5. Picture Gallery — Visual evidence of partner hospitals */}
        <Gallery data={getSection("gallery")} />

        {/* 6. Our Health Services — Showcase the offering */}
        <HealthServices data={getSection("health_services")} />

        {/* 7. Specialized Medical Care — Highlight key specialties */}
        <SpecializedCare />

        {/* 8. Clinical Speciality Grid — Full treatment catalogue */}
        <TreatmentsSection data={getSection("treatments")} />

        {/* 9. Testimonials — Social proof to close the journey */}
        <Testimonials data={getSection("testimonials")} />
      </main>
    </div>
  );
}
