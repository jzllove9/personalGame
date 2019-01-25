module.exports = {
    // 选项...
    baseUrl: "./",
    outputDir: "dist",
    assetsDir: "assets",
    indexPath: "index.html",
    filenameHashing: true,
    pages: undefined,
    lintOnSave: true,
    runtimeCompiler: false,
    transpileDependencies: [],
    productionSourceMap: false,
    crossorigin: undefined,
    integrity: false,
    parallel: false,
    chainWebpack: (config) => {
        config.module.rule('worker')
            .test(/\.worker\.js$/i)
            .use('worker-loader')
            .loader('worker-loader');
    },
    devServer: {//代理
        port: 9999,
        // proxy:'http://192.168.255.201:8082'
    },

}