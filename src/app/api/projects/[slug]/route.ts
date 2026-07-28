import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const project = db.getProjectBySlug(slug);

    if (!project) {
      return NextResponse.json(
        { success: false, error: `Project with slug '${slug}' not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: project,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching project by slug:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch project detail' },
      { status: 500 }
    );
  }
}
