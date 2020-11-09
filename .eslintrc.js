module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "space-before-function-paren": 0,
    "no-trailing-spaces": 0,
    "no-var": 2,
    "no-const-assign":2,
    "no-multiple-empty-lines":0,
    "indent":0,
    "no-compare-neg-zero":2
  }
}
