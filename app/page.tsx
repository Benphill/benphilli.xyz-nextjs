import Link from "next/link";
import "./styles.css"
import Head from 'next/head'
import Status from './status'
import VisitorCounter from "./components/VisitorCounter";
import ImageMarquee from "./buttonscroll";
import Image from "next/image";
import Kindle from "./kindlescreensaver";
import NewPost from "./newPost";
import { db } from "@/src/db";
import { posts } from "@/src/db/schema";
import { desc } from "drizzle-orm";

export const metadata = {
  title: 'Ben ~ Jasper',
  description: 'Ben&apos;s Site',
};


export default async function Home() {
  
    const allPosts = await db
    .select()
    .from(posts)
    .orderBy(desc(posts.createdAt));
      

  return (
    <div className="w-[55%] h-min rounded-t-3xl flex">
      <div>
        {/*<Image src="/overlays/Nine.png" alt="Pioneer 9" width={200} height={200} className="absolute top-40 left-20" />
        <Image src="/overlays/Ten.png" alt="Pioneer 9" width={200} height={'auto'} className="absolute top-40 left-20" />*/}
      </div>
      <div className="w-full h-min text-(--color-highlight) mt-20">
        <div className="bg-maincol basis-full border-3 border-dashed border-(--color-bordercol) h-52 flex justify-items-start">
          <div className="mt-auto mb-auto ml-3">
            <p className="text-7xl font-[grapeSoda]">ben ~ jasper</p>
            <br />
            <p className="">Works on mobile, better on computer.</p>
          </div>
          <div className="lg:visible invisible lg:relative absolute text-end">
            <Kindle />
          </div>
        </div>
        <div className="h-min basis-1/1 lg:flex items-start pb-5 min-w-0 max-w-full">          
          <div className="basis-3/10 mt-3">
            <div className="bg-maincol mt-1 p-2 border-3 border-dashed border-(--color-bordercol)">
              <div className="flex w-full justify-items-center">
                <p className="text-3xl font-[grapeSoda]">~ status   </p>
                <Image src="https://web.archive.org/web/20060309092017if_/http://www.geocities.com/dazed_mirage/flowerpuffspin.gif" alt="flower spin" width={20} height={20} className="h-[20px] mt-auto mb-auto mr-auto ml-2"/>
              </div>
              {/* @ts-expect-error Custom element is registered by the widget script. */}
              <ws-widget type="status" iid="17683" />
            </div>
            <div className="bg-maincol mt-4 p-2 border-3 border-dashed border-(--color-bordercol)">
              <div className="flex w-full justify-items-center">
                <p className="text-3xl font-[grapeSoda]">~ navigation</p>
                <Image src="https://web.archive.org/web/20060309092017if_/http://www.geocities.com/dazed_mirage/flowerpuffspin.gif" alt="flower spin" width={20} height={20} className="h-[20px] mt-auto mb-auto mr-auto ml-2"/>
              </div>
              <Link href="/" className="hover:text-shadow-[0px_0px_2px_#500724]">
                home <br />
              </Link>
              <Link href="/blogv2" className="hover:text-shadow-[0px_0px_2px_#500724]">
                blog <br />
              </Link>
              <Link title="Coming soon" href="/obsessions" className="hover:text-shadow-[0px_0px_2px_#500724]">
                obsessions<Image src="/clock-1.png" alt="Clock" width={20} height={20} className="float-right"/>
              </Link><br />
              <Link title="Coming soon" href="/guestbook" className="hover:text-shadow-[0px_0px_2px_#500724]">
                guestbook<Image src="/clock-1.png" alt="Clock" width={20} height={20} className="float-right"/>
              </Link><br />
              <Link title="Coming soon" href="/gallery" className="hover:text-shadow-[0px_0px_2px_#500724]">
                gallery<Image src="/clock-1.png" alt="Clock" width={20} height={20} className="float-right"/>
              </Link>
            </div>
            <div className="bg-maincol mt-4 p-2 border-3 border-dashed border-(--color-bordercol)">
              <div className="flex w-full justify-items-center">
                <p className="text-3xl font-[grapeSoda]">~ visits</p>
                <Image src="https://web.archive.org/web/20060309092017if_/http://www.geocities.com/dazed_mirage/flowerpuffspin.gif" alt="flower spin" width={20} height={20} className="h-[20px] mt-auto mb-auto mr-auto ml-2"/>
              </div>
              {/* @ts-expect-error Custom element is registered by the widget script. */}
              <ws-widget type="hc" iid="17708"></ws-widget>
            </div>
          </div>
          <div className="basis-7/10 w-20 lg:ml-3">
            <div className="bg-maincol mt-4 border-3 border-dashed border-(--color-bordercol) h-min min-w-0 overflow-x-hidden overflow-y-auto mb-10">
              <p className="text-4xl  font-[grapeSoda] text-center mt-4">~ welcome ~</p>
              <ImageMarquee />
              <hr className="mt-6 mb-4 border-2 border-(--color-bordercol) border-dashed w-100 ml-auto mr-auto"/>
              <div className="p-4 justify-center">
                <p className="text-xl">hey, i&apos;m ben! <span className="wave-container font-[grapeSoda]"><span className="text-red-600">(</span><span className="text-orange-600">h</span><span className="text-yellow-500">e</span><span className="text-green-600">/</span><span className="text-blue-600">h</span><span className="text-indigo-600">i</span><span className="text-purple-600">m</span><span className="text-pink-600">)</span></span> this is my personal website where i might post some stuff idk</p>
                <br /> 
                <p className="text-4xl font-[grapeSoda]">about me</p>
                <br />
                <p className="text-xl">i&apos;m a student currently pursuing a career in engineering, and i really like gaming and overly long video essays. i&apos;m also a part of the <span className="font-[grapeSoda] text-[#BB090A] text-2xl">2702</span> <span className="font-[grapeSoda] text-black text-2xl">Rebels</span> FIRST robotics team, where i&apos;ve developed a passion for design. customizing profiles is the only thing I do on social media, so this site is really just a permanent way to obsess about that customization with no limits <span className="font-[grapeSoda] text-2xl">:3</span> you can read more about me when i get around to making that page~</p>
                {/*<a href="/obsessions" className="text-lg underline">Read More</a>*/}
                <br />
                <hr className="mt-6 mb-4 border-2 border-(--color-bordercol) border-dashed w-100 ml-auto mr-auto"/>
                <br />
                {/*<p className="text-xl">i also host any shitty pages i make for school:</p>
                <ul className="list-disc list-inside text-xl">
                  <li><Link href="/school/lotr" className="underline hover:text-shadow-[0px_0px_2px_#500724]">Lord of the Rings Creative Summative</Link></li>
                </ul>*/}
                <div className="text-center">
                  {/* @ts-expect-error Custom element is registered by the widget script. */}
                  <ws-widget type="adbank" iid="17604" embed="iframe"></ws-widget>
                </div>
              </div>
            </div>
            <div className="border-3 border-black outline-4 outline-white bg-white w-full h-50 justify-start">
              <header className="w-full h-8 bg-black flex">
                  <div className="ml-3 text-white font-[grapeSoda] text-2xl">
                    Blog
                  </div>  
                  <div className="mr-3 ml-auto text-white text-2xl">
                    - ☐ X
                  </div>
              </header>
              <div className="w-full font-[grapeSoda] text-3xl mt-3 ml-5 text-[#3e9be3]">
                Latest Blog Post
              </div>
              <div>
                <NewPost posts={allPosts.slice(0, 1)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}