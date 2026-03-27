// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://willhord.dev",
  integrations: [svelte(), sitemap()],
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      noExternal: [
        "@lucide/svelte",
        "@tabler/icons-svelte",
        "bits-ui",
        "svelte-toolbelt",
        "svelte-render",
        "runed",
      ],
    },
  },
});
