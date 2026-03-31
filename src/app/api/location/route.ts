import { NextRequest, NextResponse } from 'next/server';

// ISO 2-letter country codes → full names (for services that return codes)
const countryCodeToName: Record<string, string> = {
  IN: 'India', TH: 'Thailand', TR: 'Turkey', US: 'United States',
  GB: 'United Kingdom', DE: 'Germany', FR: 'France', AU: 'Australia',
  CA: 'Canada', SG: 'Singapore', AE: 'United Arab Emirates', SA: 'Saudi Arabia',
  NG: 'Nigeria', EG: 'Egypt', KE: 'Kenya', ZA: 'South Africa',
  PK: 'Pakistan', BD: 'Bangladesh', NP: 'Nepal', LK: 'Sri Lanka',
  MY: 'Malaysia', ID: 'Indonesia', PH: 'Philippines', VN: 'Vietnam',
  JP: 'Japan', KR: 'South Korea', CN: 'China', RU: 'Russia',
  BR: 'Brazil', MX: 'Mexico', IT: 'Italy', ES: 'Spain', NL: 'Netherlands',
};

async function fetchWithTimeout(url: string, ms = 5000): Promise<Response> {
  return fetch(url, { signal: AbortSignal.timeout(ms), cache: 'no-store' });
}

export async function GET(req: NextRequest) {
  try {
    // 🧪 DEV TESTING OVERRIDE: ?country=Thailand in URL
    const override = req.nextUrl.searchParams.get('country');
    if (override) {
      return NextResponse.json({ country: override, code: 'TEST' });
    }

    // 1. Try Cloudflare CDN trace — extremely reliable, returns plain text with loc=XX
    try {
      const res = await fetchWithTimeout('https://www.cloudflare.com/cdn-cgi/trace');
      const text = await res.text();
      const match = text.match(/^loc=([A-Z]{2})/m);
      if (match?.[1]) {
        const code = match[1];
        const name = countryCodeToName[code] ?? code;
        return NextResponse.json({ country: name, code });
      }
    } catch { /* try next */ }

    // 2. Try api.country.is — minimal, fast, returns ISO code
    try {
      const res = await fetchWithTimeout('https://api.country.is/');
      const data = await res.json();
      if (data?.country) {
        const code = data.country as string;
        const name = countryCodeToName[code] ?? code;
        return NextResponse.json({ country: name, code });
      }
    } catch { /* try next */ }

    // 3. Try freeipapi.com — returns full country name
    try {
      const res = await fetchWithTimeout('https://freeipapi.com/api/json/');
      const data = await res.json();
      if (data?.countryName) {
        return NextResponse.json({ country: data.countryName, code: data.countryCode });
      }
    } catch { /* try next */ }

    // 4. Try ipapi.co as last resort
    try {
      const res = await fetchWithTimeout('https://ipapi.co/json/');
      const data = await res.json();
      if (data?.country_name) {
        return NextResponse.json({ country: data.country_name, code: data.country_code });
      }
    } catch { /* all failed */ }

    return NextResponse.json({ country: null });
  } catch {
    return NextResponse.json({ country: null });
  }
}
