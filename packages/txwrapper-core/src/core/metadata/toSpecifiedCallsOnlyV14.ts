// Copyright 2022 via polkadot-js/api/packages/types/src/metadata/util/toCallsOnly.js
//
// The below functionality that has been converted from polkadot-js are:
// trimDocs, and ModuleMetadataTrimmed, as well as some of the logic concerning PortableType, and
// Option<PalletCallMetadataLatest> generation.
//
// Source: https://github.com/polkadot-js/api/blob/master/packages/types/src/metadata/util/toCallsOnly.ts

import type {
	MetadataLatest,
	PalletCallMetadataLatest,
	PalletMetadataV14,
	PortableType,
} from '@polkadot/types/interfaces/metadata';
import { Si1Type } from '@polkadot/types/interfaces/scaleInfo';
import { Option, Text, u8 } from '@polkadot/types-codec';
import type { AnyJson, Registry } from '@polkadot/types-codec/types';

interface ModuleMetadataTrimmed {
	calls: Option<PalletCallMetadataLatest>;
	index: u8;
	name: Text;
}

/**
 * Trim the docs for a given lookup type.
 *
 * @param docs
 */
const trimDocs = (docs: Text[]): string[] => {
	const strings = docs.map((d) => d.toString().trim());
	const firstEmpty = strings.findIndex((d) => !d.length);

	return firstEmpty === -1 ? strings : strings.slice(0, firstEmpty);
};

/**
 * Given a type definition, a type cache, and a stack, add type id's to each datastructure
 * as necessary.
 *
 * @param type
 * @param cache
 * @param stack
 */
const findLookupIdsInTypeDef = (
	type: Si1Type,
	cache: Set<unknown>,
	stack: string[]
): void => {
	const { def } = type;

	// Composite types
	if (def.isComposite) {
		def.asComposite.fields.forEach((f) => {
			const lookupId = f.type.toString();
			if (!cache.has(lookupId)) {
				cache.add(lookupId);
				stack.push(lookupId);
			}
		});
	}

	// Variant types
	if (def.isVariant) {
		def.asVariant.variants.forEach((v) => {
			v.fields.forEach((f) => {
				const lookupId = f.type.toString();
				if (!cache.has(lookupId)) {
					cache.add(lookupId);
					stack.push(lookupId);
				}
			});
		});
	}

	// Sequence types
	if (def.isSequence) {
		const lookupId = def.asSequence.type.toString();
		if (!cache.has(lookupId)) {
			cache.add(lookupId);
			stack.push(lookupId);
		}
	}

	// Array types
	if (def.isArray) {
		const lookupId = def.asArray.type.toString();
		if (!cache.has(lookupId)) {
			cache.add(lookupId);
			stack.push(lookupId);
		}
	}

	// Tuple types
	if (def.isTuple) {
		def.asTuple.forEach((id) => {
			const lookupId = id.toString();
			if (!cache.has(lookupId)) {
				cache.add(lookupId);
				stack.push(lookupId);
			}
		});
	}

	// Compact types
	if (def.isCompact) {
		const lookupId = def.asCompact.type.toString();
		if (!cache.has(lookupId)) {
			cache.add(lookupId);
			stack.push(lookupId);
		}
	}

	if (def.isBitSequence) {
		const bitStoreLookupId = def.asBitSequence.bitStoreType.toString();
		const bitOrderLookupId = def.asBitSequence.bitOrderType.toString();
		if (!cache.has(bitStoreLookupId)) {
			cache.add(bitStoreLookupId);
			stack.push(bitStoreLookupId);
		}
		if (!cache.has(bitOrderLookupId)) {
			cache.add(bitOrderLookupId);
			stack.push(bitOrderLookupId);
		}
	}
};

/**
 * Given a pallet, a type cache, and a stack, add type id's to each datastructure
 * as necessary.
 *
 * @param pallet
 * @param cache
 * @param stack
 */
