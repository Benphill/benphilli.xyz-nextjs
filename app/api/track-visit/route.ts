import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

function parseCookies(cookieHeader?: string) {
  const map: Record<string, string> = {};
  if (!cookieHeader) return map;
  cookieHeader.split(';').forEach((c) => {
    const [k, ...v] = c.trim().split('=');
    if (!k) return;
    map[k] = decodeURIComponent(v.join('='));
  });
  return map;
}

export async function POST(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie') || '';
    const cookies = parseCookies(cookieHeader);
    const visitorCookie = cookies['visitorId'];

    // If visitor already has an id cookie, ensure the Redis set contains it.
    // This recreates the key if it was deleted in the Upstash data browser.
    if (visitorCookie) {
      const isMember = await redis.sismember('visitorIds', visitorCookie);
      if (!isMember) {
        // Re-add the existing visitor ID to recreate the set/key
        await redis.sadd('visitorIds', visitorCookie);
      }
      const count = (await redis.scard('visitorIds')) || 0;
      return NextResponse.json({
        count,
        newVisit: !isMember, // indicates whether we had to re-add the id
      });
    }

    // New visitor: create an id, add to Redis set and set cookie
    const visitorId = crypto.randomUUID();
    await redis.sadd('visitorIds', visitorId);
    const count = (await redis.scard('visitorIds')) || 0;

    const res = NextResponse.json({
      count,
      newVisit: true,
    });

    // Set cookie for 1 year so future requests are considered the same visitor
    res.cookies.set('visitorId', visitorId, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    });

    return res;
  } catch (error) {
    console.error('Error tracking visit:', error);
    return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const count = (await redis.scard('visitorIds')) || 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return NextResponse.json({ error: 'Failed to fetch count' }, { status: 500 });
  }
}