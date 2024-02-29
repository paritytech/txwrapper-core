module.exports = {
	entryPoints: [
		'./packages/txwrapper-polkadot/src',
		'./packages/txwrapper-core/src',
		'./packages/txwrapper-registry/src',
		'./packages/txwrapper-substrate/src',
		'./packages/txwrapper-orml/src',
		'./packages/txwrapper-dev/src',
	],
	entryPointStrategy: "Expand",
	plugin: ["typedoc-theme-hierarchy"],
	exclude: [
		'**/*spec.ts',
		'node_modules/**',
		'./packages/txwrapper-core/src/test-helpers/**',
		'./packages/txwrapper-core/src/core/*',
		'./packages/txwrapper-polkadot/src/test-helpers/**',
		'./packages/txwrapper-polkadot/src/methods/*',
		'./packages/txwrapper-substrate/src/test-helpers/**',
		'./packages/txwrapper-substrate/src/methods/*',
		'./packages/txwrapper-orml/src/test-helpers/**',
		'./packages/txwrapper-orml/src/methods/*',
		'./packages/txwrapper-dev/src/jest-helpers/**',
		'./packages/txwrapper-dev/src/constants/**',
		'./packages/txwrapper-dev/src/metadata/**',
		'./packages/txwrapper-dev/src/mock-types/**',
		'./packages/txwrapper-dev/src/registries/**',

	],
	navigationLinks: {
		Repository: "https://github.com/paritytech/txwrapper-core",
		"Parity.io": "https://www.parity.io/"
	},
	includeVersion: true,
	excludeExternals: true,
	excludePrivate: true,
	hideGenerator: true,
	out: 'docs',
};
