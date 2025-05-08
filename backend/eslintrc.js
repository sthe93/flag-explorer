module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'windows'], // or 'unix' if you prefer
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal'],
      'newlines-between': 'always',
    }],
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-multi-spaces': 'error',
  },
};
