import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

const ASSET_URL = process.env.ASSET_URL || '';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: `${ASSET_URL}/bird-pay/`,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
