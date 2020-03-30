module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  globals: {
    NODE_ENV: 'test',
  },
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
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
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setupAfterEnv.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js',
  },
};
