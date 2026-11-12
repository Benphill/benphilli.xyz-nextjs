"use server";

import { db } from "@/src/db";
import { posts } from "@/src/db/schema";
import { eq, sql } from "drizzle-orm";
import { cookies } from "next/headers";

export async function likePost(postId: number) {
    const cookieStore = await cookies();
    const cookieName = `liked_post_${postId}`;

    if (cookieStore.has(cookieName)) {
        return { success: false, message: "You have already liked this post." };
    }

    try {
        await db
            .update(posts)
            .set({
                likes: sql`COALESCE(${posts.likes}, 0) + 1`,
            })
            .where(eq(posts.id, postId));
        
            cookieStore.set(cookieName, "true", {
                maxAge: 60 * 60 * 24 * 365,
                path: "/",
                sameSite: "strict",
            });

            return { success: true };
    } catch (error) {
        console.error("didnt like post ;-;", error);
        return { success: false, message: "Internal server error" };
    }
}