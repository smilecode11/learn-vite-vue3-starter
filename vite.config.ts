import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 提示找不到 path, 安装@types/node 声明文件 `npm i -D @types/node`
import { resolve } from 'path'

const isProd = ['production'].includes(process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') //  设置 `@` 指向 `src` 目录
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  /** 设置打包路径, 根目录设置 `/` */
  base: '/my-vue3-app/',
  /** 设置开发服务 */
  server: {
    port: 9752, // 服务启动端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    /** 设置代理 */
    proxy: {
      '/api': {
        target: isProd ? 'http://127.0.0.1:9001' : 'http://127.0.0.1:9002',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/')
      }
    }
  }
})
