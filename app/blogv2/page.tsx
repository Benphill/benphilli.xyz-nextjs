import Link from "next/link";
import "./styles.css"
import Head from 'next/head'
import Image from "next/image";
import Kindle from "../kindlescreensaver";
import { db } from "@/src/db";
import { posts } from "@/src/db/schema";
import { desc } from "drizzle-orm";
import { eq } from "drizzle-orm";
import PostSelector from "./PostSelector";

export const revalidate = 0;
export let Selpost = 0;



export const metadata = {
  title: 'Ben ~ Jasper',
  description: 'Ben&apos;s Site',
};


export default async function BlogPage() {
  
    const allPosts = await db
    .select()
    .from(posts)
    .orderBy(desc(posts.createdAt));
    
    return (
      <div className="w-full h-full bg-white">
          <div className="w-full flex justify-center absolute top-0 bg-white">
            <Link href="/" className="font-[grapeSoda] text-2xl ml-auto mr-auto">
              Home
            </Link>
            <p className="font-[grapeSoda] line-through text-2xl ml-auto mr-auto">
              Obsessions
            </p>
            <p className="font-[grapeSoda] line-through text-2xl ml-auto mr-auto">
              Guestbook
            </p>
            <p className="font-[grapeSoda] line-through text-2xl ml-auto mr-auto">
              Gallery
            </p>
          </div>
          <PostSelector posts={allPosts} />
        </div>
  );
}