import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // For GitHub Pages: uncomment and set to your repo name
  // base: '/journey-camp',
});
