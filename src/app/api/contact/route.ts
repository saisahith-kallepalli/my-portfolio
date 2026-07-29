import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendInquiryEmail } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, projectType, budget, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const inquiry = db.addInquiry({
      name,
      email,
      phone: phone || 'Not Provided',
      subject: subject || 'General Inquiry',
      projectType: projectType || subject || 'General Inquiry',
      budget: budget || 'Flexible',
      message,
    });

    // Dispatch email notification to Sai Sahith
    try {
      await sendInquiryEmail({
        name,
        email,
        phone: phone || 'Not Provided',
        subject: subject || 'General Inquiry',
        projectType: projectType || subject || 'General Inquiry',
        budget: budget || 'Flexible',
        message,
      });
    } catch (mailError) {
      console.warn('⚠️ Non-fatal: Inquiry saved to database, but email dispatch failed:', mailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received! Sai Sahith will reply within 24 hours.',
        data: inquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const inquiries = db.getInquiries();
    return NextResponse.json(
      {
        success: true,
        count: inquiries.length,
        data: inquiries,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch inquiries' },
      { status: 500 }
    );
  }
}
