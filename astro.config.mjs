// @ts-check
import { defineConfig } from "astro/config";
import remarkBreaks from "remark-breaks";
import remarkLinkCard from "remark-link-card-plus";
import remarkCallout from "@r4ai/remark-callout";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), expressiveCode(), react()],
  site: "https://blog.minittu.net",
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["storage.minittu.net", "s3.ap-northeast-1.wasabisys.com"],
  },
  markdown: {
    remarkPlugins: [
      remarkBreaks,
      [remarkLinkCard, { cache: true }],
      remarkCallout,
    ],
  },
});