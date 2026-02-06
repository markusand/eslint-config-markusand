import vuePlugin from 'eslint-plugin-vue';
import importX from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import baseConfig, { sharedRules, importRules } from './base.js';

export default [
  // Spread base config
  ...baseConfig,

  // Vue plugin recommended config for Vue 3
  ...vuePlugin.configs['flat/recommended'],

  // Configuration for Vue files
  {
    files: ['**/*.vue'],
    plugins: {
      'import-x': importX,
    },
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
      },
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          extensions: ['.ts', '.vue', '.json', '.yaml'],
        }),
      ],
    },
    rules: {
      ...sharedRules,
      ...importRules,
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
];
