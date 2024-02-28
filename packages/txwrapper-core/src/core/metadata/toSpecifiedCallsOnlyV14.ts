// Copyright 2022 via polkadot-js/api/packages/types/src/metadata/util/toCallsOnly.js
//
// The below functionality that has been converted from polkadot-js are:
// ModuleMetadataTrimmed, as well as some of the logic concerning PortableType, and
// Option<PalletCallMetadataLatest> generation.
//
// Source: https://github.com/polkadot-js/api/blob/9b794e963df5d3cb4aa3ff122a9a9eb94f51ab81/packages/types/src/metadata/util/toCallsOnly.ts

import type {
	MetadataV14,
	PalletCallMetadataLatest,
	PalletMetadataV14,
	PortableType,
} from '@polkadot/types/interfaces/metadata';
import {
	Si1Field,
	Si1LookupTypeId,
	Si1Type,
} from '@polkadot/types/interfaces/scaleInfo';
import { Option, Text, u8, Vec } from '@polkadot/types-codec';
import type { AnyJson, Registry } from '@polkadot/types-codec/types';
import { objectSpread } from '@polkadot/util';

interface ModuleMetadataTrimmed {
	calls: Option<PalletCallMetadataLatest>;
	index: u8;
	name: Text;
}

/**
 * Remove docs from variant, and composite types
 *
 * @param type Si1Type that will be stripped of its docs
 * @param registry Registry used to recreate Si Types
 */
const removeDocs = (type: Si1Type, registry: Registry): Si1Type => {
	// Remove docs from variants
	if (type.def.isVariant) {
		const mapVariant = type.def.asVariant.variants.map(
			({ name, fields, index }) =>
				registry.createType('Si1Variant', {
					name,
					index,
					fields: removeDocsFromFields(registry, fields),
					docs: [],
				}),
		);

		const typeDef = registry.createType('Si1TypeDef', {
			Variant: {
				variants: mapVariant,
			},
		});

		return registry.createType(
			'Si1Type',
			objectSpread({}, type, { def: typeDef, docs: [] }),
		);
	}

	// Remove docs from composite
	if (type.def.isComposite) {
		const typeDef = registry.createType('Si1TypeDef', {
			Composite: {
				fields: removeDocsFromFields(registry, type.def.asComposite.fields),
			},
		});

		return registry.createType(
			'Si1Type',
			objectSpread({}, type, { def: typeDef, docs: [] }),
		);
	}

	return type;
};

/**
 * Removes the docs from fields
 *
 * @param registry
 * @param fields
 */
const removeDocsFromFields = (
	registry: Registry,
	fields: Vec<Si1Field>,
): Si1Field[] => {
	return fields.map(({ name, type, typeName }) =>
		registry.createType('Si1Field', {
			name,
			type,
			typeName,
			docs: [],
		}),
	);
};

/**
 * Given a lookupId, see if it exists within the cache, and if it doesn't, add
 * it to both the cache and stack.
 *
 * @param lookupId
 * @param cache
 * @param stack
 */
const tryAddType = (
	lookupId: Si1LookupTypeId,
	cache: Set<unknown>,
	stack: string[],
) => {
	const lookupStr = lookupId.toString();
	if (!cache.has(lookupStr)) {
		cache.add(lookupStr);
		stack.push(lookupStr);
	}
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
	stack: string[],
): void => {
	const { def } = type;

	// Composite types
	if (def.isComposite) {
		def.asComposite.fields.forEach((f) => {
			tryAddType(f.type, cache, stack);
		});
	}

	// Variant types
	if (def.isVariant) {
		def.asVariant.variants.forEach((v) => {
			v.fields.forEach((f) => {
				tryAddType(f.type, cache, stack);
			});
		});
	}

	// Sequence types
	if (def.isSequence) {
		tryAddType(def.asSequence.type, cache, stack);
	}

	// Array types
	if (def.isArray) {
		tryAddType(def.asArray.type, cache, stack);
	}

	// Tuple types
	if (def.isTuple) {
		def.asTuple.forEach((id) => {
			tryAddType(id, cache, stack);
		});
	}

	// Compact types
	if (def.isCompact) {
		tryAddType(def.asCompact.type, cache, stack);
	}

	if (def.isBitSequence) {
		tryAddType(def.asBitSequence.bitStoreType, cache, stack);
		tryAddType(def.asBitSequence.bitOrderType, cache, stack);
	}
};

