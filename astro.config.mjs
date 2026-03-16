// Astro configuration
// TESTING: deployed at elledub-lw.github.io/asymmetrical-collage-astro
// CUTOVER: remove base, set site to https://www.asymmetricalcollage.com

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://elledub-lw.github.io',
  base: '/asymmetrical-collage-astro/',
});
