import { defineConfig } from 'dumi'

export default defineConfig({
  resolve: {
    docDirs: ['docs-src'],
  },
  outputPath: 'docs',
  themeConfig: {
    name: 'dumi-theme',
  },
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  ],
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
})
