import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Medical Destinations — India, Thailand & Turkey',
  description:
    'Compare top medical travel destinations: India, Thailand, and Turkey. Save up to 80% on surgery costs vs. the USA. JCI-accredited hospitals, zero waiting periods, and world-class specialists.',
  path: '/destinations',
  keywords: [
    'medical tourism destinations',
    'medical tourism india vs thailand',
    'surgery cost india vs usa',
    'affordable healthcare destinations',
    'medical travel india thailand turkey',
    'hip replacement cost india',
    'heart bypass cost india',
    'IVF cost india',
  ],
});

import dbConnect from '@/lib/db';
import SiteContent from '@/models/SiteContent';

export const revalidate = 0;

export default async function DestinationsPage() {
  await dbConnect();
  const doc = await SiteContent.findOne({ pageId: 'destinations', sectionId: 'destinations_list' }).lean();
  const content = doc?.content || {
    headerBadge: 'Global Network',
    headerTitle1: 'World-Class',
    headerTitle2: 'Care Destinations.',
    headerSubtitle: 'Curated medical excellence. We connect you with international facilities that combine world-class surgery with recovery in the globe\'s most sought-after medical hubs.',
    headerImage: '/hospital_images/max hospital image 1.jpeg',
    destinations: [],
    costRows: [],
    journeySteps: []
  };

  const { destinations, costRows, journeySteps } = content;

  return (
    <div className="bg-[#f7f9fb] dark:bg-slate-900 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-24 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-primary/10 text-medical-primary font-bold text-xs mb-6 tracking-widest uppercase">
              {content.headerBadge}
            </span>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] text-medical-dark mb-8 font-[Manrope,sans-serif]">
              {content.headerTitle1} <br />
              <span className="text-slate-400">{content.headerTitle2}</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              {content.headerSubtitle}
            </p>
          </div>

          <div className="hidden lg:block w-72 h-72 rounded-[3rem] bg-medical-light/30 border-8 border-white shadow-2xl rotate-3 overflow-hidden">
             <img 
               className="w-full h-full object-cover grayscale opacity-50 contrast-150"
               src={content.headerImage} 
               alt="Modern Healthcare"
             />
          </div>
        </div>
      </section>

      {/* ── Destinations Bento Grid ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {(destinations || []).map((dest: any) => (
            <div 
              key={dest.id}
              className={`${
                dest.size === 'large-left' ? 'md:col-span-8' : 'md:col-span-4'
              } bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden group border border-slate-200/60 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              <div className={`relative ${dest.size === 'large-left' ? 'h-[400px]' : 'h-64'} overflow-hidden`}>
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={dest.img}
                  alt={dest.alt || dest.name}
                />
                {dest.badge && (
                  <div className="absolute top-6 left-6 bg-medical-primary text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-medical-primary/20">
                    {dest.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                   <h3 className="text-4xl font-black text-white font-[Manrope,sans-serif]">{dest.name}</h3>
                </div>
              </div>
              <div className="p-10">
                <p className="text-xl font-bold text-medical-dark mb-4 leading-tight">{dest.tagline}</p>
                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                  {dest.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {(dest.bullets || []).map((b: any, i: number) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                      <span className="text-medical-primary font-bold">{b.icon || "✓"}</span>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{b.text || b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cost Comparison Table ─────────────────────────────── */}
      <section id="cost-comparison" className="max-w-5xl mx-auto px-8 mb-32 pt-24 -mt-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-medical-dark mb-4 font-[Manrope,sans-serif]">
            The Value Comparison
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Transparent pricing is at our core. See how much you can save compared to Western
            healthcare averages.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white border border-slate-200/60 shadow-xl shadow-slate-200/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-medical-dark text-white font-[Manrope,sans-serif]">
                  <th className="p-6 font-bold tracking-tight">Procedure</th>
                  <th className="p-6 font-bold tracking-tight">USA Average</th>
                  <th className="p-6 font-bold tracking-tight">India</th>
                  <th className="p-6 font-bold tracking-tight">Turkey</th>
                  <th className="p-6 font-bold tracking-tight">Thailand</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(costRows || []).map((row: any, i: number) => (
                  <tr
                    key={row.procedure || i}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-6 font-bold text-slate-800">{row.procedure}</td>
                    <td className="p-6 text-slate-500">{row.usa}</td>
                    <td className="p-6 font-bold text-medical-primary">{row.india}</td>
                    <td className="p-6 font-bold text-medical-primary">{row.turkey}</td>
                    <td className="p-6 font-bold text-medical-primary">{row.thailand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-8 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
          * Estimates in USD. Final costs vary by specific hospital & medical case.
        </p>
      </section>

      {/* ── Journey Steps ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-[3rem] p-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative border border-slate-200/60 dark:border-slate-700">
          {/* Decorative glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Steps */}
          <div className="z-10 w-full md:w-1/2">
            <h2 className="text-4xl font-black text-blue-800 dark:text-blue-300 mb-10 font-[Manrope,sans-serif]">
              Your Journey,
              <br />
              Simplified.
            </h2>
            <div className="space-y-8">
              {(journeySteps || []).map((s: any, idx: number, arr: any[]) => (
                <div key={s.step || idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {s.step || (idx + 1)}
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-300 dark:bg-slate-600 mt-2" />
                    )}
                  </div>
                  <div className={idx < arr.length - 1 ? 'pb-8' : ''}>
                    <h4 className="font-bold text-lg text-slate-800 dark:text-white">{s.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-96 object-cover rounded-3xl shadow-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwF8CRW73xeDwXpvdmZ_Zgqr3FuTxZ6ZJaivR6ncoZ9j2M21nlQ4BcdAItsrxfgsHM1yqHk2rLeaOTWtgkwjOJePmX0cWAkBhs8YyXiIjDLl78F0ckT1ZJ5ZZRMix9bnkswFIE_TGT77BKJLtMsyekxEHUUpqz1OTs4L9edUBscstDrh2izKwAUIbPSwweZp35QFEIUZzqIVsHJHZHboGqLqOFWWEXQsgiepcd7qADEMR831R3FIyuVNF7Agw9--AlYitn1HV0tw"
              alt="Patient relaxing at luxury medical resort"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
