import { currencies } from '@substrate/txwrapper-orml/src/methods';

// Export methods of pallets included in the Acala/ Mandala runtimes.
export const methods = {
	currencies,
};

// exports getRegistry{Acala, Mandala}
export * from './getRegistry';
export * from './TokenSymbol';

// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';
