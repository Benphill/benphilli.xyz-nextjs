import { NextResponse } from "next/server";
import { db } from "@/src/db";
import { posts } from "@/src/db/schema";

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const slug = createSlug(title);

    const newPost = await db
      .insert(posts)
      .values({
        title,
        content,
        slug,
      })
      .returning();

    return NextResponse.json({ success: true, slug: newPost[0].slug });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}