import { defineConfig } from 'dumi'

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isDev = env === 'development'

export default defineConfig({
  base: isDev ? '/' : '/sandpack-file-explorer/',
  publicPath: '/sandpack-file-explorer/',
  exportStatic: {},
  resolve: {
    docDirs: ['docs-src'],
  },
  outputPath: 'docs',
  themeConfig: {
    name: 'sandpack-file-explorer',
  },
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  ],
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  styles: [
    `
  .dumi-default-header-left {
    width: auto;
  }
  `,
  ],
})
