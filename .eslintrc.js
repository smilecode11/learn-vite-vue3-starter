module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    commonjs: true,
    amd: true
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: '12',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: { 'import/resolver': { typescript: {} } },
  rules: {
    'vue/multi-word-component-names': ['off'],
    'vue/no-multiple-template-root': ['off'],
    'import/no-extraneous-dependencies': [
      //  开发依赖
      'error',
      {
        devDependencies: ['**vite**', '**@vitejs**'],
        optionalDependencies: false
      }
    ],
    'import/extensions': ['never'] //  引入文件扩展名校验
  }
}
