import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importX from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import globals from 'globals';

// Shared rules that can be reused in other configs (e.g., Vue)
export const sharedRules = {
  // Airbnb-style core rules (manually configured)
  'indent': ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoreComments: false,
  }],
  'quotes': ['error', 'single', { avoidEscape: true }],
  'semi': ['error', 'always'],
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
  }],
  'object-curly-spacing': ['error', 'always'],
  'array-bracket-spacing': ['error', 'never'],
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],
  'eqeqeq': ['error', 'always', { null: 'ignore' }],
  'dot-notation': ['error', { allowKeywords: true }],
  'no-eval': 'error',
  'no-with': 'error',
  'no-var': 'error',
  'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
  'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
  'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
  'prefer-template': 'error',
  'template-curly-spacing': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',

  // Custom rules from original config
  'max-len': ['error', {
    code: 100,
    ignoreTrailingComments: true,
    ignoreUrls: true,
    ignoreStrings: true,
  }],
  'no-param-reassign': ['error', {
    props: false,
  }],
  'object-curly-newline': ['error', {
    consistent: true,
    multiline: true,
  }],
  'arrow-parens': ['error', 'as-needed'],
  'object-shorthand': ['error', 'always', {
    avoidQuotes: false,
  }],
  'no-nested-ternary': 'off',
  'no-underscore-dangle': ['error', {
    allowAfterThis: true,
  }],
  'lines-between-class-members': ['error', 'always', {
    exceptAfterSingleLine: true,
  }],

  // TypeScript rules
  'no-shadow': 'off', // Disabled in favor of TS version
  '@typescript-eslint/no-shadow': ['error'],
  '@typescript-eslint/no-explicit-any': ['warn'],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
  '@typescript-eslint/no-unused-vars': ['error', {
    ignoreRestSiblings: true,
  }],
  '@typescript-eslint/no-non-null-assertion': 'off',
};

// Shared import plugin rules
export const importRules = {
  'import-x/no-absolute-path': 'off',
  'import-x/no-extraneous-dependencies': ['error', {
    devDependencies: true,
  }],
  'import-x/prefer-default-export': 'off',
  'import-x/extensions': ['error', 'ignorePackages', {
    ts: 'never',
  }],
};

export default [
  // Ignore common build directories
  {
    ignores: ['**/node_modules/', '**/dist/', '**/build/', '**/.nuxt/', '**/.output/'],
  },

  // ESLint recommended rules
  js.configs.recommended,

  // TypeScript-ESLint recommended rules
  ...tseslint.configs.recommended,

  // Main configuration for source files
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ignores: ['*.config.{js,ts,mjs,mts}', '*.setup.{js,ts}'],
    plugins: {
      'import-x': importX,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
        }),
      ],
    },
    rules: {
      ...sharedRules,
      ...importRules,
    },
  },

  // Configuration files without type-aware linting
  {
    files: ['*.config.{js,ts,mjs,mts}', '*.setup.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
];
