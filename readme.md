# PWA Project Setup with NextJs, Typescript, Eslint

This is an example project setup.
Packages used:
* NextJs
* Typescript
* Eslint, Prettier
* Jest, Enzyme
* Emotion
* Redux
* Next-Offline
* Next-Manifest

## Usage of this example setup

0. setup node env
    ```sh
    nvm use
    npm install
    ```
1. remove unwanted files in `static/`, `src/utils`, `src/__tests/`, `src/components`, `src/redux`, and `pages`
2. modify `prodAssetPrefix` in `next.publicRuntimeConfig.js`
3. preview dev progress on `http://localhost:3000/`
    ```sh
    npm run dev
    ```
4. deploy the gh-pages
    ```sh
    npm run deploy
    ```
5. merge to github master branch and use `/docs` for gh-pages in github project repo settings

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
    npm i -P next react react-dom
    ```
2. add a script to your package.json like this:
    ```json
    {
      "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
      }
    }
    ```

### [Typescript](https://github.com/zeit/next.js#typescript)

1.
    ```sh
    npm i -D typescript @types/react @types/react-dom @types/node`
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
1. create `pages` folder
2. create `pages.tsx` under `pages/` (i.e. `pages/index.tsx` for `/` route)


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
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-object-literal-type-assertion': ['error', {'allowAsParameter': true}],
        'jsx-a11y/anchor-is-valid': [ 'error', {
          'components': [ 'Link' ],
          'specialLink': [ 'hrefLeft', 'hrefRight' ],
          'aspects': [ 'invalidHref', 'preferButton' ]
        }],    
        'react/prop-types': 'off',
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
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off'
      },
      plugins: [
        '@typescript-eslint/eslint-plugin',
        'react-hooks'
      ],
      settings:  {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
          }
        },
        react:  {
          version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
    }
    ```
3. create `.prettierrc.js`
    ```js
    module.exports =  {
      semi:  true,
      trailingComma:  'es5',
      singleQuote:  true,
      printWidth:  100,
      tabWidth:  2,
    };
    ```

### [Jest and Enzyme](https://medium.com/@miiny/unit-test-next-js-with-jest-and-enzyme-5b305a8e29fe)
1. 
    ```sh
    npm i -D jest babel-jest @babel/core @babel/preset-env @babel/preset-react
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
      setupFiles: ['<rootDir>/jest.setup.js'],
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
6. create `jest.setup.js`
    ```js
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    // Make sure you can use "publicRuntimeConfig" within tests.
    // import { setConfig } from 'next/config';
    // import publicRuntimeConfig from './ next.publicRuntimeConfig';

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
    npm i -P @emotion/core
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
3. add rules and plugins to `.eslint.js`
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
4. add `jest.setupAfterEnv.js`
    ```js
    import { matchers } from 'jest-emotion';

    expect.extend(matchers);
    ```
5. add serializers and setup files to `jest.config.js`
    ```js
    // ...
    snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
    // ...
    setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
    // ...
    ```

### [Deploy to Github Pages](https://github.com/zeit/next.js/issues/3335#issuecomment-489354854)
(deploy to /docs intead of using gh-pages branch; replace `{folder}` with the project name in github repo)

1. create `linkPrefix` in `next.publicRuntimeConfig.js`
    ```js
    const isProd = process.env.NODE_ENV === 'production';
    const prodAssetPrefix = '/{folder}';

    module.exports = {
      linkPrefix: isProd ? prodAssetPrefix : '',
      isProd,
      prodAssetPrefix,
    };
    ```
2. create `assetPrefix` in `next.config.js`
    ```js
    const publicRuntimeConfig = require('./ next.publicRuntimeConfig');
    const { linkPrefix, prodAssetPrefix } = publicRuntimeConfig;

    module.exports = {
      assetPrefix: linkPrefix,
      publicRuntimeConfig,
    };
    ```
3. change `as` prop in `next/Link` to add `linkPrefix`
    ```tsx
    // ...
    import getConfig from 'next/config';
    import Link from 'next/link';

    const { publicRuntimeConfig } = getConfig();
    export const { linkPrefix } = publicRuntimeConfig;
    // ...
    const PrefixedLink: React.FC<Link['props']> = ({ href, as = href, ...props }) => (
      <Link href={href} as={`${linkPrefix}${as}`} {...props} />
    );
    // ...
    ```
4. change `scripts` in `package.json`
    ```json
    {
      "scripts": {
        "export": "npm run build && next export",
        "deploy": "NODE_ENV=production npm run build && next export -o docs && touch docs/.nojekyll",
      }
    }
    ```

### [ServiceWorker](https://gist.github.com/kosamari/7c5d1e8449b2fbc97d372675f16b566e)
1. 
    ```sh
    npm i -P next-offline
    ```
2. add to `next.config.js` to make `service-worker.js` available at the root of project folder
    ```js
    const withOffline = require('next-offline');
    //...

    module.exports = withOffline({
      //...

      registerSwPrefix: prodAssetPrefix,
      scope: `${prodAssetPrefix}/`,
      workboxOpts: {
        swDest: 'service-worker.js',
        globPatterns: ['app/static/**/*'],
        globDirectory: '.',
        modifyURLPrefix: {
          app: linkPrefix,
        },
        runtimeCaching: [
          //...
        ],
      },

      //...
    });
    ```
