import { notFound } from "next/navigation";
import { db } from "@/src/db";
import { posts } from "@/src/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import Head from 'next/head'
import Image from "next/image";
import Kindle from "@/app/kindlescreensaver";
import { desc } from "drizzle-orm";

export const revalidate = 0; // Disable caching

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, params.slug))
    .limit(1);

  if (!post[0]) {
    notFound();
  }

  return (
    <div>
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
          <div className="lg:visible invisible lg:relative absolute">
            <Kindle />
          </div>
        </div>
        <div className="h-165 basis-1/1 lg:flex items-start pb-5 min-w-0 max-w-[100%] flex-nowrap">          
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
            <div className="lg:pl-4 basis-7/10">
              <div className="bg-maincol mt-4 p-2 border-1 rounded-lg border-black">
                  <h1 className="text-4xl font-bold font-mono text-shadow-[0px_0px_2px_#500724] text-center mt-4 mb-5">~ Blog Post ~</h1>
                  <h1 className="text-4xl font-bold mb-4">{post[0].title}</h1>
                  <p className="mb-8">
                    {new Date(post[0].createdAt).toLocaleDateString()}
                  </p>
                  <div className="prose prose-lg max-w-none">
                    {post[0].content.split("\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}