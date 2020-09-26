module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'spaced-comment': ['error', 'always'],
    semi: ['error', 'never'],
    'comma-style': ['error', 'last'],
  },
}
