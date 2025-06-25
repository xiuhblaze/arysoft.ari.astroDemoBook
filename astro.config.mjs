// @ts-check
import { defineConfig, envField } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  env: {
      schema: {
          SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }),
          SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public'}),
      }
  },

  adapter: cloudflare()
});