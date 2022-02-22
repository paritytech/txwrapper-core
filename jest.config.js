/* eslint-disable no-undef */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// Path aliases from tsconfig.json
const {
	compilerOptions: { paths },
} = require('./tsconfig.json');
const base = require('@substrate/dev/config/jest');

module.exports = {
	...base,
	verbose: true,
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 70,
			lines: 70,
			statements: 85
		}
	},
	testEnvironment: 'node',
	testPathIgnorePatterns: ['lib', 'node_modules'],
	moduleNameMapper: pathsToModuleNameMapper(paths, {
		prefix: '<rootDir>/packages',
	}),
	modulePathIgnorePatterns: [
		'<rootDir>/lib',
		'<rootDir>/packages/txwrapper-acala/lib',
		'<rootDir>/packages/txwrapper-core/lib',
		'<rootDir>/packages/txwrapper-examples/lib',
		'<rootDir>/packages/txwrapper-orml/lib',
		'<rootDir>/packages/txwrapper-polkadot/lib',
		'<rootDir>/packages/txwrapper-registry/lib',
		'<rootDir>/packages/txwrapper-substrate/lib',
	],
};
