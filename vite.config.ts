import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import { compression } from 'vite-plugin-compression2';
import ViteRestart from 'vite-plugin-restart';
import { createSvgSpritePlugin } from './src/js/svg-sprite-plugin.js';

export default defineConfig(({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',
    publicDir: 'src/public',
    build: {
        outDir: 'web/dist/',
        emptyOutDir: true,
        sourcemap: 'hidden',
        manifest: true,
        rolldownOptions: {
            input: {
                app: 'src/app.js',
            },
            output: {
                codeSplitting: {
                    groups: [
                        {
                            name: 'vendor',
                            test: /node_modules[\\/](alpinejs|gsap)/,
                            priority: 10,
                        },
                    ],
                },
            },
        },
    },
    plugins: [
        tailwindcss(),
        compression({
            include: /\.(js|mjs|json|css)$/i,
        }),
        ViteRestart({
            reload: ['templates/**/*'],
        }),
        createSvgSpritePlugin(), // Custom plugin to create an SVG sprite from the icons folder - ./src/js/svg-sprite-plugin.js
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
            ignored: ['storage/**', 'vendor/**', 'node_modules/**', 'web/**'],
        }
    }
}));