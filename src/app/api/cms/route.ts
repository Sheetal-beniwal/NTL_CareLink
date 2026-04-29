import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import SiteContent from '@/models/SiteContent';

export async function GET(request: Request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const pageId = searchParams.get('pageId');
    const sectionId = searchParams.get('sectionId');
    
    let query: any = {};
    if (pageId) query.pageId = pageId;
    if (sectionId) query.sectionId = sectionId;
    
    const content = await SiteContent.find(query).sort({ pageId: 1, sectionId: 1 });
    
    return NextResponse.json(content);
  } catch (error: any) {
    console.error('CMS GET error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    const { pageId, sectionId, content } = body;
    
    if (!pageId || !sectionId || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const updated = await SiteContent.findOneAndUpdate(
      { pageId, sectionId },
      { $set: { content } },
      { new: true, upsert: true }
    );
    
    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    console.error('CMS PUT error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
