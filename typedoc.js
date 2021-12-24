module.exports = {
	entryPoints: [
		'./packages/txwrapper-core/src',
		'./packages/txwrapper-polkadot/src',
		'./packages/txwrapper-substrate/src',
	],
	exclude: [
		'**/*spec.ts',
		'node_modules/**',
		'./packages/txwrapper-core/src/test-helpers/**',
		'./packages/txwrapper-polkadot/src/test-helpers/**',
		'./packages/txwrapper-substrate/src/test-helpers/**',
	],
	excludeExternals: true,
	excludePrivate: true,
	hideGenerator: true,
	out: 'docs',
	theme: 'markdown',
};
