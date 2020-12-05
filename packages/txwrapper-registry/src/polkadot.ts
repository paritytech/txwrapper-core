export { PolkadotSS58Format } from '@substrate/txwrapper-core/src/test-helpers';

/**
 * Token symbols for Polkadot, Kusama, and Westend.
 */
export enum PolkadotTokenSymbol {
	polkadot = 'DOT',
	kusama = 'KSM',
	westend = 'WND',
}

/**
 * Token decimal places for Polkadot, Kusama, and Westend.
 */
export enum PolkadotTokenDecimal {
	polkadot = 10,
	kusama = 12,
	westend = 12,
}
