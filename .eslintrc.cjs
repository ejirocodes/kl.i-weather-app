/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
  },

  overrides: [
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
};
