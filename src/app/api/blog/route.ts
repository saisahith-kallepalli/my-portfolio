import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const blogPosts = db.getBlogPosts();
    return NextResponse.json(
      {
        success: true,
        count: blogPosts.length,
        data: blogPosts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
