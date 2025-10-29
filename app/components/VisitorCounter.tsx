'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const response = await fetch('/api/track-visit', {
          method: 'POST',
          credentials: 'same-origin', // ensure browser accepts Set-Cookie
        });
        const data = await response.json();
        setCount(data.count ?? null);
      } catch (error) {
        console.error('Failed to track visit:', error);
      } finally {
        setLoading(false);
      }
    };
    trackVisit();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <br />
      - cool people: {count?.toLocaleString() || '—'}
    </div>
  );
}