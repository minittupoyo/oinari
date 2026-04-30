import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"blog">;

export async function getPosts() {
  const posts = await getCollection("blog", ({ data }) => !import.meta.env.PROD ? data.draft !== true:true)
  return posts.sort((a,b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export function getPrevNextById(posts: Post[], id: string) {
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}