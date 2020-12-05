// import { typesBundle, typesChain, typesSpec } from '@polkadot/apps-config/api';
// import { TypeRegistry } from '@polkadot/types';
// import { getSpecTypes } from '@polkadot/types-known';
// import { getRegistry } from '@substrate/txwrapper-core';

// /**
//  * Know types from @polkadot/apps-config
//  */
// const knownTypes = {
// 	typesBundle,
// 	typesChain,
// 	typesSpec,
// };

// export enum AcalaSS58Format {
// 	acala = 10,
// 	mandala = 42,
// }

// export enum AcalaTokenSymbols {
// 	acala = 'ACA',
// 	mandala = 'ACA',
// }

// export enum AcalaTokenDecimals {
// 	acala = 18,
// 	mandala = 18,
// }

// export enum AcalaSpecName {
// 	acala = 'acala',
// 	mandala = 'mandala',
// }

// export enum AcalaChainName {
// 	Acala = 'Acala',
// 	Mandala = 'Mandala',
// }

// export function getRegistryMandala(
// 	specVersion: number,
// 	metadataRpc: string
// ): TypeRegistry {
// 	const registry = new TypeRegistry();
// 	registry.setKnownTypes(knownTypes);

// 	return getRegistry({
// 		chainProperties: {
// 			ss58Format: AcalaSS58Format.mandala,
// 			tokenDecimals: AcalaTokenDecimals.mandala,
// 			tokenSymbol: AcalaTokenSymbols.mandala,
// 		},
// 		specTypes: getSpecTypes(
// 			registry,
// 			AcalaChainName.Mandala,
// 			AcalaSpecName.mandala,
// 			specVersion
// 		),
// 		metadataRpc,
// 	});
// }

// export function getRegistryAcala(
// 	specVersion: number,
// 	metadataRpc: string
// ): TypeRegistry {
// 	const registry = new TypeRegistry();
// 	registry.setKnownTypes(knownTypes);

// 	return getRegistry({
// 		chainProperties: {
// 			ss58Format: AcalaSS58Format.acala,
// 			tokenDecimals: AcalaTokenDecimals.acala,
// 			tokenSymbol: AcalaTokenSymbols.acala,
// 		},
// 		specTypes: getSpecTypes(
// 			registry,
// 			AcalaChainName.Acala,
// 			AcalaSpecName.acala,
// 			specVersion
// 		),
// 		metadataRpc,
// 	});
// }
