import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const testimonials = db.getTestimonials();
    return NextResponse.json(
      {
        success: true,
        count: testimonials.length,
        data: testimonials,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}
