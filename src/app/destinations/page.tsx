import React from 'react';

export const metadata = {
  title: 'Destinations | NTL CareLink',
  description:
    'Curated medical excellence across five continents. Discover JCI-accredited facilities in India, Turkey, Thailand, Mexico, and UAE.',
};

const destinations = [
  {
    id: 'india',
    name: 'India',
    tagline: 'A global hub for complex cardiology and oncology treatments with decades of expertise.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbwprY0WRpULs_V6Y9EWHccyIfblIwvZ5qPw4Tpg_pvK1jhPwhIBZEGhEW9p7_MwYZG3kyEhYXw9E3yAPSOHkVeEcI-whkDpKIwN6qvQSWcA2hJS-RlyxVwz1R9fKDxWn58IIY5n5YGdaCFm7msTHfkENBUocM_CPptkvyVgInrANo4fA9Ba-D0UmC1kFaIv8V8ATuQtYTs7oqcBR2ZNeLW6Gmd9t4rWEus3aVI3LsSh8Lmew3tPw4LZA19-mSsF1CRd9o_MF3UQ',
    alt: 'The Taj Mahal at sunrise',
    size: 'large-left',
    bullets: [
      { icon: '✓', text: 'Cost Savings up to 80%' },
      { icon: '✓', text: '30+ JCI Accredited Hospitals' },
      { icon: '✓', text: 'Zero Waiting Periods' },
    ],
  },
  {
    id: 'turkey',
    name: 'Turkey',
    tagline: 'Pioneer in aesthetics and advanced dental restoration.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwuDDzfi_p1ju7nl2xAI0-fhN6D_ks8CD--G119ctDJRpW5fL0bqLV9-D2TwJliGWjKFrdm82qsTmpZKM_c9IHvGqhaHIpQbHV0XhUD1znMiF5zgsgGpn0UDRP20s-UwbAgiY_QmOalrzNkZNq5Je4krrGwrepXjNhKKF4LOAdFe7hAMKcwxWX5NFCDtx54EZlW4bHjuzL5JKrncrWBBhtEnmGa-UMfd4saHMrLTFxZYasBtBVknsqCQouHr-en9fOnvlnZwtbRw',
    alt: 'Istanbul sunset with Blue Mosque',
    size: 'small',
    badge: 'Europe/Asia Hub',
    bullets: [
      { icon: '★', text: "World's Leading Hair Transplant Hub" },
      { icon: '★', text: 'Luxury Wellness Retreats' },
    ],
  },
  {
    id: 'thailand',
    name: 'Thailand',
    tagline: 'The gold standard for hospitality and preventative wellness.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPYs1eQL23cgjzDOUMrLlY4TOLpUHVj9Bw_NzyLqxA2csZ6X8sLRyz6HT52SaMboH5_yCyEW-E2-DSc5tLb9KIT7iIaCGt1_K-5cudHA526_hPPFGk5efFivUp49mfSQSZFXKOANFxP7a91FeyLSPLVD-72K0wkJLECGb0x86Fi7-R2F3if8UsT20SWDUhJABQqliRvZgriIaXUH1U5P91af7xaN1CzLkwLi4A1IMPiYBXvc28YCmjeHq47SH95XBoHDdylQriBQ',
    alt: 'Thai long-tail boat on turquoise water',
    size: 'small',
    bullets: [
      { icon: '✿', text: 'Integrative Holistic Care' },
      { icon: '✿', text: '5-Star Recovery Suites' },
    ],
  },
  {
    id: 'mexico',
    name: 'Mexico',
    tagline:
      'The preferred destination for North American patients seeking high-quality bariatric and orthopedic care.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI18wyFo2sqsjDzj9yoqFORtyJ4LKu7Tgl8W-XMkED8dmovpNsKYDROgGZ7s_ujCatCTvLa_UZAwZHyJWz0xgPhrxFNuiWpJCrtGmqikqkeHw8CDKZYABffpmb5Gr7E2y5hkEC1Lb6v-tKarLM6hb2dmufP3FblV4BdHZ5buTQSaK9hFj7Q5XOLhzt8gwyO7kZ4f5MM_fkbeVvwUi-6GUDJrbsuCEHXTWdywEXqxiFCSIa74O33Jp9FxnsB0XFeLYK-UNYnNz7qQ',
    alt: 'Aerial view of Cancun beach',
    size: 'large-right',
    bullets: [
      { icon: '⊕', text: 'Proximity to US/Canada' },
      { icon: '⊕', text: 'Bilingual Medical Staff' },
      { icon: '⊕', text: 'FDA Approved Protocols' },
    ],
  },
];

