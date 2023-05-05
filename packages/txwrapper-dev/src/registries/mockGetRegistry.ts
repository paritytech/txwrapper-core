import { GenericChainProperties, TypeRegistry } from '@polkadot/types';
import { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import {
	AnyJson,
	OverrideBundleType,
	RegistryTypes,
} from '@polkadot/types/types';

import { mockCreateMetadata } from '../metadata';
import { ChainProperties } from '../mock-types';

export interface MockGetRegistryBaseArgs {
	chainProperties: ChainProperties | AnyJson;
	specTypes: RegistryTypes;
	metadataRpc: `0x${string}`;
	asCallsOnlyArg?: boolean;
	signedExtensions?: string[];
	userExtensions?: ExtDef;
	typesBundle?: OverrideBundleType;
	additionalTypes?: RegistryTypes;
}

export function mockGetRegistryBase({
	chainProperties,
	specTypes,
	metadataRpc,
	asCallsOnlyArg,
	signedExtensions,
	userExtensions,
	typesBundle,
	additionalTypes,
}: MockGetRegistryBaseArgs): TypeRegistry {
	const registry = new TypeRegistry();

	const generatedMetadata = mockCreateMetadata(
		registry,
		metadataRpc,
		asCallsOnlyArg
	);

	registry.register(specTypes);

	if (additionalTypes) {
		registry.register(additionalTypes);
	}

	registry.setMetadata(generatedMetadata, signedExtensions, userExtensions);

	registry.setKnownTypes({ typesBundle });

	// Register the chain properties for this registry
	registry.setChainProperties(
		registry.createType(
			'ChainProperties',
			chainProperties
		) as GenericChainProperties
	);

	return registry;
}
