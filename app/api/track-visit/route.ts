import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function POST() {
  try {
    // Increment visitor count atomically
    const newCount = await redis.incr('visitorCount');
    
    return NextResponse.json({ 
      count: newCount,
      message: 'Visit tracked'
    });
  } catch (error) {
    console.error('Error tracking visit:', error);
    return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const count = await redis.get<number>('visitorCount') || 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return NextResponse.json({ error: 'Failed to fetch count' }, { status: 500 });
  }
}