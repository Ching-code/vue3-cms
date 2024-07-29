/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] // vue 組件名稱多單詞組成 忽略 index.vue
      }
    ],
    'vue/no-setup-props-destruture': ['off'], // 關閉 props 解構較驗
    'no-undef': 'error'
  },
  globals: {
    ElMessage: 'readonly',
    ElMessageBox: 'readonly',
    ElLoading: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
