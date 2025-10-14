import { promises as fs } from 'fs';
import prisma from './prismainit';


export default async function Status() {

  const file = await fs.readFile(process.cwd() + '/public/status.json', 'utf8');

  const data = JSON.parse(file);


  return (

    <div>

      <p>{data.status}</p>

    </div>

  );

}