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
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
};
