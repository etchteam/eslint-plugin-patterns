module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}