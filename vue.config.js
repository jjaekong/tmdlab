const path = require('path')
const ansiRegex = require('ansi-regex')

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, './src/assets/css/functions.scss'),
            ]
        }
    },
    configureWebpack: {
        entry: ["babel-polyfill", "./src/main.js"]
    },
    transpileDependencies: [ansiRegex],
    configureWebpack:{
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
                cacheGroups: {
                    node_vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "all",
                        priority: 1
                    }
                }
            }
        }
    }
}