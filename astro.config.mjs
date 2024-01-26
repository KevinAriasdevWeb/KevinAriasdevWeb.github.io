import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://KevinAriasdevWeb.github.io',
  base: '/portfolio-dev',
})