import Link from "next/link";
import "./styles.css"
import Head from 'next/head'
import Status from './status'
import VisitorCounter from "./components/VisitorCounter";
import ImageMarquee from "./buttonscroll";
import Image from "next/image";

export const metadata = {
  title: 'Ben ~ Jasper',
  description: 'Ben&apos;s Site',
};

export default async function Home() {
  return (
      <div className="w-[100%] text-pink-950 font-mono">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
        <div className="bg-maincol basis-[100%] rounded-lg border-1 border-black h-52">
        </div>
        <div className="h-165 basis-1/1 lg:flex items-start pb-5 min-w-0 max-w-[100%]">          
          <div className="basis-3/10 mr-1 mt-3">
            <div className="bg-maincol mr-1 mt-1 p-2 border-1 rounded-lg ">
              <div className="flex w-full justify-items-center">
                <h1 className="text-2xl font-bold font-mono text-shadow-[0px_0px_2px_#500724]">~ Status   </h1>
                <Image src="https://web.archive.org/web/20060309092017if_/http://www.geocities.com/dazed_mirage/flowerpuffspin.gif" alt="flower spin" width={20} height={20} className="h-[20px] mt-auto mb-auto mr-auto ml-2"/>
              </div>
              <br /> <Status />
            </div>
            <div className="bg-maincol mr-1 mt-4 p-2 border-1 rounded-lg border-black">
              <div className="flex w-full justify-items-center">
                <h1 className="text-2xl font-bold font-mono text-shadow-[0px_0px_2px_#500724]">~ Navigation</h1>
                <Image src="https://web.archive.org/web/20060309092017if_/http://www.geocities.com/dazed_mirage/flowerpuffspin.gif" alt="flower spin" width={20} height={20} className="h-[20px] mt-auto mb-auto mr-auto ml-2"/>
              </div>
              <Link href="/blog" className="hover:text-shadow-[0px_0px_2px_#500724]">
                <br /> - blog <br />
              </Link>
              <Link href="/obsessions" className="hover:text-shadow-[0px_0px_2px_#500724]">
                 - obsessions <br />
              </Link>
              <Link href="/guestbook" className="hover:text-shadow-[0px_0px_2px_#500724]">
                 - guestbook <br />
              </Link>
              <Link href="/gallery" className="hover:text-shadow-[0px_0px_2px_#500724]">
                 - gallery <br />
              </Link>
            </div>
            <div className="bg-maincol mr-1 mt-4 p-2 border-1 rounded-lg border-black">
              <div className="flex w-full justify-items-center">
                <h1 className="text-2xl font-bold font-mono text-shadow-[0px_0px_2px_#500724]">~ Visits</h1>
                <Image src="https://web.archive.org/web/20060309092017if_/http://www.geocities.com/dazed_mirage/flowerpuffspin.gif" alt="flower spin" width={20} height={20} className="h-[20px] mt-auto mb-auto mr-auto ml-2"/>
              </div>
              <VisitorCounter />
            </div>
          </div>
          <div className="bg-maincol basis-7/10 max-w-5xl ml-3 mt-4 border-1 rounded-lg border-black h-135 min-w-0">
            <h1 className="text-4xl font-bold font-mono text-shadow-[0px_0px_2px_#500724] text-center mt-4">~ Welcome ~</h1>
            <ImageMarquee />
            <div className="p-4">
              <p className="text-xl">hey, i&apos;m Ben! (he/him) this is my personal website where i might post some stuff idk</p>
              <br /> 
              <Image src="https://web.archive.org/web/20091027021325if_/http://ca.geocities.com/artist_etc/Misc-Animations/Animals-Plants/ani_Fish-Outline2-Says-Hi.gif" alt="fish says hi" width={309} height={40} className="m-auto"></Image>
              <h1 className="text-2xl text-shadow-[0px_0px_2px_#500724]">about me</h1>
              <br />
              <p className="text-xl">i&apos;m a student currently pursuing a career in mechanical engineering or possibly mechatronics. i also play the trombone and love video games like celeste, deltarune, and oneshot. i&apos;m a part of the 2702 Rebels FIRST robotics team, where i&apos;ve grown a love for cad design and metal manufacturing.</p>
              <a href="/obsessions" className="text-lg underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
  );
}