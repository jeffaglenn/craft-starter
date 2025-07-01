import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
import ViteRestart from 'vite-plugin-restart';
import viteCompression from 'vite-plugin-compression';

export default defineConfig (({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',
    publicDir: 'src/public',
    build: {
        outDir: 'web/dist/',
        emptyOutDir: true,
        sourcemap: true,
        manifest: true,
        rollupOptions: {
            input: {
                app: 'src/app.js',
            },
            output: {
                manualChunks: {
                    vendor: ['alpinejs', 'gsap'],
                }
            }
        },
    },
    plugins: [
        tailwindcss(),
        viteCompression({
            filter: /\.(js|mjs|json|css|map)$/i
        }),
        ViteRestart({
            reload: [
                'templates/**/*',
            ],
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        origin: "https://craft-starter.ddev.site:5173",
        cors: {
            origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(\.ddev\.site)(?::\d+)?$/,
        },
        watch: {
            ignored: ['./storage/**', './vendor/**', './node_modules/**', './web/**'],
        }
    }
}));