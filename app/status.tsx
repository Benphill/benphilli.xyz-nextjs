import { promises as fs } from 'fs';
import { get } from '@vercel/edge-config'


export default async function Status() {
    let status = 'No status set';

    if (process.env.EDGE_CONFIG) {
        status = (await get('status') as string) || 'No status set';
  } else {
    // For local dev, use a default message
        status = 'Local development mode';
  }


  return (

    <div>

      <p>{status}</p>

    </div>

  );

}