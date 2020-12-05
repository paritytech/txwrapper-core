import { currencies } from '@substrate/txwrapper-orml/methods';

// Export methods of pallets included in the Acala/ Mandala runtimes.
export const methods = {
	currencies,
};

export * from './TokenSymbol';

// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';

// Exort getRegistry
export {
	getRegistry,
	knownChainProperties,
} from '@substrate/txwrapper-registry';
