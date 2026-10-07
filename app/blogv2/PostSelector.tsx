"use client";

import { useState } from "react";
import type { Post } from "@/src/db/schema";
import { marked } from "marked";
import "./styles.css"
import "../styles.css"

type Props = {
  posts: Post[];
};

export function randomColour() {
  const colours = ["#3e9be331", "#f0564c31", "#fffa6031", "#b454f031", "#88f07a31", "#fa7de331"];

  const randomIndex = Math.floor(Math.random() * colours.length);
  return colours[randomIndex];
}

export default function PostSelector({ posts }: Props) {
  const [selectedPost, setSelectedPost] = useState(posts[0]);

  return (
    <div className="flex w-full h-full blogpage">
      <div className="lg:ml-10 w-100 overflow-y-auto mt-15">
        <h1 className="text-[100px] text-[#3e9be3] font-[grapeSoda]">Blog</h1>
        {posts.map((post) => (
          <div
            key={post.id}
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
          </div>
        ))}
      </div>

      <div className="ml-30 mr-10 w-200 overflow-y-auto p-5 mt-15">
        <p
          className="text-[50px] text-black font-[grapeSoda]"
          dangerouslySetInnerHTML={{ __html: marked.parse(selectedPost.title) }}
        />
        <p className="text-black whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: marked.parse(selectedPost.content) }}
        />
      </div>
    </div>
  );
}