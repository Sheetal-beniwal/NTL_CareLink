import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Registration from '@/models/Registration';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    // Basic Validation
    if (!data.fullName || !data.email || !data.phone || !data.service) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Create new registration in MongoDB
    const newRegistration = await Registration.create({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      location: data.location || '',
      service: data.service,
      message: data.message || '',
    });

    return NextResponse.json(
      { message: 'Registration successful', data: newRegistration },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration Error:', error);
    
    // Check for Mongoose Validation Errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val: any) => val.message);
      return NextResponse.json({ error: messages.join(', ') }, { status: 400 });
    }

    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' }, 
      { status: 500 }
    );
  }
}
