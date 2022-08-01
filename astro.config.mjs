import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ytsruh.com/", //required to generate a sitemap
  integrations: [svelte(), tailwind(), sitemap()],
});