/**
 * Given a pallet, store all its type id's in a cache
 * as necessary.
 *
 * @param pallet
 * @param cache
 */
const findLookupIdsInPallet = (
	pallet: PalletMetadataV14,
	cache: Set<unknown>,
): void => {
	// Storage types
	if (pallet.storage.isSome) {
		const storageVec = pallet.storage.unwrap().items;
		storageVec.forEach((item) => {
			if (item.type.isPlain) {
				const lookupId = item.type.asPlain.toString();
				cache.add(lookupId);
			}

			if (item.type.isMap) {
				// Each key and value is represented as a lookupId
				const { key, value } = item.type.asMap;
				cache.add(key.toString());
				cache.add(value.toString());
			}
		});
	}

	// Call type
	if (pallet.calls.isSome) {
		const lookupId = pallet.calls.unwrap().type.toString();
		cache.add(lookupId);
	}

	// Event type
	if (pallet.events.isSome) {
		const lookupId = pallet.events.unwrap().type.toString();
		cache.add(lookupId);
	}

	// Constant type
	if (pallet.constants) {
		pallet.constants.forEach((c) => {
			const lookupId = c.type.toString();
			cache.add(lookupId);
		});
	}

	// Error type
	if (pallet.errors.isSome) {
		const lookupId = pallet.errors.unwrap().type.toString();
		cache.add(lookupId);
	}
};

/**
 * Given a type, find all sub typeIds within it's params.
 *
 * @param type
 * @param cache
 * @param stack
 */
const findLookupIdsInParams = (
	type: Si1Type,
	cache: Set<unknown>,
	stack: string[],
) => {
	const { params } = type;

	// Check for params
	if (params.length > 0) {
		params.forEach((p) => {
			if (p.type.isSome) {
				tryAddType(p.type.unwrap(), cache, stack);
			}
		});
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
	latestMetadata: MetadataV14,
	includePallets: string[] = [],
): AnyJson => {
	// Stores typeId's as strings
	const typeCache = new Set();

	// Strip the calls to only the pallets we want to include, and the initial type index's we want
	const pallets = latestMetadata.pallets
		.filter((p) => includePallets.includes(p.name.toString().toLowerCase()))
		.map((p): ModuleMetadataTrimmed => {
			const { calls, index, name } = p;
			findLookupIdsInPallet(p, typeCache);

			return {
				calls: registry.createTypeUnsafe('Option<PalletCallMetadataLatest>', [
					calls.unwrapOr(null),
				]),
				index,
				name,
			};
		});

	const extrinsicTypeId = latestMetadata.extrinsic.type.toString();
	typeCache.add(extrinsicTypeId);
	// Store extrinsic signed extension types
	latestMetadata.extrinsic.signedExtensions.forEach((val) => {
		const lookupId = val.type.toString();
		typeCache.add(lookupId);
	});

	// Stack used to store lookup type ids to iterate over
	const stack: string[] = [];
	typeCache.forEach((str) => stack.push(str as string));
	/**
	 * Continue to pop values from the stack and add type id's to the cache
	 * if they dont exist. It will continue to increase the stack if there are types
	 * yet to be found that are necessary.
	 */
	while (stack.length > 0) {
		const item = stack.pop() as string;
		const idx = parseFloat(item);
		// A lookup types index in the lookup.types array is the same as their lookup index.
		const { type } = latestMetadata.lookup.types[idx];
		// Traverse the typedef for its required sub types
		findLookupIdsInTypeDef(type, typeCache, stack);
		// Traverse the params for its required sub types
		findLookupIdsInParams(type, typeCache, stack);
	}

	// Filter out all necessary types, then return them as its correct PortableType
	const lookupTypes: PortableType[] = latestMetadata.lookup.types
		.filter(({ id }) => typeCache.has(id.toString()))
		.map(({ id, type }) =>
			registry.createTypeUnsafe('PortableType', [
				{
					id,
					type: objectSpread({}, removeDocs(type, registry), { docs: [] }),
				},
			]),
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
