import { methods as substrateMethods } from '@substrate/txwrapper-substrate';

// Export methods of pallets included in the Polkadot/ Kusama/ Westend runtimes.
// Note: in the future this may also include methods defined within this package
// that do not exist in Substrate.
export const methods = {
	balances: substrateMethods.balances,
	utility: substrateMethods.utility,
	proxy: substrateMethods.proxy,
};

// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';
export {
	getRegistry,
	knownChainProperties,
} from '@substrate/txwrapper-registry';
