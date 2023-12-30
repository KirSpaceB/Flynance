export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ], 
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules', 'src/database', 'src/test', 'src/types'],
  reporters: ['default', 'jest-junit'],
  globals: { 'ts-jest': { diagnostics: false } },
  transform: {},
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png)$": "identity-obj-proxy",
  },
};