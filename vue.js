const base = require('./index.js');

module.exports = {
  ...base,
  extends: [
    ...base.extends,
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  plugins: [
    ...base.plugins,
    'vue',
  ],
  parser: 'vue-eslint-parser',
  rules: {
    ...base.rules,
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 4,
      multiline: 1,
    }],
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: { '/@': './src' },
        extensions: ['.ts', '.json', '.vue', '.yaml'],
      },
    },
  },
};
