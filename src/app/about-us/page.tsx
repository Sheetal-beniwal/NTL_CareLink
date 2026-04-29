import dbConnect from "@/lib/db";
import SiteContent from "@/models/SiteContent";
import AboutClient from "./AboutClient";

export const revalidate = 0;

export default async function AboutPage() {
  await dbConnect();
  
  const sections = await SiteContent.find({ pageId: "about" }).lean();
  const getSection = (id: string) => sections.find(s => s.sectionId === id)?.content;

  const data = getSection("about_page_full");

  return <AboutClient data={data} />;
}
