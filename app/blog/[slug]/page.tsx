import { notFound } from "next/navigation";
import { db } from "@/src/db";
import { posts } from "@/src/db/schema";
import { eq } from "drizzle-orm";

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
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{post[0].title}</h1>
      <p className="text-gray-500 mb-8">
        {new Date(post[0].createdAt).toLocaleDateString()}
      </p>
      <div className="prose prose-lg max-w-none">
        {post[0].content.split("\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}