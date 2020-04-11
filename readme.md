# Example Project Setup with NextJs, Typescript, Eslint, Jest and Emotion..

## Versions
* NextJs v9.3.4
* Emotion v10

## Usage of this example setup

0. setup node env
    ```sh
    nvm use
    npm install
    ```
1. remove unwanted files in `public/`, `src/utils`, `src/__tests/`, `src/components`, `src/redux`, and `pages`
2. modify `config/publicRuntimeConfig.js`
3. preview dev progress on `http://localhost:3000/`
    ```sh
    npm run dev
    ```
4. read [Setup](#Setup) for notes

## Setup

0. install nvm in the os
1. 
   ```sh
   nvm install node
   git init
   ```
2. add `.gitignore`
4. 
    ```sh
    node -v > .nvmrc
    ```
4. 
    ```sh
    npm init -y
    ```

### [NextJs](https://github.com/zeit/next.js#how-to-use)
1. 
    ```sh
    npm i -S next react react-dom
    ```
2. add a script to your package.json like this:
    ```json
    {
      "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start",
        "export": "NODE_ENV=production npm run build && next export -o docs && touch docs/.nojekyll"
      }
    }
    ```
    (the export script is for github pages)

### [Typescript](https://github.com/zeit/next.js#typescript)

1.
    ```sh
    npm i -D typescript @types/react @types/react-dom @types/node
    ```
2. create `tsconfig.json`
    ```json
    {
      "compilerOptions": {
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "alwaysStrict": true,
        "esModuleInterop": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "lib": [
          "dom",
          "es2017"
        ],
        "module": "esnext",
        "moduleResolution": "node",
        "noEmit": true,
        "typeRoots": [
          "./node_modules/@types"
        ],
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "resolveJsonModule": true,
        "removeComments": false,
        "skipLibCheck": true,
        "strict": true,
        "target": "esnext",
        "forceConsistentCasingInFileNames": true
      },
      "exclude": [
        "node_modules",
        "next.config.js"
      ],
      "include": [
        "**/*.ts",
        "**/*.tsx"
      ]
    }
    ```

### [Create Pages](https://github.com/zeit/next.js#typescript)
1. create `src/pages` folder (or `pages`)
2. create `pages.tsx` under `src/pages/` (i.e. `src/pages/index.tsx` for `/` route)


### [Eslint and Prettier](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
1. 
    ```sh
    npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
    npm i -D eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react-hooks
    npm i -D prettier eslint-config-prettier eslint-plugin-prettier
    ```
2. create `.eslintrc.js`
    ```js
    module.exports =  {
      parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
      extends:  [
        'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'airbnb',  //Uses airbnb recommended rules
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures:  {
          jsx:  true,  // Allows for the parsing of JSX
        },
      },
      env: {
        browser: true,
        node: true
      },
      rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
          'vars': 'all',
          'args': 'after-used',
          'ignoreRestSiblings': false
        }],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-first-prop-new-line': 0,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-namespace': 'off',
        'jsx-a11y/anchor-is-valid': [ 'error', {
          'components': [ 'Link' ],
          'specialLink': [ 'hrefLeft', 'hrefRight' ],
          'aspects': [ 'invalidHref', 'preferButton' ]
        }],    
        'react/prop-types': 'off',
        'import/extensions': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-extraneous-dependencies': [
          'error',
          {
            'devDependencies': true
          }
        ],
        'comma-dangle': [
          'error',
          {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'never'
          }
        ],
        "react-hooks/rules-of-hooks": "error",
        'react-hooks/exhaustive-deps': 'off',
        'no-bitwise': 'off'
      },
      plugins: [
        '@typescript-eslint/eslint-plugin',
        'react-hooks',
      ],
      settings:  {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
        react:  {
          version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
    };
    ```
3. create `.prettierrc.js`
    ```js
    module.exports =  {
      semi:  true,
      trailingComma:  'es5',
      singleQuote:  true,
      printWidth:  80,
      tabWidth:  2,
    };
    ```

### [Jest and Enzyme](https://medium.com/@miiny/unit-test-next-js-with-jest-and-enzyme-5b305a8e29fe)
1. 
    ```sh
    npm i -D jest babel-jest
    ```
2. add scripts in `package.json`
    ```json
    "scripts": {
      "test": "jest",
      "test:watch": "jest --watch",
      "test:coverage": "jest --coverage"
    },
    ```
3. 
    ```sh
    npm i -D enzyme enzyme-adapter-react-16 enzyme-to-json
    npm i -D typescript @types/enzyme @types/enzyme-adapter-react-16 @types/jest
    ```
4. create `jest.config.js`
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
    };
    ```
5. create `babel.config.js`
    ```js
    module.exports = {
      presets: ['next/babel'],
    };
    ```
6. create `jest/jest.setup.js`
    ```js
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    // Make sure you can use "publicRuntimeConfig" within tests.
    // import { setConfig } from 'next/config';
    // import publicRuntimeConfig from '../configs/publicRuntimeConfig';

    // setConfig({ publicRuntimeConfig });
    Enzyme.configure({ adapter: new Adapter() });
    ```
7. change `env` in `.eslintrc.js`
    ```js
    env: {
            browser: true,
            node: true,
            jest: true
          },
    ```

### [EmotionJs](https://emotion.sh/docs/install)
1. 
    ```sh
    npm i -S @emotion/core
    npm i -D @emotion/babel-preset-css-prop jest-emotion eslint-plugin-emotion
    ```
2. change `babel.config.js`
    ```js
    module.exports = {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {},
            'preset-react': {},
          },
        ],
        '@emotion/babel-preset-css-prop',
      ],
    };
    ```
3. add rules and plugins to `.eslintrc.js`
    ```js
    module.exports = {
      // ...
      rules: {
        // ...
        "emotion/no-vanilla": "error",
        "emotion/import-from-emotion": "error",
        "emotion/styled-import": "error",
      },
      // ...
      plugins: [
        'emotion',
        // ...
      ],
      // ...
    }
    ```
4. add `jest/jest.setupAfterEnv.js`
    ```js
    import { matchers } from 'jest-emotion';

    expect.extend(matchers);
    ```
5. add serializers and setup files to `jest/jest.config.js`
    ```js
    // ...
    snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
    // ...
    setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
    // ...
    ```

### Optional chaining
1. 
    ```sh
    npm i -D @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining
    ```
2. add the plugins to `babel.config.js`
    ```js
    module.exports = {
      presets: [
        // ...
      ],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
    };
    ```

## Deprecated
**Go to different branches for different Project Setup**
- `pwa-amp` -- with Amp, Redux-Saga, Emotion
- `redux-saga` -- with Redux-Saga, Emotion
- `redux-code-splitting` -- with Redux, Emotion
- `emotion` -- with Emotion
- `styled-jsx` -- with built-in Styled-JSX

This is an example project setup.
Packages used for all branches:
* NextJs
* Typescript
* Eslint, Prettier
* Jest, Enzyme
* Next-Offline
* Next-Manifest
