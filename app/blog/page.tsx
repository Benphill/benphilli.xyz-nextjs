import Link from "next/link";
import "./styles.css"
import Head from 'next/head'
import Image from "next/image";
import Kindle from "../kindlescreensaver";
import { db } from "@/src/db";
import { posts } from "@/src/db/schema";
import { desc } from "drizzle-orm";

export const revalidate = 0; // Disable caching for this page

export const metadata = {
  title: 'Ben ~ Jasper',
  description: 'Ben&apos;s Site',
};

export default async function BlogPage() {
  
    const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));
  
    return (
      <div className="w-[100%] text-pink-950 font-mono">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
        <div className="bg-maincol basis-[100%] rounded-lg border-1 border-black h-52 flex justify-items-start">
          <div className="mt-auto mb-auto ml-3">
            <h1 className="text-7xl font-bold font-mono text-shadow-[0px_0px_2px_#500724]">ben ~ jasper - Blog</h1>
            <br />
            <p className="">Works on mobile, better on computer.</p>
          </div>
          <div className="lg:visible invisible">
            <Kindle />
          </div>
        </div>
        <div className="h-165 basis-1/1 lg:flex items-start pb-5 min-w-0 max-w-[100%]">          
          <div className="basis-3/10">
            <div className="bg-maincol mt-4 p-2 border-1 rounded-lg border-black">
              <div className="flex w-full justify-items-center">
                <h1 className="text-2xl font-bold font-mono text-shadow-[0px_0px_2px_#500724]">~ Navigation</h1>
                <Image src="https://web.archive.org/web/20060309092017if_/http://www.geocities.com/dazed_mirage/flowerpuffspin.gif" alt="flower spin" width={20} height={20} className="h-[20px] mt-auto mb-auto mr-auto ml-2"/>
                </div>
                <Link href="/" className="hover:text-shadow-[0px_0px_2px_#500724]">
                <br /> - home <br />
                </Link>
                <Link href="/blog" className="hover:text-shadow-[0px_0px_2px_#500724]">
                - blog <br />
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
        </div>
          <div className="bg-maincol basis-7/10 max-w-5xl lg:ml-3 mt-4 border-1 rounded-lg border-black h-135 min-w-0 overflow-x-hidden overflow-y-auto text-center">
            <h1 className="text-4xl font-bold font-mono text-shadow-[0px_0px_2px_#500724] text-center mt-4">~ Blog Posts ~</h1>
            <br />
            <br />
                {allPosts.length === 0 ? (
                    <p className="text-gray-600">No posts yet.</p>
                ) : (
                    <div className="space-y-6">
                    {allPosts.map((post) => (
                        <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                        >
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-500 text-sm">
                            {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                        </Link>
                    ))}
                    </div>
                )}
          </div>
        </div>
      </div>
  );
}