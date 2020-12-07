import { methods as ORMLMethods } from '@substrate/txwrapper-orml';

// Export methods of pallets included in the Acala / Mandala runtimes.
export const methods = {
	currencies: ORMLMethods.currencies,
};

export * from './TokenSymbol';

// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';
export {
	getRegistry,
	knownChainProperties,
} from '@substrate/txwrapper-registry';
