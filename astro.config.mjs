import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.asymmetricalcollage.com',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark:  'github-dark',
      },
    },
  },
});
