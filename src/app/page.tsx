import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import Highlights from "./Components/Highlights";
import WhyChooseUs from "./Components/WhyChooseUs";
import HealthServices from "./Components/HealthServices";
import SpecializedCare from "./Components/SpecializedCare";
import AboutUs from "./Components/AboutUs";
import TreatmentsSection from "./Components/TreatmentsSection";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main>
        {/* 1. Hero — First impression & call to action */}
        <Hero />

        {/* 2. About Us — Immediately establish identity & trust */}
        <div id="about">
          <AboutUs />
        </div>

        {/* 3. Quick Highlights — Reinforce with key stats */}
        <Highlights />

        {/* 4. Why Choose Us — Deepen trust with proof points */}
        <WhyChooseUs />

        {/* 5. Picture Gallery — Visual evidence of partner hospitals */}
        <Gallery />

        {/* 6. Our Health Services — Showcase the offering */}
        <HealthServices />

        {/* 7. Specialized Medical Care — Highlight key specialties */}
        <SpecializedCare />

        {/* 8. Clinical Speciality Grid — Full treatment catalogue */}
        <TreatmentsSection />

        {/* 9. Testimonials — Social proof to close the journey */}
        <Testimonials />
      </main>
    </div>
  );
}
