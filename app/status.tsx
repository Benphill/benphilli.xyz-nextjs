import { get } from '@vercel/edge-config'


export default async function Status() {
    let status = 'No status set';
    const env = process.env.NODE_ENV

    if (env == "production") {
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