// @ts-check
import { defineConfig } from "astro/config";
import remarkBreaks from "remark-breaks";
import remarkLinkCard from "remark-link-card-plus";
import remarkCallout from "@r4ai/remark-callout";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), expressiveCode()],

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
