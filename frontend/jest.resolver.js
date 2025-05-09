// jest.resolver.js
const path = require('path');
const defaultResolver = require('jest-resolve').default;

module.exports = (moduleName, options) => {
  if (moduleName === 'react-router-dom') {
    return path.join(
      options.basedir,
      'node_modules',
      'react-router-dom',
      'dist',
      'react-router-dom.js'
    );
  }
  return defaultResolver(moduleName, options);
};