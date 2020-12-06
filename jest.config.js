/* eslint-disable no-undef */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// Config with path aliases

const {
	compilerOptions: { paths },
} = require('./tsconfig.json');

module.exports = {
	preset: 'ts-jest',
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
