import { defineConfig } from 'vite';
import typegpuPlugin from 'unplugin-typegpu/vite';
import tailwindVite from '@tailwindcss/vite';

export default defineConfig({
  base: '/project-1379/',
  plugins: [
    tailwindVite(),
    typegpuPlugin(),
  ],
});
