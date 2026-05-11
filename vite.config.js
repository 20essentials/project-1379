import { defineConfig } from 'vite';
import typegpuPlugin from 'unplugin-typegpu/vite';
import tailwindVite from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindVite(),
    typegpuPlugin(),
  ],
});
