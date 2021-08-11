/* eslint-disable prettier/prettier */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-console': 'off',
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-undef': 0,
    'object-curly-newline': 0,
  },
};
