"use client";

import { useState } from "react";
import type { Post } from "@/src/db/schema";
import { marked } from "marked";
import "./blogv2/styles.css"
import "./styles.css"
import Link from "next/link";

type Props = {
  posts: Post[];
};

export function randomColour() {
  const colours = ["#3e9be331", "#f0564c31", "#fffa6031", "#b454f031", "#88f07a31", "#fa7de331"];

  const randomIndex = Math.floor(Math.random() * colours.length);
  return colours[randomIndex];
}

export default function NewPost({ posts }: Props) {
  const [selectedPost, setSelectedPost] = useState(posts[0]);

  return (
        <div className="flex h-full mr-5 ml-5 mt-3">
            {posts.map((post) => (
            <Link
                key={post.id}
                href={'/blogv2'}
                type="button"
                onClick={() => setSelectedPost(post)}
                className="block w-full border-l-3 border-dashed text-left my-2"
                style={{ backgroundColor: randomColour() }}
            >
                <h2 className="text-3xl ml-3 font-[grapeSoda]">
                {post.title}
                </h2>
                <p className="text-sm ml-3">
                {new Date(post.createdAt).toLocaleDateString()}
                </p>
            </Link>
            ))}
        </div>
    )}