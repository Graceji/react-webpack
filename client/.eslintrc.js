module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		parser: 'babel-eslint',
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: 'airbnb',
	rules: {
    'indent': ['error', 2],
    'space-before-function-paren': ['error', 'always'],
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'ignore'
    }],
    'jsx-a11y/anchor-is-valid': [0]
	}
}
