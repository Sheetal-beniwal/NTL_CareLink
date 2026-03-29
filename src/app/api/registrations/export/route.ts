import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Registration from '@/models/Registration';
import * as XLSX from 'xlsx';

export async function GET() {
  try {
    await dbConnect();
    
    // Fetch all registrations from DB
    const registrations = await Registration.find({}).sort({ submittedAt: -1 }).lean();

    if (!registrations || registrations.length === 0) {
      return NextResponse.json({ message: 'No registrations found to export' }, { status: 404 });
    }

    // Prepare data for Excel
    const data = registrations.map((reg: any) => ({
      'Full Name': reg.fullName,
      'Email': reg.email,
      'Phone': reg.phone,
      'Location': reg.location || 'N/A',
      'Service': reg.service,
      'Message': reg.message || 'N/A',
      'Registration Date': reg.submittedAt ? new Date(reg.submittedAt).toLocaleString() : 'N/A',
    }));

    // Create workbook and worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');

    // Generate buffer
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

    // Return the file as response
    return new NextResponse(excelBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=registrations.xlsx',
      },
    });
  } catch (error: any) {
    console.error('Export Error:', error);
    return NextResponse.json(
      { error: 'Failed to export registrations', message: error.message },
      { status: 500 }
    );
  }
}
