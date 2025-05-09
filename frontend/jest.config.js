// jest.config.js
module.exports = {
  resolver: './jest.resolver.js',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react-router-dom)/'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ]
};