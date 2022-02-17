module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'plugin:vue/essential',
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: '12',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    'no-plusplus': [
      0,
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-param-reassign': [
      0,
      {
        props: false
      }
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'class-methods-use-this': ['off'],
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
    'import/extensions': ['off'] //  引入文件扩展名校验
  }
}
