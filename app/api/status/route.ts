import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { status } = await request.json();
    
    if (!status || typeof status !== 'string') {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), 'public', 'status.json');
    const data = JSON.stringify({ status }, null, 2);
    
    await fs.writeFile(filePath, data, 'utf8');
    
    return NextResponse.json({ success: true, status });
  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json(
      { error: 'Failed to update status' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'status.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading status:', error);
    return NextResponse.json(
      { error: 'Failed to read status' },
      { status: 500 }
    );
  }
}