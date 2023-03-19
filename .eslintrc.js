module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [
    'airbnb-base/legacy',
  ],
  rules: {
    'no-console': 'off',
    'no-param-reassign': [2, { props: false }],
  },
  env: {
    browser: true,
  },
};
