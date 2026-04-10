import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Registration from '@/models/Registration';

export async function GET() {
  try {
    await dbConnect();
    const registrations = await Registration.find({}).sort({ submittedAt: -1 }).lean();
    return NextResponse.json(registrations);
  } catch (error: any) {
    console.error('Fetch Registrations Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch registrations', message: error.message },
      { status: 500 }
    );
  }
}
