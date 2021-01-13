# Example Project Setup with NextJs, Typescript, Eslint, Jest and Emotion.

## Dependency Versions

- NextJs v10.0.5
- react v17.0.1
- Typescript v4.1.3
- @emotion/react v11.1.4

## Usage of this example setup

0. setup node env
   ```sh
   nvm use || npm install
   ```
1. remove unwanted files in `public/`, `src/`
2. add `.env` and other .env files
3. preview dev progress on `http://localhost:3000/`
   ```sh
   npm run dev
   ```
4. read [Setup](#Setup) for notes

## Setup

0.  install nvm in the os
1.  ```sh
    nvm install node
    git init
    ```
2.  add `.gitignore`
3.  ```sh
    node -v > .nvmrc
    ```
4.  ```sh
    npm init -y
    ```

### [NextJs](https://nextjs.org/docs/getting-started)

1.  ```sh
    npm i -S next react react-dom
    ```
2.  add a script to your package.json like this:
    ```json
    {
      "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start"
      }
    }
    ```

### [Typescript](https://nextjs.org/docs/basic-features/typescript)

1.  ```sh
    npm i -D typescript @types/react @types/node
    ```
2.  create `tsconfig.json`
    ```json
    {
      "compilerOptions": {
        "target": "esnext",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "alwaysStrict": true,
        "skipLibCheck": true,
        "strict": false,
        "forceConsistentCasingInFileNames": true,
        "noEmit": true,
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "baseUrl": "./src"
      },
      "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
      "exclude": ["node_modules", "next.config.js"]
    }
    ```

### [Create Pages](https://nextjs.org/docs/getting-started)

1. create `src/pages` folder (or `pages`)
2. create `pages.tsx` under `src/pages/` (i.e. `src/pages/index.tsx` for `/` route)

### [Eslint and Prettier](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

1.  ```sh
    npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-import-resolver-typescript
    npm i -D eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react-hooks
    npm i -D prettier eslint-config-prettier eslint-plugin-prettier
    ```
2.  create `.eslintrc.js`
    ```js
    module.exports = {
      env: {
        browser: true,
        node: true,
        es2020: true,
        jest: true,
      },
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
      extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'import/extensions': [
          1,
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
        'react/jsx-filename-extension': [
          1,
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/react-in-jsx-scope': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': [2, { custom: 'ignore' }],
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
        'prettier/prettier': 2,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2,
        'no-bitwise': 2,
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          typescript: {},
        },
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
    };
    ```
3.  create `.prettierrc.js`
    ```js
    module.exports = {
      semi: true,
      trailingComma: 'es5',
      singleQuote: true,
      printWidth: 80,
      tabWidth: 2,
    };
    ```

### [Jest](https://medium.com/@miiny/unit-test-next-js-with-jest-and-enzyme-5b305a8e29fe)

1.  ```sh
    npm i -D jest babel-jest @types/jest @next/env
    ```
2.  add scripts in `package.json`
    ```json
    "scripts": {
      "test": "jest",
      "test:watch": "jest --watch",
      "test:coverage": "jest --coverage"
    },
    ```
3.  create `jest.config.js`
    ```js
    module.exports = {
      moduleFileExtensions: ['ts', 'tsx', 'js'],
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
      globals: {
        NODE_ENV: 'test',
      },
      snapshotSerializers: ['enzyme-to-json/serializer'],
      transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest',
      },
      coveragePathIgnorePatterns: [
        '/node_modules/',
        'jest.setup.js',
        '<rootDir>/configs/',
        'jest.config.js',
        '.json',
        '.snap',
      ],
      setupFiles: ['<rootDir>/jest/jest.setup.js'],
      coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/mocks.js',
        '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js',
      },
      moduleDirectories: ['node_modules', 'src'],
    };
    ```
4.  create `babel.config.js`
    ```js
    module.exports = {
      presets: ['next/babel'],
    };
    ```
5.  create `jest/jest.setup.js`

    ```js
    import { join } from 'path';
    import { loadEnvConfig } from '@next/env';

    // to load '.env' files in test
    loadEnvConfig(join(__dirname, '../'));
    ```

6.  change `env` in `.eslintrc.js`
    ```js
    env: {
      browser: true,
      node: true,
      jest: true
    },
    ```

### [EmotionJs](https://emotion.sh/docs/install)

1.  ```sh
    npm i -S @emotion/react
    npm i -D @emotion/babel-plugin @emotion/eslint-plugin @emotion/jest
    ```
2.  change `babel.config.js`
    ```js
    module.exports = {
      presets: [
        [
          'next/babel',
          {
            'preset-react': {
              runtime: 'automatic',
              importSource: '@emotion/react',
            },
          },
        ],
      ],
      plugins: ['@emotion/babel-plugin'],
    };
    ```
3.  add rules and plugins to `.eslintrc.js`
    ```js
    module.exports = {
      // ...
      rules: {
        // ...
        '@emotion/no-vanilla': 'error',
        '@emotion/import-from-emotion': 'error',
        '@emotion/styled-import': 'error',
      },
      // ...
      plugins: [
        '@emotion',
        // ...
      ],
      // ...
    };
    ```
4.  add `jest/jest.setupAfterEnv.js`

    ```js
    import { matchers } from '@emotion/jest';

    expect.extend(matchers);
    ```

5.  add serializers and setup files to `jest/jest.config.js`
    ```js
    // ...
    snapshotSerializers: ['@emotion/jest/serializer'],
    // ...
    setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
    // ...
    ```
6.  add to `tsconfig.json`
    ```json
    {
      "compilerOptions": {
        "jsxImportSource": "@emotion/react"
      }
    }
    ```

### [Deploy to Github Pages](https://github.com/zeit/next.js/issues/3335#issuecomment-489354854)

(deploy to /docs intead of using gh-pages branch; replace {folder} with the project name in github repo)

1. add `.env.production`
   ```sh
   NEXT_PUBLIC_LINK_PREFIX=/{folder}
   ```
2. create `LINK_PREFIX` in `next.config.js`
   ```js
   const LINK_PREFIX = process.env.NEXT_PUBLIC_LINK_PREFIX || '';
   module.exports = () => ({
     basePath: LINK_PREFIX,
   });
   ```
3. change `scripts` in `package.json`
   ```json
   {
     "scripts": {
       "export": "NODE_ENV=production npm run build && next export -o docs && touch docs/.nojekyll"
     }
   }
   ```
