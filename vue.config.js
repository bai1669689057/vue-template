module.exports = {
  runtimeCompiler: true,
  productionSourceMap: true,
  devServer: {
    proxy: {
      '/': {
        target: 'http://127.0.0.1:1234/', // 对应自己的接口
        // target: 'http://10.1.3.62:9090/', // 对应自己的接口
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/': '/'
        }
      }
    }
  }
}
