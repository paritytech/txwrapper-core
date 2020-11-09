import { balances, utility } from '@substrate/txwrapper-substrate/src/methods';

// Export methods of pallets included in the Polkadot/ Kusama/ Westend runtimes.
// Note: in the future this may also include methods defined within this package
// that do not exist in Substrate.
export const methods = {
	balances,
	utility,
};
// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';
// SS58 is not exported at the top level since most txwrapper-core users don't need it,
// so we have to reach in and grab it
export { PolkadotSS58Format } from '@substrate/txwrapper-core/src/polkadot';
// getRegistry{Polkadot, Westend, Kusama}
export * from './getRegistry';
