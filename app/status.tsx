import { promises as fs } from 'fs';


export default async function Status() {

    const response = await fetch('/api/status');
    const data = await response.json();


  return (

    <div>

      <p>{data.status}</p>

    </div>

  );

}