// Use our own config to lint ourselves (dogfooding)
import config from './src/base.js';

export default [
  ...config,
  {
    ignores: ['tests/**', 'node_modules/**', 'dist/**', 'build/**'],
  },
];
