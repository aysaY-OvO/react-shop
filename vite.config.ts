import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { svgSpritemap } from 'vite-plugin-svg-spritemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins:
    [
      react(),
      svgSpritemap({
        pattern: './src/assets/image/svg/*.svg',
      })
    ],
})
