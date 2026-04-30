import type { CollectionEntry } from "astro:content";
import { loadDefaultJapaneseParser } from "budoux";

type Props = {
  post: CollectionEntry<"blog">;
};

const parser = loadDefaultJapaneseParser();

const format = (text: string) => parser.parse(text).join("\u200B");

export const OgImage = ({ post }: Props) => (
  <div
    className="flex h-full w-full flex-col justify-center bg-white p-24 text-zinc-900"
    style={{ fontFamily: "LINE Seed JP" }}
  >
    <div className="flex flex-col gap-8">
      <span className="text-7xl">{post.data.emoji}</span>
      <span className="line-clamp-2 text-7xl leading-snug font-bold break-keep">
        {format(post.data.title)}
      </span>
      <span className="line-clamp-2 text-3xl font-normal break-keep text-zinc-700">
        {format(post.data.description)}
      </span>
    </div>
  </div>
);
