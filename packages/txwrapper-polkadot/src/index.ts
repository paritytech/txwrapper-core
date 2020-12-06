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

// SS58 is not exported at the top level since most txwrapper-core users don't need it,
// so we have to reach in and grab it
export {
	getRegistry,
	knownChainProperties,
} from '@substrate/txwrapper-registry';
