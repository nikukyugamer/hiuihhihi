module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': ['error'],
  },
}
