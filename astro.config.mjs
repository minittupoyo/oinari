// @ts-check
import { defineConfig } from "astro/config";
import { fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      weights: [400,500,700,900],
      cssVariable: "--font-inter",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Noto Sans JP",
      weights: [400,500,700,900],
      cssVariable: "--font-noto-sans-jp",
    },
  ],
  image: {
    domains: ["storage.minittu.net","s3.ap-northeast-1.wasabisys.com"]
  }
});