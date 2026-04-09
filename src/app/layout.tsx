import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import SidebarForm from "./Components/SidebarForm";
import Footer from "./Components/Footer";
import { ThemeProvider } from "./Components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// ─── JSON-LD: Organization Schema ────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "NTL CareLink",
  alternateName: "Network for Transformative Life-Care",
  url: "https://ntlcarelink.com",
  logo: "https://ntlcarelink.com/ntl_logo.jpeg",
  description:
    "NTL CareLink connects patients across Africa and beyond with world-class hospitals in India, Thailand, and Turkey. End-to-end medical travel facilitation including visa, flights, and specialist coordination.",
  telephone: "+918146654185",
  email: "ntlcarelinkglobal@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  areaServed: ["Kenya", "Uganda", "Tanzania", "South Sudan", "Nigeria", "Ghana", "Somalia", "Sudan", "UAE"],
  sameAs: [],
};

// ─── Website Schema ───────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NTL CareLink",
  url: "https://ntlcarelink.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ntlcarelink.com/hospitals?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ntlcarelink.com"),
  title: {
    default: "NTL CareLink | Premium Medical Tourism & Healthcare Solutions",
    template: "%s | NTL CareLink",
  },
  description:
    "NTL CareLink is the #1 medical tourism company providing affordable surgery abroad. Access the best hospitals in India for cardiac surgery, IVF, oncology & transplants. Get a free consultation today!",
  keywords: [
    "best medical tourism company",
    "medical tourism india",
    "affordable surgery abroad",
    "treatment in india from africa",
    "low cost surgery in india",
    "best hospitals in india for surgery",
    "cardiac surgery cost in india",
    "ivf treatment cost in india",
    "cancer treatment in india",
    "organ transplant india",
    "medical travel agency",
    "NTL CareLink",
    "medical tourism kenya",
    "medical tourism nigeria",
    "medical tourism uganda",
    "medical tourism tanzania",
    "top hospitals india",
    "specialist doctors india",
    "JCI accredited hospitals",
  ],
  authors: [{ name: "NTL CareLink", url: "https://ntlcarelink.com" }],
  creator: "NTL CareLink",
  publisher: "NTL CareLink",
  icons: {
    icon: "/ntl_logo.jpeg",
    shortcut: "/ntl_logo.jpeg",
    apple: "/ntl_logo.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ntlcarelink.com",
    siteName: "NTL CareLink",
    title: "NTL CareLink | Premium Medical Tourism & Healthcare Solutions",
    description:
      "NTL CareLink is the #1 medical tourism company providing affordable surgery abroad. Access the best hospitals in India for cardiac surgery, IVF, oncology & transplants. Get a free consultation today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NTL CareLink — Bridging Borders to Better Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ntlcarelink",
    creator: "@ntlcarelink",
    title: "NTL CareLink | Premium Medical Tourism & Healthcare Solutions",
    description:
      "NTL CareLink is the #1 medical tourism company providing affordable surgery abroad. Access the best hospitals in India for cardiac surgery, IVF, oncology & transplants. Get a free consultation today!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console / Bing verification tokens here when available
    // google: 'your-verification-token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-50">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <SidebarForm />
          
          {/* Mobile Floating Action Button */}
          <a
            href="https://wa.me/918146654185"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-medical-primary text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,163,173,0.4)] z-[90] hover:bg-medical-dark transition-transform active:scale-95 border-2 border-white dark:border-slate-800"
            aria-label="Message support"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}