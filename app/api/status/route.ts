import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export async function POST(request: Request) {
  try {
    const { status } = await request.json();
    
    if (!status || typeof status !== 'string') {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    // Edge Config is read-only from the API
    // We need to update it via Vercel API
    const edgeConfigId = process.env.EDGE_CONFIG_ID;
    const vercelToken = process.env.VERCEL_TOKEN;

    if (!edgeConfigId || !vercelToken) {
      return NextResponse.json(
        { error: 'Missing configuration' },
        { status: 500 }
      );
    }

    // Update Edge Config via Vercel API
    const response = await fetch(
      `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${vercelToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              operation: 'upsert',
              key: 'status',
              value: status,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to update Edge Config');
    }

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
    // Read from Edge Config
    const status = await get('status');
    
    return NextResponse.json({ status: status || 'No status set' });
  } catch (error) {
    console.error('Error reading status:', error);
    return NextResponse.json(
      { error: 'Failed to read status' },
      { status: 500 }
    );
  }
}