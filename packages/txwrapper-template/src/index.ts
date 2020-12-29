import { methods as substrateMethods } from '@substrate/txwrapper-substrate';

// Export methods of pallets included in your chain's runtime.
// Note: you may also want to create methods for pallets specifc to your chain. In that case
// consult the CHAIN_BUILDER.md guide.
export const methods = {
	balances: substrateMethods.balances,
	utility: substrateMethods.utility,
	proxy: substrateMethods.proxy,
};

// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';

// Re-export support getRegistry, which has support for chain types from @polkadot/apps-config
export {
	getRegistry,
	knownChainProperties,
} from '@substrate/txwrapper-registry';
