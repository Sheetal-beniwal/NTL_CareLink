import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Registration from '@/models/Registration';

export async function GET() {
  try {
    await dbConnect();
    
    // Fetch all registrations sorted by date
    const registrations = await Registration.find({}).sort({ submittedAt: 1 }).lean();

    // Define CSV Headers
    const headers = [
      'Full Name',
      'Email',
      'Phone',
      'Location',
      'Service',
      'Message',
      'Registration Date'
    ];

    // Helper to escape CSV values (wrap in quotes and handle existing quotes)
    const escapeCSV = (val: string) => {
      const stringVal = String(val || '');
      return `"${stringVal.replace(/"/g, '""')}"`;
    };

    // Convert data to CSV rows
    const rows = registrations.map((reg: any) => [
      escapeCSV(reg.fullName),
      escapeCSV(reg.email),
      escapeCSV(reg.phone),
      escapeCSV(reg.location),
      escapeCSV(reg.service),
      escapeCSV(reg.message),
      escapeCSV(reg.submittedAt ? new Date(reg.submittedAt).toLocaleString() : 'N/A')
    ].join(','));

    // Combine headers and rows
    const csvContent = [headers.join(','), ...rows].join('\n');

    // Return as CSV with no-cache headers to ensure Google Sheets gets the latest data
    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'inline; filename=registrations.csv',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error: any) {
    console.error('CSV Export Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate registration stream', message: error.message },
      { status: 500 }
    );
  }
}
