module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	ignorePatterns: [
		'.eslintrc.js',
		'.github/**',
		'.vscode/**',
		'.yarn/**',
		'**/build/*',
		'**/coverage/*',
		'**/node_modules/*'
	],
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: [
		'@typescript-eslint',
		'prettier',
		'simple-import-sort'
	],
	rules: {
		// Sort imports and exports
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'@typescript-eslint/no-unused-vars': [
			2,
			{ args: 'all', argsIgnorePattern: '^_' }
		],
		"@typescript-eslint/ban-types": 0,
	},
};
