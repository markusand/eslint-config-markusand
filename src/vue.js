import vuePlugin from 'eslint-plugin-vue';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import baseConfig from './base.js';

export default [
  // Spread base config
  ...baseConfig,

  // Vue plugin recommended config for Vue 3
  ...vuePlugin.configs['flat/recommended'],

  // Override parser for Vue files with TypeScript
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // Custom Vue rules
  {
    rules: {
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
  },

  // Update import resolver settings for .vue files
  {
    files: ['**/*.vue'],
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          extensions: ['.ts', '.vue', '.json', '.yaml'],
        }),
      ],
    },
  },
];
