const { defineConfig } = require('@vue/cli-service')
//node获取本地ip
const os = require('os')
let host = '0.0.0.0'
try {
  const network = os.networkInterfaces()
  host = network[Object.keys(network)[0]][1].address
} catch {
  host = 'localhost'
}
module.exports = defineConfig({
  //基础路径
  publicPath: '',
  //保存时格式检查
  lintOnSave: true,
  //调整webpack配置
  configureWebpack: {
    resolve: {
      //路径别名
      alias: {
        public: '/public'
      }
    }
  },
  //开发环境配置
  devServer: {
    //ip
    host,
    //自动打开浏览器
    open: true,
    //请求路径代理
    proxy: process.env.VUE_APP_REQUEST_PROXY,
  },
  transpileDependencies: true
})