const costRows = [
  { procedure: 'Hip Replacement', usa: '$40,000', india: '$7,200', turkey: '$10,500', mexico: '$12,000' },
  { procedure: 'Heart Bypass (CABG)', usa: '$120,000', india: '$8,500', turkey: '$14,000', mexico: '$25,000' },
  { procedure: 'Dental Implants (Full)', usa: '$25,000', india: '$4,500', turkey: '$5,000', mexico: '$6,200' },
  { procedure: 'IVF Treatment', usa: '$15,000', india: '$3,500', turkey: '$4,200', mexico: '$5,500' },
];

export default function DestinationsPage() {
  return (
    <div className="bg-[#f7f9fb] dark:bg-slate-900 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold text-xs mb-6 tracking-widest uppercase">
              Global Network
            </span>
            <h1 className="text-6xl font-black tracking-tighter leading-[0.95] text-blue-800 dark:text-blue-300 mb-8 font-[Manrope,sans-serif]">
              The World&apos;s Finest <br />
              <span className="text-slate-500 dark:text-slate-400">Care Destinations.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
              Curated medical excellence across five continents. We connect you with JCI-accredited
              facilities that combine world-class surgery with recovery in the world&apos;s most
              beautiful settings.
            </p>
          </div>

          {/* Decorative circle image */}
          <div className="hidden lg:block w-64 h-64 rounded-full border-[1.5rem] border-slate-200 dark:border-slate-700 overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5PgHZLGQ4cSdjviD45_BTdZ3ojpTT51xmwZ3Hr5VK-Xl5Nr77O7Ncprbs0hPGPLjdeRX1Y5FTI__yPkNgaCC8HIWKuvXdzoGUcwHjN-0GCFDfM71DITpKuYN1LrEr4yPHbooofYppYw5ie-zjnRTjP4KMhZMZQd5JLB24hqIDWiFYpaf_iBXrnnxvknri3K54Zly9wixFXtWpfCNEzKuk9N8kbiMDefBqMM-FUAAdTE7ukSFpBNdsCxmnST7IktCWbUSh1QuGSA"
              alt="Modern medical facility interior"
            />
          </div>
        </div>
      </section>

      {/* ── Destinations Bento Grid ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-12 gap-6">

          {/* India — Large Left */}
          <div className="col-span-12 md:col-span-8 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden group flex flex-col md:flex-row min-h-[400px] border border-slate-200/60 dark:border-slate-700 shadow-sm">
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={destinations[0].img}
                alt={destinations[0].alt}
              />
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-black text-blue-800 dark:text-blue-300 mb-4 font-[Manrope,sans-serif]">
                India
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                {destinations[0].tagline}
              </p>
              <ul className="space-y-4">
                {destinations[0].bullets.map((b) => (
                  <li key={b.text} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Turkey — Small */}
          <div className="col-span-12 md:col-span-4 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden group border border-slate-200/60 dark:border-slate-700 shadow-sm">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={destinations[1].img}
                alt={destinations[1].alt}
              />
              <div className="absolute top-4 left-4 bg-white/85 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-slate-700 dark:text-slate-200">
                Europe/Asia Hub
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black text-blue-800 dark:text-blue-300 mb-2 font-[Manrope,sans-serif]">
                Turkey
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{destinations[1].tagline}</p>
              <ul className="space-y-3">
                {destinations[1].bullets.map((b) => (
                  <li key={b.text} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <span className="text-teal-500">★</span>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Thailand — Small */}
          <div className="col-span-12 md:col-span-4 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden group border border-slate-200/60 dark:border-slate-700 shadow-sm">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={destinations[2].img}
                alt={destinations[2].alt}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black text-blue-800 dark:text-blue-300 mb-2 font-[Manrope,sans-serif]">
                Thailand
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{destinations[2].tagline}</p>
              <ul className="space-y-3">
                {destinations[2].bullets.map((b) => (
                  <li key={b.text} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <span className="text-teal-500">✿</span>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mexico — Large Right */}
          <div className="col-span-12 md:col-span-8 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden group flex flex-col md:flex-row min-h-[400px] border border-slate-200/60 dark:border-slate-700 shadow-sm">
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-3xl font-black text-blue-800 dark:text-blue-300 mb-4 font-[Manrope,sans-serif]">
                Mexico
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                {destinations[3].tagline}
              </p>
              <ul className="space-y-4">
                {destinations[3].bullets.map((b) => (
                  <li key={b.text} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">+</span>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden order-1 md:order-2">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={destinations[3].img}
                alt={destinations[3].alt}
              />
            </div>
          </div>

          {/* UAE — Full Width */}
          <div className="col-span-12 bg-blue-800 dark:bg-blue-900 text-white rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 h-80 md:h-[450px]">
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-sKPpY33C1YMWOZR75iHqohocEi8S3UlwCGdUxvedKd_U4TYGt3lJ3vRPpwfAyXvT3iqzstw4tTTg5rNnZVVk7pFuSvJMv66JR4ja5_0w0_TI9LuRwQZ1fpqRUL7hA2eCZgzdkKspfVx4yw74VWFKcgt1Y8rSQUu0j-XV53MIbxoIzhAZTs_fPeDvkOflNgEp6764BVleawh1q7Ej-d2HuyYi7M-bUI_DDMSXneRNZq6SU50pYXfTjA"
                alt="Dubai skyline at dusk"
              />
            </div>
            <div className="w-full md:w-1/3 p-12">
              <h3 className="text-4xl font-black mb-6 font-[Manrope,sans-serif]">UAE</h3>
              <p className="text-lg text-blue-200 mb-8 opacity-90">
                Experience the future of healthcare in Dubai and Abu Dhabi, where technology meets
                unparalleled luxury.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Next-Gen Robotics</h4>
                    <p className="text-sm opacity-70">Leading robotic-assisted surgical units.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Ultra-Luxury Recovery</h4>
                    <p className="text-sm opacity-70">Concierge medicine at its finest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Cost Comparison Table ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-blue-800 dark:text-blue-300 mb-4 font-[Manrope,sans-serif]">
            The Value Comparison
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Transparent pricing is at our core. See how much you can save compared to Western
            healthcare averages.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-800 dark:bg-blue-900 text-white font-[Manrope,sans-serif]">
                  <th className="p-6 font-bold tracking-tight">Procedure</th>
                  <th className="p-6 font-bold tracking-tight">USA Average</th>
                  <th className="p-6 font-bold tracking-tight">India</th>
                  <th className="p-6 font-bold tracking-tight">Turkey</th>
                  <th className="p-6 font-bold tracking-tight">Mexico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {costRows.map((row, i) => (
                  <tr
                    key={row.procedure}
                    className={`${
                      i % 2 === 0
                        ? 'bg-white dark:bg-slate-800'
                        : 'bg-slate-50/60 dark:bg-slate-700/30'
                    } hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors`}
                  >
                    <td className="p-6 font-bold text-slate-800 dark:text-white">{row.procedure}</td>
                    <td className="p-6 text-slate-500 dark:text-slate-400">{row.usa}</td>
                    <td className="p-6 font-bold text-teal-600 dark:text-teal-400">{row.india}</td>
                    <td className="p-6 font-bold text-teal-600 dark:text-teal-400">{row.turkey}</td>
                    <td className="p-6 font-bold text-teal-600 dark:text-teal-400">{row.mexico}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-400 uppercase tracking-widest font-bold">
          * Estimates in USD. Final costs vary by facility and individual medical profile.
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
              {[
                {
                  step: 1,
                  title: 'Case Review',
                  desc: 'Free medical history evaluation by international boards.',
                },
                {
                  step: 2,
                  title: 'Concierge Booking',
                  desc: 'We handle visas, flights, and priority hospital admission.',
                },
                {
                  step: 3,
                  title: 'Care & Recovery',
                  desc: 'Personalized post-op care in premium destination resorts.',
                },
              ].map((s, idx, arr) => (
                <div key={s.step} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {s.step}
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