3. add `<link rel="canonical" href="/{folder}" />` to `<Head />` to force redirected to `/{folder}` and allow scope of service worker works under `/{folder}/` (without [adding `service-worker-allowed` header in repsonse header](https://medium.com/dev-channel/two-http-headers-related-to-service-workers-you-never-may-have-heard-of-c8862f76cc60) to request for greater scope)
    ```tsx
    <Head>
      <Link href="/" passHref>
        <link rel="canonical" />
      </Link>
    </Head>
    ```

### [Web Mainfest](https://www.npmjs.com/package/next-manifest)
1. 
    ```sh
    npm i -P next-manifest
    ```
2. add to `next.config.js` to make `manifest.json` available at `/static/manifest/manifest.json`
    ```js
    //...
    const withManifest = require('next-manifest');
    //...

    module.exports = withManifest(
      withOffline({
        //...

        manifest: {
          /* eslint-disable @typescript-eslint/camelcase */
          short_name: '{folder}',
          name: '{folder}',
          start_url: `${prodAssetPrefix}/`,
          background_color: 'white',
          display: 'standalone',
          scope: `${prodAssetPrefix}/`,
          dir: 'ltr', // text direction: left to right
          theme_color: 'white',
          icons: [
            {
              src: `${prodAssetPrefix}/static/icons/icon192x192.png`,
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: `${prodAssetPrefix}/static/icons/icon512x512.png`,
              sizes: '512x512',
              type: 'image/png',
            },
          ],
          /* eslint-enable @typescript-eslint/camelcase */
        },

        //...
      })
    );
    ```
3. Create `<ManifestHead>` to hold mainfest related head elements and add support to other browsers
    ```tsx
    //...
    import NextHead from 'next/head';
    // @ts-ignore
    import Manifest from 'next-manifest/manifest';
    import Link, { linkPrefix } from '../Link';

    //...

    const Head: React.FC<Props> = ({
      title = '',
      description = title,
      charset = 'utf-8',
      hrefPage,
      hrefManifest,
      viewportScale,
      themeColor,
      favIconPath,
      keywords = title,
      refresh,
      appleIconPath,
      appleIconSize = '192x192',
      children,
    }) => (
      <NextHead>
        <title>{title}</title>
        <meta charSet={charset} />
        <meta name="description" content={description} />
        <Link href={hrefManifest} passHref>
          <Manifest themeColor={themeColor} initialScale={viewportScale} />
        </Link>
        {hrefPage && (
          <Link href={hrefPage} passHref>
            <link rel="canonical" />
          </Link>
        )}

        {/* favicon link */}
        {favIconPath && (
          <Link href={favIconPath} passHref>
            <link rel="shortcut icon" type="image/x-icon" />
          </Link>
        )}

        <meta name="keywords" content={keywords} />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {refresh && <meta httpEquiv="refresh" content={`${refresh}`} />}

        {/* for safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="blue" />
        <meta name="apple-mobile-web-app-title" content="With Manifest" />
        {appleIconPath && appleIconSize && (
          <Link href={appleIconPath} passHref>
            <link rel="apple-touch-icon" sizes={appleIconSize} />
          </Link>
        )}

        {/* for IE */}
        {appleIconPath && (
          <meta name="msapplication-TitleImage" content={`${linkPrefix}${appleIconPath}`} />
        )}
        {themeColor && <meta name="msapplication-TitleColor" content={themeColor} />}

        {children}
      </NextHead>
    );
    //...
    ```
4. import the `<ManifestHead>` in the page
    ```tsx
    //...
    import ManifestHead from '../src/components/Head/ManifestHead';
    import Link from '../src/components/Link';

    //...
        <ManifestHead
          title="index"
          themeColor="red"
          hrefPage="/"
          favIconPath="/static/icons/favicon.ico"
          appleIconPath="/static/icons/icon192x192.png"
          hrefManifest="/static/manifest/manifest.json"
        />
    //..
    ```
5. Make icons files (favicon.ico, icon*.png) available in the static folder

### [Redux](https://github.com/kirill-konshin/next-redux-wrapper)
1. 
    ```sh
    npm i -P redux react-redux
    npm i -D @types/react-redux
    ```
2. either use next-redux-wrapper package (`npm i -P next-redux-wrapper`) or copy the `withRedux.tsx` and `defaultConfig.ts` from the example setup `src/utils/redux` and helper function `objectAssign.ts` from `src/utils/common`
3. create custom `makeStore` function, `_app.tsx` page and other redux setup as examples in `next-redux-wrapper` repo shows

### [Redux-Saga](https://github.com/bmealhouse/next-redux-saga)
1. 
    ```sh
    npm i -P redux-saga
    ```
2. either use next-redux-saga package (`npm i -P next-redux-saga`) or copy the `withReduxSaga.tsx` from the example setup `src/utils/redux`
3. modify custom `makeStore` function, pages, and other redux setup as examples in `next-redux-saga` repo shows

#### [code splitting](https://manukyan.dev/posts/2019-04-15-code-splitting-for-redux-and-optional-redux-saga/)
1. copy `configureStore.ts`, `DynamicStoreCallbackWrap.tsx` from the example setup `src/utils/redux`
2. copy `_app.tsx` from the example setup `pages/`
3. adapt redux setup from the example setup `src/redux`
4. notice:
    1. can use `connect` from `react-redux` package and `DynamicStoreCallbackWrap` from the example to connect with store, but the `mapStateToProps` function must provide default values in case the reducer is removed; suggest using `get` from `lodash` package