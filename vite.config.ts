import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/guia-turistico-cristino-castro/',
      server: {
        port: 3000,
        host: '0.0.0.0',
        headers: {
          'Content-Type': 'application/javascript; charset=utf-8'
        },
        middlewareMode: false,
        fs: {
          strict: false
        }
      },
      build: {
        target: ['es2015', 'chrome58', 'firefox57', 'safari11'],
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
          output: {
            format: 'es',
            entryFileNames: 'assets/[name]-[hash].js',
            chunkFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]',
            manualChunks: undefined
          }
        }
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
