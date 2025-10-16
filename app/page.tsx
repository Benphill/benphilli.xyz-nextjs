import Link from "next/link";
import "./styles.css"
import Head from 'next/head'
import Status from './status'
import VisitorCounter from "./components/VisitorCounter";
import ImageMarquee from "./buttonscroll";

export const metadata = {
  title: 'Ben ~ Jasper',
  description: 'Ben&apos;s Site',
};

export default async function Home() {
  return (
      <div className="basis-[100%] text-red-100 font-mono">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
        <div className="bg-maincol basis-[100%] border-2 border-black h-52">
        </div>
        <div className="h-165 basis-1/1 lg:flex items-start pb-5">          
          <div className="basis-2/5 mr-1 mt-1 p-2">
            <div className="bg-maincol mr-1 mt-1 p-2 border-2 border-black">
              <h1 className="text-2xl font-bold font-mono text-shadow-[0px_0px_2px_#fff]">~ Status</h1>
              <br /> <Status />
            </div>
            <div className="bg-maincol mr-1 mt-4 p-2 border-2 border-black">
              <h1 className="text-2xl font-bold font-mono text-shadow-[0px_0px_2px_#fff]">~ Navigation</h1>
              <Link href="/blog" className="hover:text-shadow-[0px_0px_2px_#fff]">
                <br /> - blog <br />
              </Link>
              <Link href="/obsessions" className="hover:text-shadow-[0px_0px_2px_#fff]">
                 - obsessions <br />
              </Link>
              <Link href="/guestbook" className="hover:text-shadow-[0px_0px_2px_#fff]">
                 - guestbook <br />
              </Link>
              <Link href="/gallery" className="hover:text-shadow-[0px_0px_2px_#fff]">
                 - gallery <br />
              </Link>
            </div>
            <div className="bg-maincol mr-1 mt-4 p-2 border-2 border-black">
              <h1 className="text-2xl font-bold font-mono text-shadow-[0px_0px_2px_#fff]">~ Visits</h1>
              <VisitorCounter />
            </div>
          </div>
          <div className="bg-lightcol basis-3/5 ml-1 mt-4 border-2 border-black h-135">
            <h1 className="text-4xl font-bold font-mono text-shadow-[0px_0px_2px_#fff] text-center">~ Welcome ~</h1>
            <div>
              <ImageMarquee />
            </div>
          </div>
        </div>
      </div>
  );
}