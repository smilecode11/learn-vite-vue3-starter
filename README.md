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
    |-models/ 请求目录
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

### 集成 EditorConfig 配置
* 增加 .editorconfig 文件
* 下载 VSCode 插件 EditorConfig for VS Code

### 集成 Prettier 配置
* 安装 `npm i prettier -D`
* 创建 Prettier 配置文件, 配置
* 下载 VSCode 插件 Prettier - Code formatter

### 集成 ESLint 配置
* 全局安装 `npm i -g eslint`
* 下载 VSCode 插件 Eslint
* 创建 .eslintrc.js 填写配置
* 创建工具区 .settings.json, 设置代码自动校正
  ```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  ```

### 集成 husky 和 lint-staged
> 制定规则, 通过方执行 git commit
* 安装 husky —— Git Hook 工具，可以设置在 git 各个阶段（pre-commit、commit-msg、pre-push 等）触发我们的命令。
  * 修改生成的 .husky 文件下 pre-commit 钩子, 即 git commit 前做文件校验工作
    ```
    # lint ./src 下所有文件
    eslint --fix ./src --ext .vue,.js,.ts
    ```
* 安装 lint-staged —— 在 git 暂存的文件上运行 linters。
  * package.json 添加 
    ```
    "lint-staged": {
      "*.{vue,js,ts}": "eslint --fix"
    }
    ```
  * 修改 husky pre-commit 钩子
    ```
    npx lint-staged
    ```

## 提交规范
### 集成 Commitizen 实现规范提交
> Commitizen 是一个帮助撰写规范 commit message 的工具。它有一个命令行工具 cz-cli。
* 安装 `cnpm install commitizen -D`, 并全局安装 `commitizen`
* 修改 package.json `config.commitizen`
    ```
    "config": {
      "commitizen": {
        "path": "./node_modules/cz-customizable"
      }
    }
    ```

### 集成 commitlint 验证提交规范
* 安装 `npm i @commitlint/config-conventional @commitlint/cli -D`
* 创建 commitlint.config.js 文件, 填写内容
  ```
  module.exports = { extends: ['@commitlint/config-conventional'] }
  ```
* 使用 husky 的 commit-msg hook 触发验证提交信息的命令
