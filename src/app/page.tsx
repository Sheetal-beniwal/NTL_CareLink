import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import Highlights from "./Components/Highlights";
import WhyChooseUs from "./Components/WhyChooseUs";
import HealthServices from "./Components/HealthServices";
import SpecializedCare from "./Components/SpecializedCare";
import AboutUs from "./Components/AboutUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Picture Gallery Section */}
        <Gallery />

        {/* 3. Quick Highlights */}
        <Highlights />

        {/* 4. Refined Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Our Health Services Section */}
        <HealthServices />

        {/* 6. Specialized Medical Care */}
        <SpecializedCare />

        {/* 7. About Us Section */}
        <div id="about">
          <AboutUs />
        </div>
      </main>
    </div>
  );
}
