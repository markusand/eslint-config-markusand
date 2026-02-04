// Use our own config to lint ourselves (dogfooding)
import config from './src/index.js';

export default [
  ...config,
  {
    ignores: ['tests/**', 'node_modules/**', 'dist/**', 'build/**'],
  },
];
