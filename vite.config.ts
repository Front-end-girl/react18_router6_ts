import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import postcsspxtorem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        visualizer({
            emitFile: true,
            filename: 'stats.html',
            open: true,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    css: {
        //* css模块化
        modules: {
            // css模块化 文件以.module.[css|less|scss]结尾
            generateScopedName: '[local]___[hash:base64:5]',
            hashPrefix: 'prefix',
        },
        //* 预编译支持less
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
            },
        },
        postcss: {
            plugins: [
                postcsspxtorem({
                    // 375的设计稿 使用amfe-flexble 插件
                    rootValue: 37.5,
                    propList: ['*'],
                    unitPrecision: 6,
                    selectorBlackList: ['ignore-'],
                    minPixelValue: 1,
                    mediaQuery: true,
                    replace: true,
                    exclude: e => {
                        const list = [/node_modules/, /media/]

                        return list.some(i => i.test(e))
                    },
                }),
            ],
        },
    },
})
