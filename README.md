# Vue 3 + Typescript + Vite
[学习参考文献 https://juejin.cn/post/6951649464637636622#heading-4](https://juejin.cn/post/6951649464637636622#heading-4)

## 项目结构目录
|-public
|-src/
    |-assets/   静态资源目录
    |-common/   通用类库目录
    |-components/   公共组件目录
    |-router/   路由配置目录
    |-store/    状态管理目录
    |-style/    通用 css 目录
    |-utils/    工具函数目录
    |-views/    页面目录
    |-App.vue
    |-main.ts
    |-env.d.ts
|-tests/    单元测试目录
|-index.html
|-tsconfig.json //  TypeScript 配置文件
|-vite.config.ts    //  vite 配置文件
|-package.json

## 架构搭建
### 集成路由工具 Vue Router
* Vue Router 基础使用

### 集成状态管理工具 Vuex
* Vuex 基础使用

### 集成 ElementPlus
* 全局引入 ElementPlus

### 集成 axios
* 请求拦截
* 响应拦截
* 环境判断

### 集成 Scss
> vite 本身已集成预处理样式 loader, 无需安装 loader 或配置, 安装预处理语言即可
* npm i -D scss
* npm i -D less
* npm i -D stylus

## 代码规范
