module.exports = module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
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
    "no-shadow": "off",
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': ['error', { 
      devDependencies: true,
    }],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
    }],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
    '@typescript-eslint/no-unused-vars': ['error', {
      ignoreRestSiblings: true,
    }],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: { '/@': './src' },
        extensions: ['.ts', '.json', '.yaml'],
      },
    },
  },
};
