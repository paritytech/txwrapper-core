const base = require('@substrate/dev/config/eslint');

module.exports = {
	...base,
	ignorePatterns: [
		'.eslintrc.js',
		'.github/**',
		'.vscode/**',
		'.yarn/**',
		'**/build/*',
		'**/coverage/*',
		'**/node_modules/*'
	]
};
