# markusand's ESLint config

Very opinionated linting configuration for TypeScript and Vue projects using **ESLint 9+**.

- **ESLint recommended** + manually configured Airbnb-style rules
- **Recommended style** for [Vue 3](https://eslint.vuejs.org/rules/) and [TypeScript](https://typescript-eslint.io/)
- Very opinionated custom rules overrides
- Support for **import** linting with path alias resolution

## Requirements

- ESLint 9.0+
- Vue 3

## Installation

```bash
npm install -D eslint@^9.0.0 eslint-config-markusand
```

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import base from 'eslint-config-markusand';

export default [
  ...base,
  // Your project-specific overrides
];
```

For Vue projects:

```javascript
import vue from 'eslint-config-markusand/vue';

export default [
  ...vue,
  // Your project-specific overrides
];
```

### Aliased Imports

To resolve aliased imports, add the `paths` option in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "/@/*": ["./src/*"]
    }
  }
}
```

The import resolver will automatically use these path mappings from your TypeScript configuration.

## Migration from v1.x

Update Dependencies

```bash
npm install -D eslint@^9.0.0 eslint-config-markusand@^2.0.0
```

Delete Old Config Files. ESLint 9 no longer uses `.eslintrc.*` files.
Create an `eslint.config.js` file as shown in the Usage section above.
