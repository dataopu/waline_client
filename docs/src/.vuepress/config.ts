import { viteBundler } from '@vuepress/bundler-vite';
import { redirectPlugin } from '@vuepress/plugin-redirect';
import { defineUserConfig } from 'vuepress';
import { path } from 'vuepress/utils';

import theme from './theme.js';

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Waline',
      description: '收藏那些有用的东西，你的资源百科全书✨',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Waline',
      description: 'A Simple, Safe Comment System.',
    },
  },

  markdown: {
    code: {
      lineNumbers: 20,
    },
  },

  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['@fancyapps/ui'],
      },
    },
  }),

  theme,

  plugins: [redirectPlugin()],

  alias: {
    '@MigrationTool': path.resolve(__dirname, './components/MigrationTool.vue'),
    '@theme-hope/components/HomePage': path.resolve(
      __dirname,
      './components/HomePage',
    ),
    '@theme-hope/components/NormalPage': path.resolve(
      __dirname,
      './components/NormalPage',
    ),
  },
});
