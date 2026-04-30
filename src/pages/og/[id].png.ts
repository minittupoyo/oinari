import type { APIRoute, GetStaticPaths } from "astro";
import { type CollectionEntry } from "astro:content";
import { render } from "takumi-js";
import stylesheet from "../../styles/global.css?inline";
import { OgImage } from "../../components/OgImage";
import React from "react";
import fs from "node:fs";
import path from "node:path";
import { getPosts } from "../../lib/blog";
import { loadDefaultJapaneseParser } from "budoux";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post }
  }))
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: CollectionEntry<"blog"> };
  const parser = loadDefaultJapaneseParser();
  const title = parser.parse(post.data.title).join("\u200B");
  const description = parser.parse(post.data.description).join("\u200B");
  const buffer = await render(React.createElement(OgImage, { post }), {
    width: 1200,
    height: 630,
    format: "png",
    stylesheets: [stylesheet],
    fonts: [
      {
        name: "LINE Seed JP",
        weight: 400,
        data: fs.readFileSync(path.join(process.cwd(), "src/assets/fonts/LINESeedJP-Regular.ttf"),)
      },
      {
        name: "LINE Seed JP",
        weight: 700,
        data: fs.readFileSync(path.join(process.cwd(), "src/assets/fonts/LINESeedJP-Bold.ttf"),)
      }
    ]
  })
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" }
  })
}