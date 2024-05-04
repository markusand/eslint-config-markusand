# markusand's ESLinft config

Very opinionated linting configuration for TypeScript and Vue.

- **Airbnb style** guide for [Javascript](https://github.com/airbnb/javascript) and [TypeScript](https://typescript-eslint.io/rules/)
- **Recommended style** for [Vue](https://eslint.vuejs.org/rules/) and [TypeScript](https://github.com/vuejs/eslint-config-typescript)
- :warning: Very opinionated custom rules overrides
- Support for **import** linting

## Usage

Install the dependency

```bash
npm i -D eslint-config-markusand
```

Add the config to the **.eslintrc** file. Use `eslint-config-markusand/vue` if the project uses Vue.

```json
{
  "extends": ["eslint-config-markusand"],
}
```

### Aliased imports

To resolve aliased imports, add the paths the option in `tsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "/@/*": ["./src/*"],
    },
  },
}
```

If using Vite, add configuration in `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '/@', replacement: path.resolve(__dirname, './src') },
    ],
  },
});
```
