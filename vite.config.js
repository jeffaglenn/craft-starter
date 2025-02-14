/** @type {import('vite').UserConfig} */

import tailwindcss from '@tailwindcss/vite'
import ViteRestart from 'vite-plugin-restart';

export default ({command}) => ({
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
            }
        },
    },
    plugins: [
        tailwindcss(),
        ViteRestart({
            reload: [
                'templates/**/*',
            ],
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
        origin: `${process.env.DDEV_PRIMARY_URL.replace(/:\d+$/, "")}:3000`,
        cors: {
            origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(\.ddev\.site)(?::\d+)?$/,
        },
    }
});