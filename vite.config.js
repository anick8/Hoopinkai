import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import ViteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
        progressive: true,
      },
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4,
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1)
          if (/png|jpe?g|gif|svg|webp|ico/i.test(extType)) {
            extType = 'images'
          } else if (/woff|woff2|ttf|otf|eot/i.test(extType)) {
            extType = 'fonts'
          } else if (extType === 'css') {
            return `css/[name]-[hash][extname]`
          }
          return `${extType}/[name]-[hash][extname]`
        },
      },
    },
  },
})
