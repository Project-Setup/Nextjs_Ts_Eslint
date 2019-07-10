module.exports = {
  presets: [
    [
      'next/babel',
      {
        'styled-jsx': {},
        'preset-env': {},
        'preset-react': {},
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: { node: 'current' },
          },
        ],
        '@babel/react',
        '@babel/typescript',
      ],
    },
  },
};
