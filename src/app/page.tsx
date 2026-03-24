import Image from "next/image";

import AboutUs from "./Components/AboutUs";
import SpecializedCare from "./Components/SpecializedCare";

export default function Home() {
  return (
    <div className="flex flex-col pt-20">
      <AboutUs />
      <SpecializedCare />
    </div>
  );
}
