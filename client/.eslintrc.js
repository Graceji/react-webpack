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
	}
}