const findLookupIdsInPallet = (
	pallet: PalletMetadataV14,
	cache: Set<unknown>,
	stack: string[]
): void => {
	// Storage types
	if (pallet.storage.isSome) {
		const storageVec = pallet.storage.unwrap().items;
		storageVec.forEach((item) => {
			if (item.type.isPlain) {
				const lookupId = item.type.asPlain.toString();
				if (!cache.has(lookupId)) {
					cache.add(lookupId);
					stack.push(lookupId);
				}
			}

			if (item.type.isMap) {
				// Each key and value is represented as a lookupId
				const { key, value } = item.type.asMap;
				if (!cache.has(key.toString())) {
					cache.add(key.toString());
					stack.push(key.toString());
				}
				if (!cache.has(value.toString())) {
					cache.add(value.toString());
					stack.push(value.toString());
				}
			}
		});
	}

	// Call type
	if (pallet.calls.isSome) {
		const lookupId = pallet.calls.unwrap().type.toString();
		if (!cache.has(lookupId)) {
			cache.add(lookupId);
			stack.push(lookupId);
		}
	}

	// Event type
	if (pallet.events.isSome) {
		const lookupId = pallet.events.unwrap().type.toString();
		if (!cache.has(lookupId)) {
			cache.add(lookupId);
			stack.push(lookupId);
		}
	}

	// Constant type
	if (pallet.constants) {
		pallet.constants.forEach((c) => {
			const lookupId = c.type.toString();
			if (!cache.has(lookupId)) {
				cache.add(lookupId);
				stack.push(lookupId);
			}
		});
	}

	// Error type
	if (pallet.errors.isSome) {
		const lookupId = pallet.errors.unwrap().type.toString();
		if (!cache.has(lookupId)) {
			cache.add(lookupId);
			stack.push(lookupId);
		}
	}
};

/**
 * Strip any given V14 metadata to only the calls inputted, its corresponding types,
 * any extrinsics and their corresponding types.
 *
 * @param registry
 * @param latestMetadata
 * @param includePallets
 */
export const toSpecifiedCallsOnlyV14 = (
	registry: Registry,
	latestMetadata: MetadataLatest,
	includePallets: string[] = []
): AnyJson => {
	// Stores typeId's as strings
	const typeCache = new Set();
	// Stack used to store lookup type ids to iterate over
	const stack: string[] = [];

	// Strip the calls to only the pallets we want to include, and the initial type index's we want
	const pallets = latestMetadata.pallets
		.filter((p) => includePallets.includes(p.name.toString().toLowerCase()))
		.map((p): ModuleMetadataTrimmed => {
			const { calls, index, name } = p;
			findLookupIdsInPallet(p, typeCache, stack);

			return {
				calls: registry.createTypeUnsafe('Option<PalletCallMetadataLatest>', [
					calls.unwrapOr(null),
				]),
				index,
				name,
			};
		});

	// Store the extrinsic types
	const extrinsicTypeId = latestMetadata.extrinsic.type.toString();
	if (!typeCache.has(extrinsicTypeId)) {
		typeCache.add(extrinsicTypeId);
		stack.push(extrinsicTypeId);
	}
	// Store extrinsic signed extension types
	latestMetadata.extrinsic.signedExtensions.forEach((val) => {
		const lookupId = val.type.toString();
		if (!typeCache.has(lookupId)) {
			typeCache.add(lookupId);
			stack.push(lookupId);
		}
	});

	/**
	 * Continue to pop values from the stack and add type id's to the cache
	 * if they dont exist. It will continue to increase the stack if there are types
	 * yet to be found that are necessary.
	 */
	while (stack.length > 0) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const item = stack.pop()!;
		const idx = parseFloat(item);
		// A lookup types index in the lookup.types array is the same as their lookup index.
		const { type } = latestMetadata.lookup.types[idx];
		// Traverse the typedef for its required sub types
		findLookupIdsInTypeDef(type, typeCache, stack);
	}

	// Filter out all necessary types, then return them as its correct PortableType
	const lookupTypes: PortableType[] = latestMetadata.lookup.types
		.filter(({ id }) => typeCache.has(id.toString()))
		.map(({ id, type }) =>
			registry.createTypeUnsafe('PortableType', [
				{
					id,
					type: {
						...type,
						docs: trimDocs(type.docs),
					},
				},
			])
		);

	return registry
		.createTypeUnsafe('MetadataLatest', [
			{
				extrinsic: latestMetadata.extrinsic,
				lookup: {
					types: lookupTypes,
				},
				pallets,
			},
		])
		.toJSON();
};
