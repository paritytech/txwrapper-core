module.exports = {
	preset: 'ts-jest',
	testPathIgnorePatterns: ['lib', 'node_modules'],
	moduleNameMapper: {
		'@acala-network/txwrapper-acala(.*)$':
			'<rootDir>/packages/txwrapper-acala/src/$1',
		'@substrate/txwrapper-core(.*)$':
			'<rootDir>/packages/txwrapper-core/src/$1',
		'@substrate/txwrapper-examples(.*)$':
			'<rootDir>/packages/txwrapper-examples/src/$1',
		'@substrate/txwrapper-orml(.*)$':
			'<rootDir>/packages/txwrapper-orml/src/$1',
		'@substrate/txwrapper-polkadot(.*)$':
			'<rootDir>/packages/txwrapper-polkadot/src/$1',
		'@substrate/txwrapper-registry(.*)$':
			'<rootDir>/packages/txwrapper-registry/src/$1',
		'@substrate/txwrapper-substrate(.*)$':
			'<rootDir>/packages/txwrapper-substrate/src/$1',
	},
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
