import type {
	MetadataLatest,
	PalletCallMetadataLatest,
	PalletMetadataV14,
	PortableType,
} from '@polkadot/types/interfaces/metadata';
import { Si1LookupTypeId, Si1Type } from '@polkadot/types/interfaces/scaleInfo';
import { Option, Text, u8 } from '@polkadot/types-codec';
import type { AnyJson, Registry } from '@polkadot/types-codec/types';

interface ModuleMetadataTrimmed {
	calls: Option<PalletCallMetadataLatest>;
	index: u8;
	name: Text;
}

/**
 * @param docs
 * @returns
 */
const trimDocs = (docs: Text[]): string[] => {
	const strings = docs.map((d) => d.toString().trim());
	const firstEmpty = strings.findIndex((d) => !d.length);

	return firstEmpty === -1 ? strings : strings.slice(0, firstEmpty);
};

/**
 * Given a type definition, and a set, add the lookup ids of each type to the set.
 *
 * @param type
 * @param id
 * @param set
 */
const findLookupIdsInTypeDef = (
	type: Si1Type,
	id: Si1LookupTypeId,
	set: Set<unknown>
): void => {
	const { def } = type;

	// Composite types
	if (def.isComposite) {
		def.asComposite.fields.forEach((f) => {
			const lookupId = f.type.toString();
			if (!set.has(lookupId)) set.add(lookupId);
		});
	}

	// Variant types
	if (def.isVariant) {
		// Can this be more efficient
		def.asVariant.variants.forEach((v) => {
			v.fields.forEach((f) => {
				const lookupId = f.type.toString();
				if (!set.has(lookupId)) set.add(lookupId);
			});
		});
	}

	// Sequence types
	if (def.isSequence) {
		const lookupId = def.asSequence.type.toString();
		if (!set.has(lookupId)) set.add(lookupId);
	}

	// Array types
	if (def.isArray) {
		const lookupId = def.asArray.type.toString();
		if (!set.has(lookupId)) set.add(lookupId);
	}

	// Tuple types
	if (def.isTuple) {
		def.asTuple.forEach((id) => {
			const lookupId = id.toString();
			if (!set.has(lookupId)) set.add(lookupId);
		});
	}

	// Primitive types
	// NOTE: This check might not be necessary
	if (def.isPrimitive) {
		// for primitive types, we only need the root id. If this isnt necessary
		// we can take the id out of the params too.
		if (!set.has(id.toString())) set.add(id.toString());
	}

	// Compact types
	if (def.isCompact) {
		const lookupId = def.asCompact.type.toString();
		if (!set.has(lookupId)) set.add(lookupId);
	}

	if (def.isBitSequence) {
		const bitStoreLookupId = def.asBitSequence.bitStoreType.toString();
		const bitOrderLookupId = def.asBitSequence.bitOrderType.toString();
		if (!set.has(bitStoreLookupId)) set.add(bitStoreLookupId);
		if (!set.has(bitOrderLookupId)) set.add(bitOrderLookupId);
	}
};

/**
 * Given a pallet, and a set, add all lookup type ids to the set.
 *
 * @param pallet
 * @param set
 */
const findLookupIdsInPallet = (
	pallet: PalletMetadataV14,
	set: Set<unknown>
): void => {
	// Storage types
	if (pallet.storage.isSome) {
		const storageVec = pallet.storage.unwrap().items;
		storageVec.forEach((item) => {
			if (item.type.isPlain) {
				const lookupId = item.type.asPlain.toString();
				if (!set.has(lookupId)) set.add(lookupId);
			}

			if (item.type.isMap) {
				// Each key and value is represented as a lookupId
				const { key, value } = item.type.asMap;
				if (!set.has(key.toString())) set.add(key.toString());
				if (!set.has(value.toString())) set.add(value.toString());
			}
		});
	}

	// Call type
	if (pallet.calls.isSome) {
		const lookupId = pallet.calls.unwrap().type.toString();
		if (!set.has(lookupId)) set.add(lookupId);
	}

	// Event type
	if (pallet.events.isSome) {
		const lookupId = pallet.events.unwrap();
		if (!set.has(lookupId)) set.add(lookupId.toString());
	}

	// Constant type
	if (pallet.constants) {
		pallet.constants.forEach((c) => {
			const lookupId = c.type.toString();
			if (!set.has(lookupId)) set.add(lookupId);
		});
	}

	// Error type
	if (pallet.errors.isSome) {
		const lookupId = pallet.errors.unwrap().type.toString();
		if (!set.has(lookupId)) set.add(lookupId);
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
	const typeHashMap = new Set();

	// Strip the calls to only the pallets we want to include, and the initial type index's we want
	const pallets = latestMetadata.pallets
		.filter((p) => includePallets.includes(p.name.toString().toLowerCase()))
		.map((p): ModuleMetadataTrimmed => {
			const { calls, index, name } = p;
			findLookupIdsInPallet(p, typeHashMap);

			return {
				calls: registry.createTypeUnsafe('Option<PalletCallMetadataLatest>', [
					calls.unwrapOr(null),
				]),
				index,
				name,
			};
		});

	// Find all types needed for the extrinsics
	typeHashMap.add(latestMetadata.extrinsic.type.toString());
	latestMetadata.extrinsic.signedExtensions.forEach((val) => {
		if (!typeHashMap.has(val.type.toString())) {
			typeHashMap.add(val.type.toString());
		}
	});

	// Add all necessary type id's to the set from each type definition
	// It reverses the array so correctly traverse the types, making sure primitive
	// types are last.
	latestMetadata.lookup.types.reverse().forEach(({ id, type }) => {
		if (typeHashMap.has(id.toString())) {
			// Traverse the typedef for its required sub types
			findLookupIdsInTypeDef(type, id, typeHashMap);
		}
	});

	// Filter out all necessary types, then return them as its correct PortableType
	const lookupTypes: PortableType[] = latestMetadata.lookup.types
		.filter(({ id }) => typeHashMap.has(id.toString()))
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
