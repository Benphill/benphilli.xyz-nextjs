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
        });
        const data = await response.json();
        setCount(data.count);
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