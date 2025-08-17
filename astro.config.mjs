// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://the3amclub.vercel.app',
  redirects: {
    "/episodes": "/episodes/1",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
});