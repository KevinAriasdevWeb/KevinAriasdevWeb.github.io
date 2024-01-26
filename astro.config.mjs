import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://KevinAriasdevWeb.github.io',
  base: '/portfolio-dev',
})