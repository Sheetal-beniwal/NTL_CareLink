import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Instead of generating an Excel file, we redirect to the new visual dashboard
  // which provides a much better user experience.
  const url = new URL('/registrations', request.url);
  return NextResponse.redirect(url);
}
