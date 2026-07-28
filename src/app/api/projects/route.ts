import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { Project } from '@/lib/types';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || 'all';
    const projects = db.getProjects(category);

    return NextResponse.json(
      {
        success: true,
        count: projects.length,
        data: projects,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Project;
    if (!body.title || !body.slug || !body.description) {
      return NextResponse.json(
        { success: false, error: 'Title, slug, and description are required' },
        { status: 400 }
      );
    }

    const newProject = db.addProject({
      ...body,
      id: body.id || `proj-${Date.now()}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Project created successfully',
        data: newProject,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
